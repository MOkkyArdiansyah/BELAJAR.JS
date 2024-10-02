const readline = require("readline-sync");

const angkapertama = parseFloat(readline.question("masukkan angka pertama:"));
const operator = readline.question("masukkan operator (+,-,*,/,%) :");
const angkakedua = parseFloat(readline.question("masukkan angka kedua:"));


if(isNaN(angkapertama) || isNaN(angkakedua)) {
     return console.log("Inputan tidak sesuai !!!");  
  } 
  else {

const hasil = execute(angkapertama, angkakedua, operator);

console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkapertama,angkakedua,operator){
switch (operator) {
    case "+" :
       return angkapertama + angkakedua;
    case "-" :
       return angkapertama - angkakedua;
    case "*" :
       return angkapertama * angkakedua;
       case "/" :
       // validasi angka 
       if (angkakedua === 0) {
            return console.log("Error: tidak bisa dibagi dengan  nol")
       }
       return angkapertama / angkakedua;
    case "%" :
       return angkapertama % angkakedua;

    default:
    console.log("operator tidak valid");
  }
}