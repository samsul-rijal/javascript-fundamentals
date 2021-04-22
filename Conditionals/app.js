let input = "2021-04-13";
if (input == "2021-04-13") {
    console.log(input + " Selamat menunaikan ibadah puasa");
}else {
    console.log(input + " Belum Puasa");
}


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


for(let i = 20; i >= 1; i--) {
console.log(i);
}
//Output : 10 9 8 7 6 5 4 3 2 1


for (let i = 1; i <= 5; i++){
console.log(i * i);
}
//output kuadrat sebanyak 5 kali:  1 4 9 16 25


for (let i = 1; i <= 5; i++){
console.log(i * 3);
}
//output kelipatan 3 sebanyak 5 kali: 3 6 9 12 15