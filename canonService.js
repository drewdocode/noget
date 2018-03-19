// define(['node_modules/lodash/lodash.min', 'ngeCanon'], function (_, canon) {

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            './node_modules/lodash/lodash.min',
            './ngeCanon'
        ],
        factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(
            require('./node_modules/lodash/lodash.min'),
            require('./ngeCanon')
        );
    } else {
        root.returnExports = factory(root._, root.canon);
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
                return alphanumerics;
            },

            findAllTerms: function () {
                var terms = [];
                return terms;
            },

            findAllMeanings: function () {
                var meaning = '';
                return meaning;
            },

            findCanonItemByAlphanumeric: function (alphanumeric) {
                var canonItem = {};
                canonItem = _.find(canon, function(item) {
                    return item.alphanumeric == alphanumeric.toUpperCase();
                });
                return canonItem;
            },

            findTermByAlphanumeric: function (alphanumeric) {
                var term = '?';
                term = _.find(canon, function(item) {
                    return item.alphanumeric == alphanumeric.toUpperCase();
                }).term;
                return term;
            },

            findMeaningByAlphanumeric: function (alphanumeric) {
                var meaning = '';
                meaning = _.find(canon, function(item) {
                    return item.alphanumeric == alphanumeric.toUpperCase();
                }).meaning;
                return meaning;
            },

            findCanonItemByTerm: function (term) {
                var canonItem = {};
                return canonItem;
            },

            findAlphanumericByTerm: function (term) {
                var term = '';
                return term;
            },

            findMeaningByTerm: function (term) {
                var meaning = '';
                return meaning;
            }

        };


        return canonService;

    }
));

