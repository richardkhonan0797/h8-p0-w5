/**
 * ================
 * Balanced Letters
 * ================
 * 
 * [Description]
 * isBalanced merupakan sebuah function yang mengecek apakah jumlah huruf yang diterima sebagai input berjumlah sama.
 * 
 * [Example]
 * @input = abcde
 * karena masing-masing karakter (a-e) hanya muncul sekali, maka:
 * @output = true
 * 
 * @input = abcdeabcde
 * karena masing-masing karakter (a-e) muncul dua kali, maka:
 * @output = true
 * 
 * @input = abcba
 * huruf a & b muncul 2x, namun huruf c hanya muncul sekali, maka:
 * @output = false
 * 
 * [Rules]
 * 1. Dilarang menggunakan regex
 * 2. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 3. Dilarang menggunakan built-in function: sort
 * 4. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 * 5. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find
 */

function isBalanced(str) {
  // Write your code here
  // let counterA = 0
  // let counterE = 0
  // for(let i=0;i<str.length;i++){
  //   if(str[i]==='a'){
  //     counterA++
  //   }
  //   if(str[i]==='e'){
  //     counterE++
  //   }
  // }
  // if(counterA===counterE && counterA!==0 && counterE!==0){
  //   return true
  // }else{
  //   return false
  // }
  let dict = {}
  for(let i=0;i<str.length;i++){
    if(!(str[i] in dict)){
      dict[str[i]]=1
    }else{
      dict[str[i]]++
    }
  }
  ans = true
  let value = dict[str[0]]
  for(let key in dict){
    if(dict[key]===value){
      ans = true
    }else{
      ans = false
      return ans
    }
  }
  return ans
}

console.log(isBalanced('abcdefghijkl'))
// true
console.log(isBalanced('aabbccddeeff'))
// true
console.log(isBalanced('abcdedcba'))
// false
console.log(isBalanced('hfsjdfngkso'))
// false
console.log(isBalanced('pqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxpqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmmgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmm'))
// true