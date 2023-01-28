  import Journal from './app.js';

$(document).ready(function(){
    $("#journal").submit(function(event){
        event.preventDefault();
        const passage = $("#sentence").val()
        const word = $("#Body").val()
        const wordCount = wordCounter(passage);
        const vowelsCount = vowelCounter(passage)
        const consonantCount = consonantCounter(passage)
        $("#total-count").html(wordCount);
        $("#vowels-count").html(vowelsCount);
        $("#consonant-count").html(consonantCount);
    })
})