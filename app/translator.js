define(['dictionary'], function(dictionary) {

    function recurse(sourceText) {
        if(sourceText.length == 0) {
            return '';
        }
        else {
            sourceText = sourceText.replace(/\W/g, '')
            var book = dictionary.supremeMale;
            var firstChar = sourceText.split('')[0].toUpperCase();
            var restChars = sourceText.substring(1, sourceText.length);    
            return book[firstChar] + '<br>' + recurse(restChars);
        }
    }

    return {
        translate: recurse
    }
});