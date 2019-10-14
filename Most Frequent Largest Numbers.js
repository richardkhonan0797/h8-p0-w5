function sorting(arrNumber) {
  // code di sini
  var sorted = arrNumber.sort(function(a, b) {
    return a - b;
  });
  return sorted;
}

function getTotal(arrNumber) {
  // code di sini
  var largest = 0;
  var total = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > largest) {
      largest = arrNumber[i];
    }
  }
  for (var j = 0; j < arrNumber.length; j++) {
    if (arrNumber[j] === largest) {
      total++;
    }
  }
  if (total === 0) {
    return "";
  } else {
    return (
      "Angka paling besar adalah " +
      largest +
      " dan jumlah kemunculan sebanyak " +
      total +
      " kali"
    );
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
