//define(['canonService'], function (canonService) {
(function (root, factory) {

    var dependencies = [
        '../src/canon/canonService',
        '../node_modules/lodash/lodash.min'
    ];

    if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(
            require(dependencies[0]),
            require(dependencies[1])
        );
    } else {
        root.returnExports = factory(
            root.canonService,
            root._
        );
    }

}(typeof self !== 'undefined' ? self : this, function (canonService, _) {

        'use strict';

        var translator = {

            termify: function(text) {

                // turn string of non/alphanumerics into a string of space-delimited terms

                var alphanumerics = text.replace(/\W/g, '').toUpperCase().split('');
                var terms = alphanumerics.map(function(alphanumeric) {
                    return canonService.findTermByAlphanumeric(alphanumeric);
                });
                return terms.join(' ');
            },

            numerify: function(text) {

                // turn string of non/alphanumerics into a string of space-delimited numerics

                var alphanumerics = text.replace(/\W/g, '').toUpperCase().split('');
                var numerics = alphanumerics.map(function(alphanumeric) {
                    return canonService.findNumericByAlphanumeric(alphanumeric);
                });
                return numerics.join(' ');
            },

            doTheMathText: function(text) {

                // do the math on the numeric of each alphanumeric a la today's math

                var self = this;
                var numbers = this.numerify(text).split(' ').map(Number);
                var math = numbers.map(function(number) {
                    return self.doTheMathNumber(number);
                });
                return math.join(', ');
            },

            doTheMathNumber: function(number) {
                var math = [];
                if(number <= 9) {
                    math.push(canonService.findTermByNumeric(number));
                }
                else {

                    // break them into individual digits
                    var digits = number.toString().split('').map(Number);

                    // push the terms for each digit
                    math.push(digits.map(function(digit) {
                        return canonService.findTermByNumeric(digit);
                    }).join(' '));

                    // push 'all being born to'
                    math.push('all being born to');

                    // sum them
                    var sum = digits.reduce(function(a, b) {
                        return parseInt(a) + parseInt(b);
                    });

                    // recursion on the sum
                    math.push(this.doTheMathNumber(sum));
                }

                return math.join(' ');
            },
        };

        return translator;
}));

