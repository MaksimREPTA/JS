function vardas(vardas, tekstas) {
  console.log(`'vardas' ${vardas} 'kodel:' ${tekstas}`);
}
vardas("Maksim", "nes patinka");
vardas("Maksim", "nes patinka");
vardas("Maksim", "nes patinka");

function pirmastekstas() {
  console.log("pirmas tekstas cia");
}
function antrastekstas() {
  console.log("antras tekstas cia");
}
function treciastekstas() {
  console.log("trecias tekstas cia");
}

pirmastekstas();
antrastekstas();
treciastekstas();

function tekstopradzia() {
  console.log("rytoj vaziuosiu");
}
function tekstopabaiga() {
  console.log("i darba");
}
function visastekstas() {
  tekstopradzia();
  tekstopabaiga();
}

visastekstas();

function policininkas() {
  let policininkoInfo = {
    vardas: "Maksim",
    pavarde: "Repkin",
    amzius: 26,
    alga: 1800,
    etatas: "pilnas",
    specializacija: "finansai",
  };
  console.log(policininkoInfo);
}

policininkas();

function pasisveikinti(vardas) {
  console.log("labas,", vardas);
}
function atsisveikinti(vardas) {
  console.log("viso gero,", vardas);
}

pasisveikinti("Maksim");
atsisveikinti("Maksim");

function pirmiskaiciai(a, b) {
  if (a > b) {
    console.log(a, "skaicius yra didesnis");
  } else if (b > a) {
    console.log(b, "skaicius yra didesnis");
  } else {
    console.log("skaiciai yra lygus");
  }
}

pirmiskaiciai(7, 7);

function carInformation(marke, model, year, engine) {
  console.log(
    "Automobilius",
    marke,
    model,
    "yra pagamintas",
    year,
    "metais. Sio automobilio turis yra",
    engine
  );
}
carInformation("BMW", "M5 e39", 2003, 4.9);
carInformation("BMW", "M5 f90", 2018, 4.4);

function addittion(number1, number2) {
  let result = number1 + number2;
  console.log(`Sudeties veiksmas ${number1}+${number2}=${result}`);
}
function subtraction(number1, number2) {
  let result = number1 - number2;
  console.log(`Atimties veiksmas ${number1}-${number2}=${result}`);
}
function multiplication(number1, number2) {
  let result = number1 * number2;
  console.log(`Daugybos veiksmas ${number1}*${number2}=${result}`);
}
function division(number1, number2) {
  let result = number1 / number2;
  console.log(`Dalybos veiksmas ${number1}/${number2}=${result}`);
}
function actionWithNumbers() {
  let num1 = Math.round(Math.random() * 100);
  let num2 = Math.round(Math.random() * 100);
  addittion(num1, num2);
  subtraction(num1, num2);
  multiplication(num1, num2);
  division(num1, num2);
}

actionWithNumbers();
actionWithNumbers();
actionWithNumbers();

function printWords(array) {
  for (let i = 0; i < array.length; i++) {
    let wordLenght = array[i].length;
    console.log("Zodis: ", array[i], "jis turi", wordLenght, "simbolius");
  }
}
let wordArray = [
  "Lakers",
  "Celtics",
  "Heat",
  "Warriors",
  "Cavaliers",
  "Bulls",
  "Clippers",
];
printWords(wordArray);

function calculations(numArray) {
  for (const num of numArray) {
  }
}
