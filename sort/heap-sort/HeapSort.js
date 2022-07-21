/*
 * HeapSort utilizies priority queues in order to perform top down sorting (sink)
 */


function HeapSort(array) {
    const len = array.length;

    /* construct the heap */
    for (let x = len / 2; x >= 1; x--) {
            sink(array, x, len)
    }

    /* exhcnage the largest element and repair the heap */
    while (len > 1) {
        exchange(array, 1, len--);
        sink(a, 1, len);
    }
}
