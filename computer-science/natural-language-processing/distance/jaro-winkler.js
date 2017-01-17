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

	/* compute the range (i +- range) for a valid matching character. this means the character in
	   stringA must be the same and no farther in the sequence of stringB
	   than floor(max(lenA, lenB) / 2) - 1. These matches are transpositions.
	*/
	var lenA = stringA.length;
	var lenB = stringB.length;
	var maxLen = Math.max(lenA, lenB);
	var minLen = Math.min(lenA, lenB);

	var matchingRange = (Math.floor(maxLen / 2) - 1);
	var matching = 0; // sequential character matches
	var transpositions = 0; // non-sequential character matches within the matching range

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

(function() {
	var stringA = 'CREATE';
	var stringB = 'CRATE';

	jaroDistance(stringA, stringB);
})()

module.exports = jaroDistance;
module.exports = jaroWinklerDistance;
