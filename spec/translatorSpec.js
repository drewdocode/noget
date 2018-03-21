/*
lower level translator functions suitable for this type of "translation" domain
these apply to any injected Canon, and is the interface of any Translator

0) spell(text): translate each alphanumeric in a given text
turn each alphanumeric into a term
return them as a space-delimited block/line of terms

0) despell(text): translate each term in a given text
turn each term into an alphanumeric (remove each encountered non-term from the text)
return them as a 1..n space-delimited block/line of terms

0) define(text): translate each alphanumeric in a given text
turn each alphanumeric into a meaning
return them as a newline-delimited block of meanings
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    describe("translator spec suite", function() {

        beforeEach(function() {
            this.translator = require('../src/translator');
        });

        afterAll(function() {
            this.translator = null;
        });

//            toSupremeTermsFromLettersInGivenText: function(text) {
//            toSupremeNumbersFromLettersInGivenText: function(text) {
//            doTheMathsOfSupremeNumbersOfLettersInGivenText: function(text) {
//            doTheMathOfGivenNumber: function(number) {
//            toTodaysMath: function(date) {


        it('toSupremeTermsFromLettersInGivenText', function() {
            expect(this.translator.toSupremeTerms('gold'))
            .toBe('God Cipher Love, Hell or Right Divine');
        });

        it('toSupremeNumbersFromLettersInGivenText', function() {
            expect(this.translator.toSupremeNumbers('gold'))
            .toBe('7 15 12 4');
        });

        it('doTheMathsOfSupremeNumbersOfLettersInGivenText', function() {
            expect(this.translator.doTheMathsOfText('gold'))
            .toBe('God, Knowledge Power and Refinement all being born to Equality, Knowledge Wisdom all being born to Understanding, Culture and Freedom');
        });

        it('doTheMathOfGivenNumber', function() {
            expect(this.translator.doTheMathOfNumber('97500'))
            .toBe('Born God Power and Refinement Cipher Cipher all being born to Wisdom Knowledge all being born to Understanding');
        });

        it('toTodaysMath', function() {
            expect(this.translator.toTodaysMath())
            .toBe('Wisdom Knowledge all being born to Understanding');
        });

    });
}));
