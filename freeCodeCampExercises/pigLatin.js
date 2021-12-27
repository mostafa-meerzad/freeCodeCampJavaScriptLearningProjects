function translatePigLatin (str){
    //ToDo
    // Check the first letter of str
    // If it is a vowel add "way" to the end
    // If it is consonant of take the consonant or cluster of consonants and move it to the end and add ay

    //take out the consonants
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let constLetters = [];
    let index = 0;
    let result;

    while (!vowels.includes(str[index])){
        constLetters.push(str[index])
        index ++;
    }
// check if any consonant was found?
    if (constLetters.length > 0){
        const additive = 'ay';
        const  lastConstIndex = str.indexOf( constLetters[constLetters.length - 1]);
        const goodLetters = str.slice(lastConstIndex + 1);  //slice letters that should not change
        result = goodLetters + constLetters.join('') + additive;
    }
    else{
        const additive = 'way';
        result = str + additive
    }

    return result
}

// console.log(translatePigLatin('consonant'))
// translatePigLatin('cknonsonant')
translatePigLatin('paragraphs')
translatePigLatin('algorithm')
translatePigLatin('glove')
translatePigLatin('eight')


// console.log(['e', 's', 't'].join(''))