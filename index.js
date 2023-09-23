const Calculate = require('./soal1.js');

const calculate = new Calculate(20,15,10);

console.log("Luas Persegi dengan sisi 20 cm : "+calculate.SquareArea());
console.log("Keliling Persegi dengan sisi 20 cm : "+calculate.SquarePerimeter());
console.log("Luas Persegi panjang dengan panjang 15 cm dan tinggi 10 cm : "+ calculate.RectangleArea());
console.log("Luas Persegi panjang panjang 15 cm dan tinggi 10 cm : "+calculate.RectanglePerimeter());
