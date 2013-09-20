// Find the difference between the sum of the squares and the square of the sum.
(function (n) {
    'use strict';

    var total = 0;

    while (n) {
        total += Math.pow(n, 3) - Math.pow(n, 2);
        n -= 1;
    }
    return total;
}(100));