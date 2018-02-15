define(['noge_dictionary'], function(dictionary) {

    function recurse(sourceText) {
        if(sourceText.length == 0) {
            return '';
        }
        else {
            sourceText = sourceText.replace(/\W/g, '')
            var book = dictionary.translation;
            var firstChar = sourceText.split('')[0].toUpperCase();
            var restChars = sourceText.substring(1, sourceText.length);    
            return book[firstChar] + ' ' + recurse(restChars);
        }
    }

    return {
        translate: recurse
    }
});