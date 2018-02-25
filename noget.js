define(['supreme'], function(supreme) {

    var translate = function(sourceText) {
        sourceText = sourceText.replace(/\W/g, '');

        var translation = '';
        translation += recurse(sourceText);

        while(sourceText.length > 1) {
            var numbers = sourceText.split('');
            var sum = sumArray(numbers);
            translation += 'all being born to ';
            if(numbers[0] > numbers[1]) {
                translation += 'lack of ';
            }
            sourceText = sum.toString();
            console.log(sourceText);
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
            return supremeAlphanumerics[firstChar] + ' ' + recurse(restChars);
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