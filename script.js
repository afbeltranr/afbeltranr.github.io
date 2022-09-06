const textInput = document.getElementById('textInput')
const result = document.getElementById('result');



function btnEncrypt(){

    const encryptedText = encrypt(textInput.value)
    result.value = encryptedText
    textInput.value = ''


}

function encrypt(encryptedString){
    
    let codeMatrix =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++) {

        if(encryptedString.includes(codeMatrix[i][0])){

           encryptedString =  encryptedString.replaceAll(codeMatrix[i][0], codeMatrix[i][1])
        }

    return encryptedString
    }
}


function btnDecrypt(){

    const DecryptedText = decrypt(textInput.value)
    result.value = DecryptedText
    textInput.value = ''


}

function decrypt(DecryptedString){
    
    let codeMatrix =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    DecryptedString = DecryptedString.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++) {

        if(DecryptedString.includes(codeMatrix[i][1])){

           DecryptedString =  DecryptedString.replaceAll(codeMatrix[i][1], codeMatrix[i][0])
        }

    return DecryptedString
    }
}






function copy(){

    result.select()
    document.execCommand('copy'); 
    result.value = ''
}