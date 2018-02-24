define(['supreme'], function(dictionary) {

    function recurse(sourceText) {
        if(sourceText.length == 0) {
            return '';
        }
        else {
            sourceText = sourceText.replace(/\W/g, '')
            var alphanumerics = dictionary.alphanumerics;
            var firstChar = sourceText.split('')[0].toUpperCase();
            var restChars = sourceText.substring(1, sourceText.length);    
            return alphanumerics[firstChar] + ' ' + recurse(restChars);
        }
    }

    return {
        translate: recurse
    }
});
