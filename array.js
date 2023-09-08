// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.length); 

// console.log("----------------GABBUNGGG---------------------")
// // Menggunakan built-in function
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// // Tidak menggunakan built-in function
// const array3 = [1, 2, 3];
// const array4 = [4, 5, 6];
// for (let i = 0; i < array4.length; i++) {
//   array3.push(array4[i]);
// }
// console.log(array3); // Output: [1, 2, 3, 4, 5, 6]

// console.log("----------------Filter huruf ganjil---------------------")
// const arrayGanjil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArrayGanjil = [];
// for (let i = 0; i < arrayGanjil.length; i++) {
//   if (arrayGanjil[i] % 2 !== 0) {
//     newArrayGanjil.push(arrayGanjil[i]);
//   }
// }
// console.log(newArrayGanjil);

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
console.log("-----------------------SORTED ARRAY--------------------------")
let angka = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
angka = angka.sort((a,b) => a-b);
angka = [...new Set(angka)];
angka.reverse();
console.log(angka);

console.log("-----------------------MENGGABUNGKAN ARRAY DENGAN SPESIFIK----------------------")
let kumpulanAngka = [1, 2, 3];
let kumpulanHuruf = ["a", "b", "c"];
let gabungan = [];
for (let i = 0; i < kumpulanAngka.length; i++) {
    gabungan.push(kumpulanHuruf[i], kumpulanAngka[i]);
}
console.log(gabungan);