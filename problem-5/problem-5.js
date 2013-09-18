function smallestMultiple(numbers) {
    'use strict';

    return reduceWith(productOf, reduceWith(countPrimeFactors, numbers, []), 1);

    function reduceWith(fn, array, initialValue) {
        return array.reduce(fn, initialValue);
    }

    function productOf(product, exponent, base) {
        return product * Math.pow(base, exponent);
    }

    function countPrimeFactors(result, number) {
        var counter, candidate;

        counter = 0;
        candidate = 2;

        while (true) {

            // if the number is evenly divisible by the candidate
            if (number % candidate === 0) {
                counter += 1;   // increment the counter
                number /= candidate;    // divide and try again
            }
            // else the number is not a factor of the cadidate
            else {

                // if the counter is greater than the recorded value
                if (counter > (result[candidate] || 0)) {
                    result[candidate] = counter;    // update the candidate's count
                }
                counter = 0;    // reset the counter
                candidate += 1; // try the next candidate

                // breakout if the number has no other divisors
                if (number === 1) { break; }
            }
        }
        return result;
    }
}

smallestMultiple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);