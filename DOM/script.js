// pirmas div

document.getElementById("pirma-antraste").textContent =
  "Naujos pirmos antrastes tekstas";
document.getElementById("pirmas-patagrafas").textContent =
  "Naujos pakeistas pirmo paragrafo tekstas";

// antras div

console.log("ANTRAS DIV");

let tekstasIsParagrafo =
  document.getElementById("paragrafo-tekstas").textContent;
console.log("paimtas su textContent tekstas:", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").textContent;
console.log("paimtas su textContent tekstas:", tekstasIsParagrafo2);

console.log();

// trecias div

console.log("TRECIAS DIV");

console.log(
  "textContent turinys:",
  document.getElementById("trecias").innerHTML
);
console.log("innerText turinys:", document.getElementById("trecias").innerText);

console.log();

// septintas div

function pakeisti() {
  document.getElementById("septinto-tekstas").textContent = "Naujas tekstas";
}

// astuntas div

function pakeisti2(elementas, tekstas) {
  document.getElementById(elementas).textContent = tekstas;
}
