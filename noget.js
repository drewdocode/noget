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


*/

define(['canon'], function(supreme) {

    'use strict';

    var translate = function(sourceText) {
        sourceText = sourceText.replace(/\W/g, '');

        var translation = '';
        translation += recurse(sourceText);

        while(sourceText.length > 1) {
            var numbers = sourceText.split('');
            var sum = sumArray(numbers);            
            
            if(numbers[0] > numbers[1] && numbers[1] > 0) {
                translation += 'not being born to ';
            }
            else {
                translation += 'all being born to ';
            }2
            
            sourceText = sum.toString();
            translation += recurse(sourceText);
        }

        return translation;
    }

    function recurse(sourceText) {
        if(sourceText.length == 0) {
            return '';
        }
        else {
            sourceText = sourceText.replace(/\W/g, '');
            var supremeAlphanumerics = supreme.alphanumerics;
            var firstChar = sourceText.split('')[0].toUpperCase();
            var restChars = sourceText.substring(1, sourceText.length);
            return supremeAlphanumerics.word[firstChar] + ' ' + recurse(restChars);
        }
    }

    function sumArray(numbers) {
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
          }
          return sum;
    }

    return { translate: translate }
});

