// REVERSE A NUMBER IN JS

// @INPUT  654211
// @OUTPUT 112456

const reverseNumber = (num) =>{
    let numStr = num.toString();
    let reverseNumber = '';

    for(let i = numStr.length - 1; i>=0;i--){
        reverseNumber += numStr[i];
    }
    console.log(reverseNumber);
}

reverseNumber(456789);