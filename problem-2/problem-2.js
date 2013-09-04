(function (number) {
    'use strict';
    var sum, previous, current, next;

    sum = 0;
    previous = 0;
    current = 1;

    do {
        next = previous + current;
        sum += (next % 2 === 0) ? next : 0;
        previous = current;
        current = next;
    } while (next < number);
    return sum;
}(4e6));