function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getARandomAlphabet(){
    //step-1: get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // step-2: random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabetString[index];
    // console.log(index, alphabet);
    return alphabet;
}