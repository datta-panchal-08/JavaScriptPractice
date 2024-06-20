//  REVERSE AND PRINT A GIVEN STRING

// @INPUT 'Datta'
// @OUTPUT 'attaD'

const reverseAndPrint = (text) =>{
     let reverseText = '';
     for(let i = text.length - 1; i>=0 ; i--){
        reverseText += text[i];
     }
     console.log(reverseText);
}

reverseAndPrint("panchal");
