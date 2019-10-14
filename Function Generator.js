function changeVocals (str) {
    //code di sini
    var newStr = str.split('')
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]==='a'){
            newStr[i] = 'b'
        }else if(newStr[i] === 'i'){
            newStr[i] = 'j'
        }else if(newStr[i] === 'u'){
            newStr[i] = 'v'
        }else if(newStr[i] === 'e'){
            newStr[i] = 'f'
        }else if(newStr[i] === 'o'){
            newStr[i] = 'p'
        }else if(newStr[i] === 'A'){
            newStr[i] = 'B'
        }else if(newStr[i] === 'I'){
            newStr[i] = 'J'
        }else if(newStr[i] === 'U'){
            newStr[i] = 'V'
        }else if(newStr[i] === 'E'){
            newStr[i] = 'F'
        }else if(newStr[i] === 'O'){
            newStr[i] = 'P'
        }
    }
    return newStr
  }
  
  function reverseWord (str) {
    //code di sini
    var reverse = str.reverse() 
    return reverse
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            str[i] = str[i].toLowerCase()
        }else{
            str[i] = str[i].toUpperCase()
        }
    }
    return str.join('')
  }
  
  function removeSpaces (str) {
    //code di sini
    var removeSpace = str.replace(/\s/g,'')
    return removeSpace
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var vocal = changeVocals(name)
    var reverse = reverseWord(vocal)
    var lowerUpper = setLowerUpperCase(reverse)
    var space = removeSpaces(lowerUpper)
    return space
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'