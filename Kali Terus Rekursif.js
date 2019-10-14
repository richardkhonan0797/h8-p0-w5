function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka<10){
        return angka
    }else{
        let kali = 1
        let n=angka.toString().split('')
        for(let i of n){
            kali*=Number(i)
        }
        return kaliTerusRekursif(kali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6