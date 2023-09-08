//for (i=1; i<=100; i++){
//console.log(i)
//}



// let bintang="";
// for (f=0; f<=5; f++){
//     for(j=0; j<f; j++){
//         bintang += "*";
//     }
//     bintang += "\n";
// }
// console.log(bintang);
//////////////////////////////

// let bintang2="";
// for (f=5; f>=0; f--){
//     for(j=0; j<f; j++){
//         bintang2 += "*";
//     }
//     bintang2 += "\n";
// }
// console.log(bintang2);

/** iterasi 1
 f = 5
 5>=0 true
    iterasi 1
    j=0
    j<f
    0<5 true
    tambahkan *
    

 */
console.log("----------------------SOAL BINTANG DIAMOND for didalam for------------------------------")
let bintang3="";
for (let i = 0; i<4; i++){
  for(let j=5 - 1; j>=i; j--){
    bintang3 += " ";
  }
  for(let k=1; k<=i; k++){
    bintang3 += "*"
  }
  for(let l=1 - 1; l<=i; l++){
    bintang3 += "*"
  }
  bintang3 += "\n"
 
}

let bintang4="";
for (let i = 1; i<=5; i++){
  for(let j=0 + 1; j<=i; j++){
    bintang4 += " ";
  }
  for(let k=5; k>=i; k--){
    bintang4 += "*"
  }
  for(let l=5-1 ; l>=i; l--){
    bintang4 += "*"
  }
  bintang4 += "\n"
 
}
console.log(bintang3 + bintang4)

console.log("-----------------SOAL BINTANG DIAMOND looping menggunaan if else--------------------");
let kondisi=0
let bintang =""
let spasi="     "
let spasi2=""
while(kondisi <= 10){
  kondisi++;
  if(kondisi <= 5 ){
    spasi = spasi.substring(0, spasi.length - 1);
    bintang += "*" 
  console.log(spasi+bintang+bintang.substring(0, bintang.length - 1));
}

else if(kondisi > 5){
  spasi2 += " "
  bintang = bintang.substring(0, bintang.length - 1);
 
  console.log(spasi2+bintang+bintang.substring(0, bintang.length - 1))
}
}
// let str = "Hello World";
// let newStr = str.substring(0, str.length - 1);
// console.log(newStr)
