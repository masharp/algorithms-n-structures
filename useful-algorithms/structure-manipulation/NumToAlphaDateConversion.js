/* A series of JavaScript methods for converting a numerical date range entry to an alpha-numerical
  date range entry, based on certain inferrence.
  (ie,['2015-07-01', '2016-02-23'] ---> ["July 1st, 2015", "February 23rd, 2016"]) */

function dateRangeConverter(str) {
  //create an array for each date given, splitting the [yy, mm, dd]
  var dateA = str[0].split("-");
  var dateB = str[1].split("-");

  return dateify(dateA, dateB);
}

function dateify(dateA, dateB) {
  var newDates = [];

  //month conversion object
  var monthConversion = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  }

  //day conversion object
  var dayConversion = {
    "1": "1st",
    "2": "2nd",
    "3": "3rd",
    "21": "21st",
    "22": "22nd",
    "23": "23rd",
    "31": "31st",
    "00": "th"
  }

  var year = [dateA[0], dateB[0]];
  var monthDiff = monthDifference(dateA[1], dateB[1]);
  var month = [monthConversion[dateA[1]], monthConversion[dateB[1]]];
  var day = [];

  //first day conversion
  if (dayConversion[dateA[2]/1] === undefined) {
    day.push(dateA[2] / 1 + dayConversion["00"]);
  } else {
    day.push(dayConversion[dateA[2]/1]);
  }

  //second day conversion
  if (dayConversion[dateB[2]/1] === undefined) {
    day.push(dateB[2] / 1 + dayConversion["00"]);
  } else {
    day.push(dayConversion[dateB[2]/1]);
  }

  /*
  * new date construction
  */

  //duplicate dates returns a single date
  if(year[0] === year[1] && month[0] === month[1] && day[0] == day[1]) {
    newDates.push(month[0] + " " + day[0] + ", " + year[0]);
    return newDates;
  }
  //inference for the same year and the same year && same month
  else if(year[0] === year[1] && year[0] === "2015" && year[1] === "2015") {
    if(month[0] === month[1]) {
        newDates.push(month[0] + " " + day[0]);
        newDates.push(day[1]);
        return newDates;
    } else {
      newDates.push(month[0] + " " + day[0]);
      newDates.push(month[1] + " " + day[1]);
      return newDates;
    }
  }
  //inference for a year apart but only a <= 3 months apart, displays just months
  else if((year[0] === "2015" && year[1] === "2016") && monthDiff <= 3) {
    if(month[0] === month[1]) {
        newDates.push(month[0] + " " + day[0]);
        newDates.push(day[1]);
        return newDates;
    } else {
      newDates.push(month[0] + " " + day[0]);
      newDates.push(month[1] + " " + day[1]);
      return newDates;
    }
  //inference for the same year that isn't 2015, displays months
  } else if(year[0] === year[1] && year[0] !== "2015") {
    newDates.push(month[0] + " " + day[0]);
    newDates.push(month[1] + " " + day[1]);
    return newDates;
  }
  //default return of converted year, month, day
  else {
    newDates.push(month[0] + " " + day[0] + ", " + year[0]);
    newDates.push(month[1] + " " + day[1] + ", " + year[1]);
    return newDates;
  }
}

//method for finding the difference in months based on a calendar year
function monthDifference(monthA, monthB) {
  var result = 0;

  for(var i = monthA; i < 12; i++) {
    result++;
  }
  for(var j = 0; j < monthB; j++) {
    result++;
  }
  return result;
}

dateRangeConverter(['2015-07-01', '2016-02-23']);
