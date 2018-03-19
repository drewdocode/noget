/*

this file and project should prolly be refactored to translator.js
the canon.js should prolly be refactored to noget_canon.js
then i could have a natopat_canon.js, etc
(i could prolly have a canon git project with a group of mad canons)

.......

higher level functions suitable for the 5% domain
probably should be in the other project only

0) getTodaysMath: return todays mathematics

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

even lower level functions (maybe in a canon_service)
these should be implemented by any "canon service/dao"

findAllCanonItems: return entire canon
findAllTerms: return all terms from canon
findAllMeanings: return all meanings from canon
findAllAlphanumerics: return all alphanumerics from canon

findCanonItemByAlphanumeric(alphanumeric): return canon item by alphanumeric
findTermByAlphanumeric(alphanumeric): return term by alphanumeric
findMeaningByAlphanumeric(alphanumeric): return meaning by alphanumeric

findCanonItemByTerm(term): return canon item by term
findAlphanumericByTerm(term): return alphanumeric by term
findMeaningByTerm(term): return meaning by term

*/

define(['canonService'], function (canonService) {

    'use strict';

    var translator = {

        spell: function(text) {
            var spelling = '';
            text = text.replace(/\W/g, '');
            return spelling;
        },

        despell: function(text) {
            var despelling = '';
            text = text.replace(/\W/g, '');
            return despelling;
        },

        explain: function(text) {
            var explanation = '';
            text = text.replace(/\W/g, '');
            return explanation;
        },
    };

    return translator;
});
