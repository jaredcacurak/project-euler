function sumMultiplesOfThreeOrFiveBelow(target) {
    'use strict';
    var steps, sum, nextMultiple, index;

    // Beginning with zero and incrementing by the values in this sequence will
    // step through the natural numbers that are multipls of 3 or 5.
    steps = [3, 2, 1, 3, 1, 2, 3];
    sum = nextMultiple = index = 0; // initialze values to zero

    while (nextMultiple < target) {
        sum += nextMultiple;
        nextMultiple += steps[index];
        index = (index < 6) ? index + 1 : 0;    // wrap index back to zero
    }
    return sum;
}

sumMultiplesOfThreeOrFiveBelow(1000);