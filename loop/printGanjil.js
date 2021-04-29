//Memisahkan angka ganjil dari variable angka ke dalam variable ganjil

let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (let i of angka) {
  if (i % 2) {
    ganjil.push(i);
  }
}

console.log(ganjil);
