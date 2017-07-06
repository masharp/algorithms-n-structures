/**
 * converts an integer to its binary presentation
 *
 * @param{Number} number to be converted
 * @return{String} string - binary representation
 */

function convertToBinary(N) {
    return (N >>> 0).toString('2');
}
