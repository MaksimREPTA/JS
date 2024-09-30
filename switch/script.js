let number = 2;

switch (number) {
  case 1:
    console.log("vartotojas laimejo vandens");
    break;
  case 2:
    console.log("vartotojas laimejo limonada");
    break;
  case 3:
    console.log("vartotojas laimejo arbata");
    break;
  case 4:
    console.log("vartotojas laimejo kava");
    break;
  default:
    console.log("error");
}

// 2

let pirmas = 2;
let antras = 3;
let trecias = 4;

switch (pirmas) {
  case 1:
    console.log("Ar pirmas skaičius lygus 1?");
    break;
  case 2:
    console.log("Ar pirmas skaičius lygus 2? Taip", pirmas + antras + trecias);
}
