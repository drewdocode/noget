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

        it('can termify i.e. get terms from an alphanumeric i.e. translate each alphanumeric in a given text to it\'s term', function() {
            expect(this.translator.termify('Andrew'))
            .toBe('Allah In or Now Nation Divine Rule or Ruler Equality Wisdom');
        });

        it('can numerify i.e. get numeric from any alphanumeric i.e. translate each alphanumeric in a given text to it\'s numeric', function() {
            expect(this.translator.numerify('Drew'))
            .toBe('4 18 5 23');
        });

        it('can doTheMathText i.e. comma+space delimited "normal today\'s math calculation" on the numeric of each alphanumeric in a text', function() {
            expect(this.translator.doTheMathText('Drew'))
            .toBe(''
            + 'Culture and Freedom, '
            + 'Knowledge Build or Destroy all being born to Born, '
            + 'Power and Refinement, '
            + 'Wisdom Understanding all being born to Power and Refinement'
            + '');
        });

        it('can doTheMathNumber i.e. space delimited "normal today\'s math calculation" on a number', function() {
            expect(this.translator.doTheMathNumber(1))
            .toBe('Knowledge');
            expect(this.translator.doTheMathNumber(11))
            .toBe('Knowledge Knowledge all being born to Wisdom');
            expect(this.translator.doTheMathNumber(100))
            .toBe('Knowledge Cipher Cipher all being born to Knowledge');
            expect(this.translator.doTheMathNumber(20))
            .toBe('Wisdom Cipher all being born to Wisdom');
        });

//        it('can doTheAlphabet i.e. comma+space delimited "normal today\'s math calculation" on the numeric of each alphanumeric in a text', function() {
//            expect(this.translator.doTheAlphabet('Drew'))
//            .toBe('Divine, Rule or Ruler, Power and Refinement, Wisdom');
//        });

    });
}));
