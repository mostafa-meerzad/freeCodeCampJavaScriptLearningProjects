// todo
// string is given coded in ROT13 (every character is shifted by 13 places)
// split it into words
// iterate over each word
// find corresponding characters shifted by 13 places
// don not convert none-alphabetic character
// make decoded words and make a string
// return decoded string


function rot13(str) {

    const charCodeA = 65;
    const charCodeM = 77;
    const charCodeN = 78;
    const charCodeZ = 90;
    const encodedWords = str.split(' ');
    const encodeKey = 13;
    let decodedString = [];
    for (let word in encodedWords){
        let decodedCharCode = '';
        for (let char in encodedWords[word]){

            let encodedCharCode = encodedWords[word][char].charCodeAt();

            if (encodedCharCode >= charCodeA && encodedCharCode <= charCodeM){
                decodedCharCode += String.fromCharCode(encodedCharCode + encodeKey);
            }
            else if (encodedCharCode >= charCodeN && encodedCharCode <= charCodeZ){
                decodedCharCode += String.fromCharCode(encodedCharCode - encodeKey);
            }
            else{
                decodedCharCode += String.fromCharCode(encodedCharCode);
            }

        }

        decodedString.push(decodedCharCode);

    }

    // console.log(decodedString.join(' '))
    return decodedString.join(' ')

}
//
rot13("SERR PBQR PNZC!");

