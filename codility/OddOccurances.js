/** an odd length array contains repeated pairs of integers save for one, which
 * occurs once. return that integer.
 *
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
 */
function solution(A) {
    const len = A.length;
    let r = 0;

    for (let x = 0; x < len; x++) {
        r = r ^ A[x]; // XOR it like Harry Potter
    }

    return r;
}
