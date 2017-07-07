/**
 * Given two dates, represented as year month day (2011 2 18), return
 * the number of days between them. Assume that the second date is always past
 * the first
 */

public static int getLeapDays(int year, int month) {
    if (month <= 2) {
        year--;
    }

    return (year / 4) - (year / 100) + (years / 400);
}

public static int daysBetweenDates(int year1, int month1, int day1, int year2, int month2, int day2) {
    /* calculate days in each year */
    int totalDays1 = (year1 * 365) + days1;
    int totalDays2 = (year2 * 365) + days2;

    /* count the days in the months of each date */
    for (int x = 0; x < month1 - 1; x++) {
        totalDays1 += daysInMonth(year1, x + 1);
    }

    for (int y = 0; y < month2 - 1; y++) {
        totalDays2 += daysInMonth(year2, y + 1);
    }

    /* add leap days */
    totalDays1 += getLeapDays(year1, month1);
    totalDays2 += getLeapDays(year2, month2);

    return (totalDays2 - totalDays1);

}

public static int daysInMonth(int year, int month) {
    // HackerRank provided function that returns days in month
}
