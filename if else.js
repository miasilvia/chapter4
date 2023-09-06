console.log("-------------------------Soal Latihan: Menentukan Kategori Usia----------------------")
function kategoriUsia (usia){
    if(typeof usia !== "number" || usia < 0){
        return "Input wrong";
    }
    if(usia >= 0 && usia <= 12){
        return "Anak-anak";
    }
    else if(usia >=13 && usia <=19){
        return "Remaja";
    }
    else if(usia >= 20 && usia <=35 ){
        return "Dewasa";
    }else if(usia ==36){
        "lanjut usia";
    }
}
console.log(kategoriUsia(35));

console.log("-------------------------Soal Latihan: Penentuan Biaya Parkir----------------------")

function hitungBiayaParkir(lamaParkir, hari, liburNasional){
    let biaya = 0
    if (lamaParkir < 1){
        biaya = 10000
    }
    else {
       biaya = 10000 + (lamaParkir-1) * 5000;
    }
    if(lamaParkir > 5){
        biaya -= 10000;
    }
    if(hari == "minggu"){
    biaya += 5000;
    }
    if(biaya > 30000 && liburNasional){
        biaya -= 7000;
    }
    return biaya;
}
console.log(hitungBiayaParkir(6,"minggu",true));

console.log("-------------------------Soal Latihan: Penjadwalan Acara Festival----------------------------------")

function jadwalFestival(hari, cuaca, suhu, angin) {
    let hasil="Daftar Acara: ";
if(typeof hari !== "string" || typeof cuaca !== "string" || typeof suhu !== "number" || typeof angin !== "number"){
        return "Input wrong";
    }    
if(true){
    hasil += "Pameran Seni";
    }
if (cuaca == "Hujan" && angin >= 20){
    hasil += ", semua acara di luar ruangan akan dibatalkan";
}
if(cuaca == "Hujan" && angin <20){
    hasil += ", acara di dalam ruangan";
    }
if(suhu < 5 ){
    hasil += ", acara indor";
}
if(cuaca == "Cerah" && suhu > 25){
    hasil += ", pesta eskrim";
}
if(hari == "Minggu" && cuaca == "Cerah"){
    hasil += ", maraton senja";
}

return hasil;
}
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.
