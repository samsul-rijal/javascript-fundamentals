document.write("Menggunakan perulangan for" + "<br>");

for (let i = 1; i <= 10; i++) {
  document.write(i + " ");
}
//Output : 12345678910

document.write("<br>" + "Menggunakan perulangan while" + "<br>");
let i = 1;
while (i <= 10) {
  document.write(i + " ");
  i++;
}
//Output : 12345678910

document.write("<br>" + "Menggunakan Reverse" + "<br>");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + " ");
}
//Output : 10,9,8,7,6,5,4,3,2,1

document.write("<br>" + "Menampilkan perulangan dari 10-1" + "<br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + " ");
}
//Output : 10 9 8 7 6 5 4 3 2 1

document.write(
  "<br>" + "Menampilkan perulangan kuadrat sebanyak 5 kali" + "<br>"
);
for (let i = 1; i <= 5; i++) {
  document.write(i * i + " ");
}
//output kuadrat sebanyak 5 kali :  1 4 9 16 25

document.write(
  "<br>" + "Menampilkan perulangan kelipatan 3 sebanyak 5 kali" + "<br>"
);
for (let i = 1; i <= 5; i++) {
  document.write(i * 3 + " ");
}
//output kelipatan 3 sebanyak 5 kali : 3 6 9 12 15
