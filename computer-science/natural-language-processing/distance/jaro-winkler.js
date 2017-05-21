/**
 * function that computes the Jaro and Winkler distances between two strings.
 * Influenced by https://github.com/NaturalNode/natural
*/

/**
 * computes the Jaro distance based on http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
 * @param(string) first string to compare
 * @param(string) second string to compare
 * @return(number) jaro distance (between 0 and 1)
 */
function jaroDistance(stringA, stringB) {

};


// Computes the Winkler distance between two string -- intrepreted from:
// http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
// s1 is the first string to compare
// s2 is the second string to compare
// dj is the Jaro Distance (if you've already computed it), leave blank and the method handles it
function JaroWinklerDistance(s1, s2, dj) {
		if (s1 == s2) {
				return 1
		}
		else {
		    var jaro;
		    (typeof(dj) == 'undefined')? jaro = distance(s1,s2) : jaro = dj;
		    var p = 0.1; //
		    var l = 0 // length of the matching prefix
		    while(s1[l] == s2[l] && l < 4)
		        l++;

		    return jaro + l * p * (1 - jaro);
		}
}

module.exports = winklerDistance;
module.exports = jaroDistance;
module.exports = jaroWinklerDistance;
