

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {



    describe("canon service spec suite", function() {

    /*
        References:
        http://www.ancientorderoffreeasiatics.com/MathNGE.html
        http://www.ancientorderoffreeasiatics.com/Mathematics.html
        http://thesource.com/tag/todays-mathematics/
        http://thesource.com/2017/11/02/exclusive-never-heard-interview-mobb-deeps-prodigy-builds-todays-mathematics/
        Sha Be Allah - @IamShaBeAllah
        http://www.abovetopsecret.com/forum/thread565324/pg1

    */

        beforeEach(function() {
            this.canonService = require('../canonService');
        });

        beforeAll(function() {
            this.canonService = null;
        });

        it("canon service translates alpha to terms", function() {
            expect(this.canonService.findTermByAlphanumeric('1')).toBe('Knowledge');
            expect(this.canonService.findTermByAlphanumeric('2')).toBe('Wisdom');
            expect(this.canonService.findTermByAlphanumeric('3')).toBe('Understanding');
            expect(this.canonService.findTermByAlphanumeric('4')).toBe('Culture and Freedom');
            expect(this.canonService.findTermByAlphanumeric('5')).toBe('Power and Refinement');
            expect(this.canonService.findTermByAlphanumeric('6')).toBe('Equality');
            expect(this.canonService.findTermByAlphanumeric('7')).toBe('God');
            expect(this.canonService.findTermByAlphanumeric('8')).toBe('Build or Destroy');
            expect(this.canonService.findTermByAlphanumeric('9')).toBe('Born');
            expect(this.canonService.findTermByAlphanumeric('0')).toBe('Cipher');
        });

        it("canon service translates numerics to terms", function() {

            expect(this.canonService.findTermByAlphanumeric('a')).toBe('Allah');
            expect(this.canonService.findTermByAlphanumeric('b')).toBe('Be or Born');
            expect(this.canonService.findTermByAlphanumeric('c')).toBe('Cee or See');
            expect(this.canonService.findTermByAlphanumeric('d')).toBe('Divine');
            expect(this.canonService.findTermByAlphanumeric('e')).toBe('Equality');
            expect(this.canonService.findTermByAlphanumeric('f')).toBe('Father');
            expect(this.canonService.findTermByAlphanumeric('g')).toBe('God');
            expect(this.canonService.findTermByAlphanumeric('h')).toBe('He or Her');
            expect(this.canonService.findTermByAlphanumeric('i')).toBe('I or Islam');
            expect(this.canonService.findTermByAlphanumeric('j')).toBe('Justice');

            expect(this.canonService.findTermByAlphanumeric('k')).toBe('King or Kingdom');
            expect(this.canonService.findTermByAlphanumeric('l')).toBe('Love, Hell or Right');
            expect(this.canonService.findTermByAlphanumeric('m')).toBe('Master');
            expect(this.canonService.findTermByAlphanumeric('n')).toBe('In or Now Nation');
            expect(this.canonService.findTermByAlphanumeric('o')).toBe('Cipher');
            expect(this.canonService.findTermByAlphanumeric('p')).toBe('Power');
            expect(this.canonService.findTermByAlphanumeric('q')).toBe('Queen');
            expect(this.canonService.findTermByAlphanumeric('r')).toBe('Rule or Ruler');
            expect(this.canonService.findTermByAlphanumeric('s')).toBe('Self or Savior');
            expect(this.canonService.findTermByAlphanumeric('t')).toBe('Truth or Square');

            expect(this.canonService.findTermByAlphanumeric('u')).toBe('You, Universe, and U-N-I-Verse');
            expect(this.canonService.findTermByAlphanumeric('v')).toBe('Victory');
            expect(this.canonService.findTermByAlphanumeric('w')).toBe('Wisdom');
            expect(this.canonService.findTermByAlphanumeric('x')).toBe('Unknown');
            expect(this.canonService.findTermByAlphanumeric('y')).toBe('Why');
            expect(this.canonService.findTermByAlphanumeric('z')).toBe('Zig-Zag-Zig');

        });

        it("canon service finds canon items from terms", function() {

            var U = {
                alphanumeric: 'U',
                term: 'You, Universe, and U-N-I-Verse',
                meaning: 'Universe - The universe is the home of galaxies, which is home to our solar system. The universe owns and belongs to all Asiatic men and women. U - (You) and I verse. You is pertaining to the woman when dealing in completing the home (Child). You also means self, King, Savior, Queen, her, woman.'
            };

            expect(this.canonService.findCanonItemByTerm('You, Universe, and U-N-I-Verse')).toEqual(U);


        });


        it("canon service finds canon items from terms", function() {
            console.log(this.canonService.findAllAlphanumerics());
            console.log(this.canonService.findAllTerms());
        });

    });



}));
