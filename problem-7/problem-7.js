function nthPrime(nth) {
    'use strict';

    var found, number, primes;

    found = 1;
    number = 1;
    primes = [2];

    if (nth < 1) { return NaN; }

    while (found < nth) {
        number += 2;

        if (isPrime(number)) {
            found += 1;
            primes.push(number);
        }
    }
    return number;

    function isPrime(n) {
        var squareRoot, i;

        squareRoot = Math.ceil(Math.sqrt(n));

        if (n <= 1) { return false; }

        for (i = 0; primes[i] <= squareRoot; i += 1) {

            if (n % primes[i] === 0) { return false; }
        }
        return true;
    }
}

nthPrime(6);
nthPrime(10001);
