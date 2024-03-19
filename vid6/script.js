// if (true) {
//     console.log("dijalankan jika benar");
// }
// else{
//     console.log("dijalankan jika salah");
// }

let nilai = 90;
let standar = 80;
let berhasil ="LULUS";
let gagal ="MENGULANG";

if(nilai <0 || nilai>100){
    console.log("input nilai dengan benar");
}
else{
    if (nilai>=standar) {
        console.log(berhasil);
    }
    else{
        console.log(gagal);
    }
}
