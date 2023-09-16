
let countDiscount = (harga,diskon)=>{
    let count = harga * diskon;
    let hasil = count / 100
    return hasil;
}
console.log(countDiscount(100000,20));



let inputUser="                miasss"
let namaFungsi=(inputUserName)=>{
    let resultFinal=""
for (i=0; i<inputUser.length; i++){
    if(inputUserName[i] !== " "){
        resultFinal += inputUserName[i]
    };
};
console.log(resultFinal)
};
namaFungsi(inputUser)

console.log("-------------------------------------MEMANGGIL FUNGSI DI DALAM FUNGSI----------------------------------")

let namaLengkap="mia silvia";

function satu(nama){
    let tampilNama = nama.length
    return tampilNama
};
function dua(){
    console.log(satu(namaLengkap));
};
dua();


let hello=()=>console.log("y");

hello();

function sayHello(){ 
    console.log("Hello World!");
};

// memanggil fungsi
sayHello();

let jaja = (nama,alamat) =>{ return `${nama} ${alamat}`};
console.log(jaja("mia","ind"));

//////////////////////////////////////////////////////
let jaja1 =(a, b) => console.log(a + b + 100);

const a = 4;
const b = 2;

jaja1(a,b);
/////////////////////////////////////////////////

console.log("------------------------------FUNCTION CURRYING---------------------------------")
function tambah(a4){
    return function(b4){
        return a4-b4
    };
}
console.log(tambah(5)(2))