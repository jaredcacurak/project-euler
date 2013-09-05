var largestPrimeFactor = function nextFactor(number, candidate) {
    'use strict';

    candidate = candidate || 2;

    // return the largest prime factor
    if (candidate === number) {
        return candidate;
    }
    // if the number is divisible by the candidate
    if (number % candidate === 0) {
        number /= candidate;   // divide and try the candidate again
    } else {
        candidate += 1;    // try the next number
    }
    return nextFactor(number, candidate);
};

largestPrimeFactor(600851475143);