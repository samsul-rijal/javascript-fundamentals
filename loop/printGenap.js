//Memisahkan angka genap dari variable angka ke dalam variable genap

let angka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 == 0) {
    genap.push(angka[i]);
  }
}

console.log(genap);
