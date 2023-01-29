 export function Journal(Tittle, Body){
     this.Tittles = {};
     this.Body = {};
 }

 Journal.prototype.addTittle = function(){
    this.Tittles= Tittle;

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


function getVowels(text) {
       let Vowels = 'aAeEiIoOuU';
       let vowelsCount = 0;
       for(let i = 0; i < text.length ; i++) {
          if (Vowels.indexOf(text[i]) !== -1) {
             vowelsCount += 1;
         }
       }
    return vowelsCount;
    }


// function vowelsCounter (text){
//     if (text.trim().length === 0){

//         // let vowel = $("#sentence").val();

        
    
//         let vowelsCount = 0;
        
//         const vowels = text.split("");
//         vowels.forEach(function(element) {

//             if (vowels.includes("a,e,i,o,u,A,E,I,O,U")){
//                 vowelsCount++

//             }

//         });
//         return vowelsCount
//     }
// }

   // function to count consonant

   function consonants (text) {
     let consonants = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ"
     let consonantsCount = 0;

     forEach(i = 0 ; i < (text).length ;  i++ ) {
        if (consonants.indexOf(text[i] !== -1 )) {

        consonantsCount++

        }

     }

     return consonantsCount


   }






    // function consonantsCounter (text) {
    //     if (text.trim().length === 0){
    //         let consonantsCount = 0;

    //         const consonants = text.split("");
    //         consonants.forEach(function(element){
    //             if (consonants.includes("b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z").toLowerCase()){
    //                 consonantsCount++
    //             }
    //         })

        
    //     return consonantsCount

    //     }
    // }

     //To return first sentence or eight words in the body


    function Tittle(firstTittle){
        this.firstTittle = firstTittle

    }

    Tittle.prototype.sentence = function(){
       return  this.firstTittle;

    }


    //To return first sentence or eight words in the body

    function Body() {
        this.Body = Body

    }




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