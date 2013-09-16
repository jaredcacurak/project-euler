var largestPrimeFactor = function nextFactor(number, candidate) {
    'use strict';

    candidate = candidate || 2;

    // if the number is NOT divisible by the candidate
    if (number % candidate) {
        candidate += 1; // try the next number
    } else {
        number /= candidate;    // divide and try the candidate again
    }
    return (candidate === number)
        ? candidate // return the largest prime factor
        : nextFactor(number, candidate);
};

largestPrimeFactor(600851475143);