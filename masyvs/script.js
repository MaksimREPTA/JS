let pazymei = [2, 3, 5, 6, 7, 10, 9, 2];

console.log(pazymei[0]);
console.log(pazymei[7]);

console.log();

let progPavadinimas = ["Finansai", "Technologijos", "Logistika"];

console.log(progPavadinimas[0]);
console.log(progPavadinimas[1]);
console.log(progPavadinimas[2]);

console.log();

let salis = ["Lietuva", "Estonija", "JAV", "Kanada"];

console.log("salis", salis[0]);
console.log("salis", salis[1]);
console.log("salis", salis[2]);
console.log("salis", salis[3]);

console.log();

for (let i = 0; i <= 10; i++) {
  console.log("skaicius:", i);
}

console.log();

let pradzia = 0;
let pabaiga = 15;

for (let i = pradzia; i <= pabaiga; i += 2) {
  console.log("skaicius:", i);
}

console.log();

let zodziai = ["medis", "tvora", "masina", "zole"];

for (const indeksas in zodziai) {
  console.log(indeksas, "-", zodziai[indeksas]);
}

console.log();

let perkiniai = ["koldunai", "braskes", "alus", "pomidorai", "degtine"];

console.log(perkiniai.length);
for (const indeksas in perkiniai) {
  console.log("-", perkiniai[indeksas]);
}

console.log();

let studentopozymiai = [4, 5, 6, 9, 4, 7, 4, 8, 10, 2, 6, 7, 7, 9];

let suma = 0;

for (const sk of studentopozymiai) {
  suma += sk;
}

for (const indeksas in studentopozymiai) {
  console.log(studentopozymiai[indeksas]);
}
console.log("pazymiu vydurkis:", suma / studentopozymiai.length);

console.log();

let nuvaziuotiKM = [120, 130, 70, 230, 300];

for (const km of nuvaziuotiKM) {
  if (km >= 150) {
    console.log(km, "daugiua negu 150");
  }
}
