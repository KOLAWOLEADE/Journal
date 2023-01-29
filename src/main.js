  import Journal from './app.js';

$(document).ready(function(){
    $("#journal").submit(function(event){
        event.preventDefault();
        $(".show-Tittle").show();
        $("#sentence").html();
        const passage = $("#sentence").val();
        const word = $("#Body").val();
        const wordCount = wordCounter(passage);
        const vowelsCount = vowelCounter(passage);
        const consonantsCount = consonantsCounter(passage);
        const journal = new Journal(wordCount,vowelsCount,consonantsCount)
        const Tittles = journal.checktype()
        $("#total-count").html(wordCount);
        $("#vowels-count").html(vowelsCount);
        $("#consonants-count").html(consonantsCount);
        $('#Tittles').append("<p>" + Tittles + "</p>");
    })
})