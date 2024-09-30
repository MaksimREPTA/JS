let a = 1;
let b = 2;
let c = 3;
//1.1
if (a == b) {
  console.log("lygus");
}
//1.2
if (b == c) {
  console.log("lygus");
}
//1.3
if (a > b) {
  console.log("didesnis");
}
//1.4
if (b > c * 2) {
  console.log("didesnis");
}
//1.5
if (a % 2 == 0) {
  console.log("dalinasi");
}
//1.6
if (b % 2 != 0) {
  console.log("dalinasi");
}
//1.7
if (c > 0) {
  console.log("1.7 teigiamas");
}
//1.8
if (a < 0) {
  console.log("neigiamas");
}
//1.9
if (b % 4 == 0) {
  console.log("dalinasi");
}
//1.10
if (c % 8 == 0) {
  console.log("dalinasi");
}
// 2.
let amzius = 25;
let pilnametis = 18;

if (amzius >= pilnametis) {
  console.log("2. jūs galite balsuoti");
}
// 3.
let pirmas = 8;
let antras = 3;
let trecias = 6;
let vidurkis = (pirmas + antras + trecias) / 3;

if (vidurkis >= 5) {
  console.log("3. vidurkis teigimas", vidurkis);
}
// 4.
let kintamasis = 15;
let kintamasis2 = 23;
// 4.1
if (kintamasis % 5 == 0) {
  console.log(
    "4.1 dalinasi",
    kintamasis * 1,
    kintamasis * 2,
    kintamasis * 3,
    kintamasis * 4,
    kintamasis * 5
  );
}
// 4.2
if (kintamasis % 2 == 0) console.log(kintamasis ** 2);

// 4.3
if (kintamasis + kintamasis2) {
  console.log("dvieju skaiciu suma", "=", kintamasis + kintamasis2);
}
if (kintamasis - kintamasis2) {
  console.log("dvieju skaiciu skirtumas", "=", kintamasis - kintamasis2);
}
if (kintamasis * kintamasis2) {
  console.log("dvieju skaiciu sandauga", "=", kintamasis * kintamasis2);
}
if (kintamasis / kintamasis2) {
  console.log("dvieju skaiciu dalmeni", "=", kintamasis / kintamasis2);
}
