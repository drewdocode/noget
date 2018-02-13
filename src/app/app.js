require(['translator', 'dateService'], function(translator, dateService) {
    
    var sourceText = '1234567890';
//    var sourceText = dateService.today();
//    var sourceText = document.getElementById('sourceText').value;
    
    var translation = translator.translate(sourceText);
    document.getElementById('sourceText').innerText = sourceText;
    document.getElementById('nogefication').innerHTML = `<h1>${translation}</h1>`;
    
});


