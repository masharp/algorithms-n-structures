'use strict';

Array.prototype.shellSort = function shellSort() {
    const N = this.length;
    let h = 1;

    while (h < N / 3) h = 3 * h + 1;

    while (h >= 1) {

        for (let x = h; x < N; x++) {

            for (let y = x; y >= h && isLess(this[]))
        }
    }
}
