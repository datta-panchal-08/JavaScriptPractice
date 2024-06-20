// CHECK IF A STRING IS PALINDROME 

// @INPUT 'nitin'
// @OUTPUT true


const reverse = (text) =>{
    let reverseText = '';

    for(let i = text.length - 1 ; i>=0;i--){
        reverseText +=text[i];
    }
    return reverseText;
}

const isPalindrome = (text) =>{
     let reverseString = reverse(text);

     console.log(reverseString === text);
}

isPalindrome('nitin');