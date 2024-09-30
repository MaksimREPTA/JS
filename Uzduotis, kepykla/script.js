let darboValandu = 8;
let kepaluPerVal = 20;
let darbuotojuKepykla = 3;
let kepaloSavik = 0.5;
let kepaloPard = 2;
let kepykIskepDien = 470;

let kepykKastai =
  kepaloSavik * (kepaluPerVal * darboValandu * darbuotojuKepykla);
let kepykPajamas =
  kepaloPard * (kepaluPerVal * darboValandu * darbuotojuKepykla);

// 1
if (kepaluPerVal * darboValandu * darbuotojuKepykla) {
  console.log(
    "per vieną darbo dieną spės iškepti",
    kepaluPerVal * darboValandu * darbuotojuKepykla
  );
}
// 2
if (kepykKastai) {
  console.log("kepalų savikainą", kepykKastai);
}
if (kepykPajamas) {
  console.log("gautas pajamas", kepykPajamas);
}
if (kepykPajamas - kepykKastai) {
  console.log("pelnas", kepykPajamas - kepykKastai);
}
// 3
if (kepaluPerVal * darboValandu * darbuotojuKepykla >= kepykIskepDien) {
  console.log("spes iskepti uzsakyma");
}
