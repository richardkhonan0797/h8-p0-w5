/**
 * ===============
 * Remedial Recap
 * ===============
 * 
 * Deskripsi: 
 * Sebuah fungsi 'remedialRecap' yang akan mengembalikan Array of Object
 * berisi data student berserta nilai ujian-ujiannya. Student mendapatkan kesempatan
 * remedial sebanyak maksimal 2x. Kriteria student yang dapat mengikuti remedial adalah student
 * yang memiliki nilai dibawah 80.
 * 
 * Asumsi:
 * - Student hanya bisa melakukan remed maksimal 2x untuk setiap mata pelajaran
 * - 1 kali remed student mendapatkan nilai tambahan 10 poin
 * 
 * Contoh:
 *  [{
 *      name: 'Murid 1',
 *      history: 40, 
 *      math: 90,
 *      art: 70
 *    },
 *    {
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *    }]
 *  Hasil yang diharapkan:
 *  [{ 
 *      name: 'Murid 1',if(orang.jarak === jarak)
 *      history: [40, 50, 60] // nilai awal 40, kemudian remed pertama 50 dan remed kedua 60
 *      math: 90,
 *      art: [70, 80] // nilai awal 70, kemudian remed pertama 80, karena nilai 
 *                       telah mencapai 80 maka remed hanya dilakukan 1 kali.
 *    },
 *    { 
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *  }]
 *
 * Rules:
 * 1. DILARANG menggunakan built in function apapun kecuali .push() dan .unshift()
 * 2. Output HARUS sesuai dengan contoh yang telah diberikan
*/

function remedialRecap(data) {
  // Write your code here

  count = 0
  for(let student of data){
    for(let key in student){
      if(student[key]<80){
        nilai = student[key]
        student[key] = [nilai]
        for(let i=0;i<2;i++){
          if(student[key][i]<80){
            nilai+=10
            student[key].push(nilai)
          }
        }
      }
    }
  }
  return data
}

var student1 = 
[
  {
    name: 'Romeo',
    history: 80,
    math: 60,
    art: 100
  },
  {
    name: 'Sierra',
    history: 50,
    math: 100,
    art: 70
  },
  {
    name: 'Alpha',
    history: 100,
    math: 100,
    art: 100
  }
]
console.log(remedialRecap(student1))
  // [
  //   { 
  //     name: 'Romeo',
  //     history: 80,
  //     math: [ 60, 70, 80 ],
  //     art: 100 },
  //   { 
  //     name: 'Sierra',
  //     history: [ 50, 60, 70 ],
  //     math: 100,
  //     art: [ 70, 80 ] },
  //   { 
  //     name: 'Alpha', 
  //     history: 100, 
  //     math: 100, 
  //     art: 100 
  //   } 
  // ]