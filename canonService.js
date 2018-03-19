/*

even lower level functions (maybe in a canon_service)
these should be implemented by any "canon service/dao"

0) findAllCanonItems: return entire canon
0) findAllTerms: return all terms from canon
0) findAllMeanings: return all meanings from canon
0) findAllAlphanumerics: return all alphanumerics from canon

0) findCanonItemByAlphanumeric(alphanumeric): return canon item by alphanumeric
0) findTermByAlphanumeric(alphanumeric): return term by alphanumeric
0) findMeaningByAlphanumeric(alphanumeric): return meaning by alphanumeric

0) findCanonItemByTerm(term): return canon item by term
0) findAlphanumericByTerm(term): return alphanumeric by term
0) findMeaningByTerm(term): return meaning by term

*/

// define(['node_modules/lodash/lodash.min', 'ngeCanon'], function (_, canon) {
(function (root, factory) {

    var dependencies = [
        './node_modules/lodash/lodash.min',
        './ngeCanon'
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
            root._,
            root.canon
        );
    }

}(typeof self !== 'undefined' ? self : this,

    function (_, canon) {

        'use strict';

        var canonService = {

            findAllCanonItems: function () {
                return canon;
            },

            findAllAlphanumerics: function () {
                var alphanumerics = [];
                _.forEach(canon, function(value, key) {
                    _.forEach(canon[key], function(_value, _key) {
                        if(_key === 'alphanumeric') {
                            alphanumerics.push(_value);
                        }
                    });
                });
                return alphanumerics;
            },

            findAllTerms: function () {
                var terms = [];
                _.forEach(canon, function(value, key) {
                    _.forEach(canon[key], function(_value, _key) {
                        if(_key === 'term') {
                            terms.push(_value);
                        }
                    });
                });
                return terms;
            },

            findAllMeanings: function () {
                var meaning = '';
                _.forEach(canon, function(value, key) {
                    _.forEach(canon[key], function(_value, _key) {
                        if(_key === 'term') {
                            meanings.push(_value);
                        }
                    });
                });
                return meaning;
            },

            findCanonItemByAlphanumeric: function (alphanumeric) {
                return _.find(canon, function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                });
            },

            findTermByAlphanumeric: function (alphanumeric) {
                return _.find(canon, function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).term;
            },

            findMeaningByAlphanumeric: function (alphanumeric) {
                return _.find(canon, function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).meaning;
            },

            findCanonItemByTerm: function (term) {
                return _.find(canon, function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                });
            },

            findAlphanumericByTerm: function (term) {
                return _.find(canon, function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).alphanumeric;
            },

            findMeaningByTerm: function (term) {
                return _.find(canon, function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).meaning;
            }

        };

        return canonService;

    }
));

