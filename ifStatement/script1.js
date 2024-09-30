let rezultatas1 = 8;
let rezultatas2 = 9;
let rezultatas3 = 4;
let vidurkis = (rezultatas1 + rezultatas2 + rezultatas3) / 3;

if (vidurkis >= 8 && vidurkis <= 10) {
  console.log("yra nuo [8-10]");
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log("yra nuo [5-8)");
} else {
  console.log("nera <5");
}

let skaicius1 = 54;
let skaicius2 = 49;

if (skaicius1 > skaicius2 || skaicius1 == 0) {
  console.log("didesnis");
}
