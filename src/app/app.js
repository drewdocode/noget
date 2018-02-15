
require(['jquery', 'translator', 'dateService'], function($, translator, dateService) {
    
    var sourceText = 'abcdefghijklmnopqrstuvwxyz 1234567890';

    $("#translateButton").click(function() {
        console.log($("#sourceText").val());
        var translation = translator.translate($("#sourceText").val());
        $("#translation").text(translation);
    });

});


