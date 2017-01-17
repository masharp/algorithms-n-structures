/**
 * functions that computes the Jaro and Winkler distances between two strings.
 * Influenced by https://github.com/NaturalNode/natural
*/

/**
 * computes the Jaro distance based on http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
 * compares two strings by finding matching characters and transpositions.
 * a transposition is the number of matching, but different sequence order, characters divided by 2
 * @param(string) first string to compare
 * @param(string) second string to compare
 * @return(number) jaro distance (between 0 and 1)
 */
function jaroDistance(stringA, stringB) {
	if (typeof stringA != 'string' || stringA.length == 0 || typeof stringB != 'string' || stringA.length == 0) { return 0; }

	var matching = 0;
	var transpositions = 0;

	stringA = stringA.toLowerCase();
	stringB = stringB.toLowerCase();

}

/**
 * computes the Jaro-Winkler distance based on http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
 * use the jaro distance of two strings and favors strings that match from the beginning of a prefix
 * @param(string) first string to compare
 * @param(string) second string to compare
 * @return(number) jaro-winkler distance (between 0 and 1)
 */
function jaroWinklerDistance(stringA, stringB) {
		if (typeof stringA != 'string' || stringA.length == 0 || typeof stringB != 'string' || stringA.length == 0) { return 0; }

		/* check if a simple string comparison finds exact match */
		if (stringA == stringB) { return 1; }

		var jDistance = jaroDistance(stringA, stringB);
		
		stringA = stringA.toLowerCase();
		stringB = stringB.toLowerCase();

}

module.exports = jaroDistance;
module.exports = jaroWinklerDistance;
