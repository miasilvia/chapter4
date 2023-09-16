
console.log("------------------------------------HAPUS ITEM TERAKHIR-------------------------------------------")
let fruits = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits);

console.log("---------------------------------CARI PANJANG ARRAY------------------------------------------------")
let bulkAlphabet = ['a', 'b', 'c', 'd', 'e'];
let panjang= bulkAlphabet.length;
console.log(`Panjang Array = ${panjang}`);

console.log("--------------------------------CARI NILAI TERTINGGI DAN TERENDAH----------------------------------");
/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 22, 89, 3, 20, 33, 344], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
let angkaUnik = [21, 19, 22, 89, 3, 20, 33, 344];
let max = angkaUnik[0];
let min = angkaUnik[0];
for (let i = 1; i<= angkaUnik.length; i++){
    if(angkaUnik[i] > max){ // jika anga unik lebih dari max
        max = angkaUnik[i];  //maka nilai max mnyimpan anga uniknya
        
    }
    if(angkaUnik[i]<min){
        min = angkaUnik[i];
    }
}
console.log("Tertinggi : ", max)
console.log("Terendah : ", min)
/*
 i=1
 i<8
 1<8 true
    IF 1
    i=1
        if angkaUnik 19 > max 21 --> false
        max = 21
    i=2
        if angkaUnik 22 > max 19 --> true
        max = 22
    i=3
        if angkaUnik 89 > max 22 --> true (setiap true variabel max menympan nilai dari angka unik sementara)
        max = 89
    i=4
        if angkaUnik 3 > max 89 --> false 
        max = 89
    i=5
        if angkaUnik 20 > max 89 --> false
        max = 89
    i=6
        if angkaUnik 33 > max 89 --> true  (setiap true variabel max menympan nilai dari angka unik sementara)
        max = 89
    i=7
        if angkaUnik 344 > max 89 --> true
        max = 344
    i=8 if angkaUnik 344 > max 344 --> false
        max = 344

       
    IF 2
    i=1
        if angkaUnik 19 < min 21 --> true
        min = 19
    i=2
        if angkaUnik 22 < min 19 --> false
        min = 19
    i=3
        if angkaUnik 89 < min 19  -->false
        min = 19
    i=4
        if angkaUnik 3  < min 19 --> true
        min = 3
    i=5
        if angkaUnik 20 < min 3  --> false
        min = 3
    i=6
        if angkaUnik 33 < min 3 --> false
        min = 3
    i=7
        if angkaUnik 344 < min 3 --> false
        min = 3
    i=8
        if angkaUnik 344 < min 3 --> false
        min = 3
*/

console.log("----------------------------------------------Gabungkan Dua Array-------------------------------------------");
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arrayAwal=[];
//menggunakan built in function
let gabungDenganFunction= arr1.concat(arr2); //gabungkan array terlebih dahulu
let result1 =[... new Set(gabungDenganFunction)]; //hilangkan angka yg sama dengan mnggunakan ... new Set[array]
console.log('menggunakan built in function', result1)

//TANPA  built in function
for (let j= 0; j<arr1.length + arr2.length; j++){
    if(j<arr1.length){
        arrayAwal.push(arr1[j]) // j=0,1,2
    }
    else{
        // arrayAwal.push(arr2[j-arr1.length])
        arrayAwal.push(arr2[j-arr1.length]) //j=3,4,5 arr1.length = 3  
        
    }
    arrayAwal =[... new Set(arrayAwal)] //menghilangkan nilai yg sama
}
console.log("Menggunakan loop dan if else", arrayAwal)
//CARA LAIN
let result11= [...arr1, ...arr2 ];
result11=[... new Set(result11)] //menghilangkan nilai yg sama
console.log("menggunakan split operator ...", result11)

console.log("----------------------------------------------Filter huruf ganjil-------------------------------------------");
/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []
for(let k=0; k<arr3.length; k++){
   if(arr3[k] % 2 !== 0){
    angkaGanjil.push(arr3[k]);
   }
}
console.log("ANGKA GANJIL ", angkaGanjil)

console.log("----------------------------------------------Susun ulang array-------------------------------------------");
/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */
let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let urutArray= angkaKumupulan.sort((a, b) => a - b); //untuk mengurutkan dari nilai kecil ke besar
let balikUrutan = urutArray.reverse();             //untuk mengurutkan dari nilai besar ke kecil
let hapusDuplikat = [... new Set(balikUrutan)];      //untuk menghilangkan nilai yg duplikat/ agar nilai unik
console.log(hapusDuplikat); 

console.log("----------------------------------------------Menggabungkan Array dengan Spesifik-------------------------------------------");
/**
 * Menggabungkan Array dengan Spesifik
 * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
 * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
 */
let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c"]
let result22=[]
for(let m=0; m<kumpulanAngka.length + kumpulanHuruf.length; m++){
    if(m<kumpulanHuruf.length){
        result22.push(kumpulanHuruf[m])
    }
    if(m<kumpulanAngka.length){
        result22.push(kumpulanAngka[m])
    }
}
console.log(result22)

console.log("----------------------------------------------Subarray dengan jumlah terbesar-------------------------------------------");
/**
 * Subarray dengan jumlah terbesar
 *  
 * Dari sebuah array angka, temukan subarray (array dalam array) dengan jumlah elemen yang paling besar. 
 * Misalnya dari array [2, 3, -4, 5, 7, -8, 6, 4], subarray dengan jumlah terbesar adalah [2, 3, -4, 5, 7] dengan total 13.
 */
function maxSubarraySum(arr7) {
    let maxSum1 = arr7[0];
    let tempSum1 = arr7[0];
    for (let z = 1; z < arr7.length; z++) {
      tempSum1 = Math.max(arr7[z], tempSum1 + arr7[z]);
      if(arr7[z]>maxSum1){ 
      maxSum1 = Math.max(maxSum1, tempSum1);
    }
    }
    return maxSum1;
  }
  
  console.log(maxSubarraySum([2, 3, -4, 5, 7, -8, 6, 4])); 


console.log("--------------------------------------------URUTKAN BERDASARKAN FREKUENSI------------------------------------------------")
/**
 * Urutkan berdasarkan Frekuensi:
 * Dari sebuah array, urutkan elemennya berdasarkan frekuensi kemunculannya. 
 * Jika dua elemen memiliki frekuensi yang sama, urutkan berdasarkan angkanya. 
 * Misalnya dari array [3, 2, 2, 8, 3, 4, 4], hasil yang diharapkan adalah [3, 3, 2, 2, 4, 4, 8]
 */

const arrFreq= [3, 2, 2, 8, 3, 4, 4];
const urutan= arrFreq[0]

console.log(arrFreq.sort())


  