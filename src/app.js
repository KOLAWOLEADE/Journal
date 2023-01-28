 export function Journal(Tittle, Body){
     this.Tittle = Tittles;
     this.Body = Body;
 }

 Journal.prototype.addTittle = function(){

 }



// Journal.prototype.wordCount = function(){

// }

// function to count number of words

function wordCounter(text){
    if (text.trim().length === 0){
        return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element){
        
        if (!Number(element)){
            wordCount++;
        }
    });
    return wordCount;
}



// function to count vowel

function vowelCounter (text){
    if (text.trim().length === 0){

        // let vowel = $("#sentence").val();
    
        let vowelsCount = 0;
        
        const vowels = text.split("");
        vowels.forEach(function(element) {

            if (vowels(element)){
                vowelCount++

            }

        });
        return vowelsCount
    }
}

   // function to count consonat

    function consonantCounter (text) {
        if (text.trim().length === 0){
            let consonantCount = 0;

            const consonant = text.split("");
            consonant.forEach(function(element){
                if (consonant(element)){
                    consonantCount++
                }
            })

            return consonantCount

        }
    }

    function Tittle(firstTittle){
        this.firstTittle = firstTittle

    }

    Tittle.prototype.




// function to count number of occurences in text





// function numberOfOccurencesInText (word,Text) {
//     if ((Text.trim().length === 0) || (word.trim().length ===0)) {
//         return 0;
//     }
//     const wordArray = text.split(" ");
//     let wordCount = 0;
//     wordArray.forEach(function(element){
//         if(element.toLowerCase().includes(word.toLowerCase())){
//             wordCount++;
//         }

        
//     })
//     return wordCount;
// }