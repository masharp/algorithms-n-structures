/**
 * functions that computes the Jaro and Winkler distances between two strings.
 * Influenced by https://github.com/NaturalNode/natural
 *
 * NOTE: still off by ~10%
*/

/**
 * computes the Jaro distance based on http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance
 * compares two strings by finding matching characters and transpositions.
 * a transposition is the number of matching, but different sequence order, characters divided by 2
 * time and space complexity should be O(|s1| + |s2|)
 *
 *
 *
 *
 * @param(string) first string to compare
 * @param(string) second string to compare
 * @return(number) jaro distance (between 0 and 1)
 */
function jaroDistance(stringA, stringB) {
	if (typeof stringA != 'string' || stringA.length == 0 || typeof stringB != 'string' || stringA.length == 0) { return 0.0; }

	/* compute the range (i +- range) for a valid matching character. this means the character in
	   stringA must be the same and no farther in the sequence of stringB
	   than floor(max(lenA, lenB) / 2) - 1. These matches are transpositions.
	*/
	var lenA = stringA.length;
	var lenB = stringB.length;
	var maxLen = Math.max(lenA, lenB);
	var tracker = 0;

	var sieve = { a: new Array(lenA), b: new Array(lenB) };
	var matchingRange = (Math.floor(maxLen / 2) - 1);

	var matching = 0; // sequential character matches
	var transpositions = 0; // non-sequential character matches within the matching range
	var jaro = 0.0;

	stringA = stringA.toLowerCase();
	stringB = stringB.toLowerCase();

	if (stringA == stringB) { return 1.0; }

	for (var x = 0; x < lenA; x++) {
		var cA = stringA[x];
		var cB = stringB[x];
		var found = false;

		// sequential character match
		if (cA == cB) {
			sieve.a[i] = sieve.b[i] = true;
			found = true;
			matching++;

		} else {

			/* check for transpositions within the ceiling range */
			for (var i = x; i < i + matchingRange && i < lenB && !found; i++) {
				var tCeil = stringB[i];

				if (tCeil == cA) {
					if (!sieve.a[x] && !sieve.b[i]) {
						matching++;
					}

					sieve.a[x] = sieve.b[i] = true;
					found = true;
				}
			}

			/* check for transpositions within the floor range */
			for (var j = x; j > j - matchingRange && j > -1 && !found; j--) {
				var tFloor = stringB[j];

				if (tFloor == cA) {
					if (!sieve.a[x] && !sieve.b[j]) {
						matching++;
					}

					sieve.a[x] = sieve.b[j] = true;
					found = true;
				}
			}
		}
	}

	/* count transposition, defined as matching characters */
	for (var k = 0; k < lenA; k++) {
		if (sieve.a[tracker]) {
			while (!sieve.b[tracker] && tracker < sieve.b.length) {
				tracker++;
			}
			if (stringA[k] != stringB[tracker] && tracker < sieve.b.length) {
				transpositions++;
			}

			tracker++;
		}
	}

	transpositions = transpositions / 2.0;

	if (matching != 0) {
		jaro = ((matching / lenA ) + (matching / lenB) + ((matching - transpositions) / matching)) / 3;
	} else {
		jaro = 0.0;
	}

	console.log(stringA, stringB);
	console.log('MATCHING RANGE: ' + matchingRange);
	console.log(sieve.a);
	console.log(sieve.b);
	console.log(matching, transpositions);
	console.log('JARO: ' + jaro);

	return jaro;
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
	var stringA = 'dixon';
	var stringB = 'dicksonx';

	jaroDistance(stringA, stringB);
})();

module.exports = jaroDistance;
module.exports = jaroWinklerDistance;
