(function (root, factory) {
    var dependencies = ['./ngeCanon'];
    if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require(dependencies[0]));
    } else {
        root.returnExports = factory(root.canon);
    }
}(typeof self !== 'undefined' ? self : this, function (canon) {

// i.e. define(['node_modules/lodash/lodash.min', 'ngeCanon'], function (_, canon) {

        'use strict';

        var canonService = {

            findAllCanonItems: function () {
                return canon;
            },

            findAllAlphanumerics: function () {
                var alphanumerics = [];
                canon.forEach(function(value, key) {
                    canon[key].forEach(function(_value, _key) {
                        if(_key === 'alphanumeric') {
                            alphanumerics.push(_value);
                        }
                    });
                });
                return alphanumerics;
            },

            findAllTerms: function () {
                var terms = [];
                canon.forEach(function(value, key) {
                    canon[key].forEach(function(_value, _key) {
                        if(_key === 'term') {
                            terms.push(_value);
                        }
                    });
                });
                return terms;
            },

            findAllMeanings: function () {
                var meanings = [];
                canon.forEach(function(value, key) {
                    canon[key].forEach(function(_value, _key) {
                        if(_key === 'meaning') {
                            meanings.push(_value);
                        }
                    });
                });
                return meanings;
            },

            findCanonItemByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                });
            },

            findTermByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).term;
            },

            findTermByNumeric: function (numeric) {
                return canon.find(function(item) {
                    return item.numeric == numeric;
                }).term;
            },

            findMeaningByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).meaning;
            },

            findNumericByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).numeric;
            },

            findCanonItemByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                });
            },

            findAlphanumericByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).alphanumeric;
            },

            findMeaningByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).meaning;
            }

        };

        return canonService;

    }
));

