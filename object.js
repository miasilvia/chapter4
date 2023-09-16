
console.log("------------------------------------------------------Konversi Array ke Objek--------------------------------------------------------------------")
// /**
//  * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
//  * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan nilai berupa panjang dari nama buah tersebut.
//  */

let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ];
let amount = [4, 6, 6, 5];
const fruitsName={};
for(let i=0; i < fruits.length; i++){
    fruitsName[fruits[i]]=amount[i];
        }
console.log(fruitsName);
// // OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }



 console.log("--------------------------------------------------------Menghitung Kemunculan Kata----------------------------------------------------------------")
// /**
//  * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga suka minum teh". 
//  * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata muncul di dalam kalimat tersebut.
//  */

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"
//enter setiap spasi dalam kalimat 
let word=favWord.split(" ")
// Membuat sebuah objek kosong untuk menyimpan hasil
const objek = {};
for (k=0; k<word.length; k++){
    pattern = word[k]
    if(!objek[pattern]){
        objek[pattern] = 1;
    }
    else{
        objek[pattern] +=1;
    }

}
console.log(objek)

// // OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, juga: 1, minum: 1, teh: 1 }



console.log("--------------------------------------------------------Grup Orang Berdasarkan Usia---------------------------------------");
// /**
//  * Diberikan sebuah array objek yang berisi nama dan usia.
//  * 1. Akses umur Dewi
//  * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan dalam bentuk objek
//  * 
//  */

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
  ]
//Untuk mengakses umur Dewi, menggunakan metode find untuk mencari objek yang memiliki nama “Dewi”, lalu mengambil properti usia dari objek tersebut.
const dewi = people.find(person => person.nama === "Dewi");
console.log(dewi.usia);

//Untuk mengelompokkan objek didalam array berdasarkan usia, menggunakan metode reduce untuk membuat objek baru yang memiliki properti usia sebagai kunci dan array objek sebagai nilai.
const groupedByAge = people.reduce((result, person) => {
    // jika properti usia belum ada di result, buat array kosong
    if (!result[person.usia]) {
      result[person.usia] = [];
    }
    // tambahkan objek person ke array yang sesuai dengan usianya
    result[person.usia].push(person);
    // kembalikan result yang sudah diupdate
    return result;
  }, {}); // inisialisasi result dengan objek kosong
  
  console.log(groupedByAge);
  
// let umurDewi // OUTPUT: 32

// let collectionUmur
// // OUTPUT:
// // {
// //     20: [ { nama: 'Ana', usia: 20 } ],
// //     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
// //     30: [ { nama: 'Eka', usia: 30 } ],
// //     32: [ { nama: 'Dewi', usia: 32 } ]
// // }



console.log("---------------------------------------------------------Mengakses Properti Bertingkat----------------------------------------------------")
// /**
//  * Diberikan sebuah objek bertingkat. Akses value dar key city
//  */

// const data = {
//     user: {
//         profile: {
//             name: "John Doe",
//             address: {
//                 city: "Jakarta",
//                 postalCode: "12345"
//             }
//         }
//     }
// };

// let result // "Jakarta"


// /**
//  * Penghitungan Suara Pemilihan
//  * 
//  * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
//  */

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 'Dewi', 'Ana'];

var hasil = {};


// // OUTPUT :
// // { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }


// /**
//  * Menggabungkan Beberapa Objek
//  * 
//  * Terdapat beberapa objek dengan struktur yang sama. 
//  * Gabungkan objek-objek tersebut sehingga setiap kunci memiliki nilai yang merupakan total dari ketiga objek tersebut.
//  */

// const obj1 = { a: 5, b: 7, c: 3 };
// const obj2 = { a: 4, b: 1, c: 8 };
// const obj3 = { a: 9, b: 2, c: 5 };

// // OUTPUT:
// // { a: 18, b: 10, c: 16 }


// /**
//  * Penyusunan Ulang Objek
//  * 
//  * Diberikan sebuah objek. Susun ulang objek tersebut agar semua informasi ada di tingkat yang sama,
//  * tetapi namai kunci dengan kombinasi informasi yang mereka wakili
//  */

// const orang = {
//     nama: "Budi",
//     alamat: {
//         jalan: "Jl. Raya",
//         kota: "Jakarta",
//         kodePos: "10000"
//     },
//     kontak: {
//         email: "budi@mail.com",
//         telepon: "080080080"
//     }
// };

// // OUTPUT
// // {
// //   nama: "Budi",
// //   alamat_jalan: "Jl. Raya",
// //   alamat_kota: "Jakarta",
// //   alamat_kodePos: "10000",
// //   kontak_email: "budi@mail.com",
// //   kontak_telepon: "080080080"
// // }


// /**
//  * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
//  * 
//  * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan pernyataan
//  */

// const mahasiswa = [
//     { nama: "Budi", nilai: 85 },
//     { nama: "Ana", nilai: 90 },
//     { nama: "Dono", nilai: 78 },
//     { nama: "Dewi", nilai: 92 }
// ];



// // OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai ...
  

// /**
//  * Konversi Objek ke Array
//  * 
//  * Rubah objek menjadi array dengan metode looping yang dimana akan dinamis.
//  */

// const kota = {
//     Jakarta: 10,
//     Bandung: 5,
//     Surabaya: 7,
//     Medan: 4
// };
// let arrayKota=[];
// for(let key in kota){
//     console.log(key);
//     console.log(kota[])
// }
// // OUTPUT:
// // [
// //   { namaKota: "Jakarta", nilai: 10 },
// //   ...
// // ]
