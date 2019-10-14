// function translateDan(str){
//     var replaced = str.replace(/\s/g,' dan ')
//     return replaced
// }

// console.log(translateDan('aku ingin makan')) // aku dan ingin dan makan
// console.log(translateDan('aku lapar')) // aku dan lapar
// console.log(translateDan('tolong bantu aku')) // tolong dan bantu dan aku
// console.log(translateDan('selamatkan aku dari serangan monster')) // selamatkan dan aku dan dari dan serangan dan monster
// console.log(translateDan('aku butuh istirahat')) // aku dan butuh dan istirahat

// function numberArrayOperation(arr){
//     var total = 0
//     for(var num of arr){
//         var newNum = 0
//         if(num%2===0 && num%4===0){
//             newNum = num*5
//             total += newNum
//         }else if(num%2===0){
//             newNum = num*3
//             total += newNum
//         }else{
//             newNum = num*4
//             total += newNum
//         }
//     }
//     return total
// }

// console.log(numberArrayOperation([ 22, 4, 5, 9, 44, 8, 12, 23 ])); // 554
// console.log(numberArrayOperation([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ])); // 370

// function multiDimensionalXO(num){
//     var arr = []
//     if(num===0){
//         return 'Invalid input'
//     }
//     for(let i=0;i<num;i++){
//         var temp = []
//         for(let j=0;j<num;j++){
//             if(i%2===0){
//                 if(j%2===0){
//                     temp.push('x')
//                 }else{
//                     temp.push('o')
//                 }
//             }else if(i%2===1){
//                 if(j%2===0){
//                     temp.push('o')
//                 }else{
//                     temp.push('x')
//                 }
//             }
//         }
//         arr.push(temp)
//     }
//     return arr
// }

// console.log(multiDimensionalXO(3));
// console.log(multiDimensionalXO(5));
// console.log(multiDimensionalXO(6));
// console.log(multiDimensionalXO(0));

// function segitigaSamaSisi(num){
//     var res = ''
//     for(var i=0;i<num;i++){
//         for(var j=num;j>i;j--){
//             res += ' '
//         }
//         for(var k=1;k<i;k++){
//             res += ' *'
//         }
//         res += '\n'
//     }
//     return res
// }

// console.log(segitigaSamaSisi(10))

// function pairSum(arr,targetSum){
//     var count = 0
//     for(var i=0;i<arr.length;i++){
//         for(var j=i;j<arr.length;j++){
//             if(arr[i]+arr[j]===targetSum && i!==j){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(pairSum([1, 2, 3, 4, 5], 8));	// 1
// console.log(pairSum([3, 2, 1, 5, 2], 4));	// 2
// console.log(pairSum([1, 1, 1], 2));			// 3
// console.log(pairSum([1, 2, 3], 6));			// 0

// function hapusDuplikat(arr){
//     var newArr = arr.sort()
//     for(var i=0;i<newArr.length;i++){
//         for(var j=0;j<newArr.length;j++){
//             if(newArr[i]===newArr[j] && i!==j){
//                 newArr.splice(j,1)
//             }
//         }
//     }
//     return newArr
// }

// console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4]));    // [1, 2, 3, 4]
// console.log(hapusDuplikat([2, 2, 2, 2]));            // [2]
// console.log(hapusDuplikat([1, 2, 3]));                // [1, 2, 3]
// console.log(hapusDuplikat([6, 5, 3, 2]));            // [2, 3, 5, 6]

// function hapusSimbol(str){
//     var output = ''
//     for(var i=0;i<str.length;i++){
//         var charCode = str.charCodeAt(i)
//         if(charCode>=97 && charCode<=122 || charCode>=48 && charCode<=57){
//              output+=str[i]
//         }
//     }
//     return output
// }

// console.log(hapusSimbol('test%$4aa')); // test4aa
// console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100

function multiplyDivide(arr){
    var total = 0
    for(var i=0;i<arr.length;i++){
        if(i===0){
            total = arr[i]
        }
        else{
            if(i%2===1){
                total = total*arr[i]
            }else{
                total = total/arr[i]
            }
        }
    }
    return Math.round(total)
}

console.log(multiplyDivide([1, 2, 3, 4, 5])); // 1
console.log(multiplyDivide([5, 4, 3, 2, 1])); // 13
console.log(multiplyDivide([1, 1, 1, 3])); // 3
console.log(multiplyDivide([0, 10, 2, 5, 7])); // 0
console.log(multiplyDivide([])); // 0