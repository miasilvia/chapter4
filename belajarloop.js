for(let makan=0; makan<=3; makan++){
    if(makan === 1){
        console.log("Makan Pagi")
    }
    else if ( makan === 2){
        console.log("Makan Siang")
    }
    else if (makan === 3){
        console.log("makan malam")
    }
}

///////////////////////////////////////////////////////////////

/**
 * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
 */
console.log("----------------------------------Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20-----------------------------")
for (let angkaGenap = 2; angkaGenap<=20; angkaGenap+=2){
    console.log(angkaGenap);
}
console.log("----cara kedua-----")
for (let angkaGenap2= 0; angkaGenap2<=20; angkaGenap2++){
    if (angkaGenap2 % 2 === 0){
        console.log(angkaGenap2,"==>genap")
    }
    else{
        console.log(angkaGenap2,"==>ganjil")
    }
}

/**
 * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
 */
console.log("----------------------------------Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100-----------------------------")
let tambah=0
for (let angka= 1; angka<=100; angka++){
    tambah += angka
}
console.log(tambah)


/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */
console.log("--------------------------------------------------Pola Segitiga Naik----------------------------------------------")

let bintang1=""
for (let segitiga1=1; segitiga1<=5; segitiga1++){
      bintang1 += "*" 
    console.log(bintang1)
}

/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

 */
console.log("--------------------------------------------------Pola Segitiga Terbalik----------------------------------------------")
let bintang2="******"
for(let segitigaBalik= 1; segitigaBalik<=5; segitigaBalik++){
    bintang2 = bintang2.substring(0, bintang2.length - 1);
    console.log(bintang2)
}

/**
 * Pola Berlian
 * Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. Contoh:
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


 */
   console.log("------------------------------------------------------Pola Berlian------------------------------------------------")
   let kondisi=0
   let bintang =""
   let spasi="     "
   let spasi2=""
   while(kondisi <= 10){
     kondisi++;
     if(kondisi <= 5 ){
       spasi = spasi.substring(0, spasi.length - 1); //spasi akn dikurangi 1 setiap barisnya
       bintang += "*" 
     console.log(spasi+bintang+bintang.substring(0, bintang.length - 1));
   }
   
   else if(kondisi > 5){
     spasi2 += " "
     bintang = bintang.substring(0, bintang.length - 1); // bintang akan dikurangi 1 setiap barisnya
    
     console.log(spasi2+bintang+bintang.substring(0, bintang.length - 1))
   }
   }
   
 

/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

*/
console.log("------------------------------------------------------Pola Segitiga Bilangan------------------------------------------------")
let bintangAngka=""
for(let bintang123=1; bintang123<=5; bintang123++){
  if(bintang123 == 1){
    bintangAngka = bintang123
    console.log(bintang123)
  }
  else{
  bintangAngka += "*" + bintang123 
  console.log(bintangAngka)}

}
