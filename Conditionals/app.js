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

document.write("<br>" + "Menggunakan perulangan while" + "<br>");
let i = 1;
while (i <= 10) {
  document.write(i + " ");
  i++;
}

document.write("<br>" + "Menggunakan Reverse" + "<br>");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + " ");
}
