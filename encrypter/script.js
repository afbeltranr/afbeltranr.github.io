const textInput = document.getElementById('textInput')
const result = document.getElementById('result');
  


function btnEncrypt(){

    const encryptedText = encrypt(textInput.value)
    result.value = encryptedText
    textInput.value = ''


}

function encrypt(string){

    let codeMatrix = [['a','f2'],['e','45g1'],['i','13d'],['o','f13'],['u','5gh']]

    string = string.toLowerCase()
    
    for(var i = 0; i < codeMatrix.length; i++){

        if(string.includes(codeMatrix[i][0])){

            string = string.replaceAll(codeMatrix[i][0],codeMatrix[i][1])
        }
    }

    return string;

}


function btnDecrypt(){

    const DecryptedText = decrypt(textInput.value)
    result.value = DecryptedText
    textInput.value = ''


}

function decrypt(string){

    let codeMatrix = [['a','f2'],['e','45g1'],['i','13d'],['o','f13'],['u','5gh']]

    string = string.toLowerCase();

    for(var i = 0; i < codeMatrix.length; i++){

        if(string.includes(codeMatrix[i][1])){

            string = string.replaceAll(codeMatrix[i][1],codeMatrix[i][0])
        }

    }

    return string

}


function copy(){

    result.select()
    document.execCommand('copy'); 
    result.value = ''
}