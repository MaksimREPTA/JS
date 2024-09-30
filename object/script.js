let studentas = {
  vardas: "Maxim",
  pavarde: "Repkin",
  amzius: 26,
  ugis: 190,
  kursas: "pirmas",
  pabaige: false,
};

for (let key in studentas) {
  console.log(`${key}- ${studentas[key]}`);
}
console.log();

let filmas = {
  pavadinimas: "BePavadinimo",
  reziserius: "BeRezisieriaus",
  biudzetas: 250000,
  uzdirbtu_pinigu: 400000,
  zanras: "komedija",
  trukme: 2.5,
  isleidimometai: 2003,
  aktoriu_sarasas: ["Leonardo Dikaprio", "Daniel Craig", "Vin Deasel"],
  dabartiniai_metai: 2024,
};

for (let key in filmas) {
  console.log(`${key}- ${filmas[key]}`);
}

if (filmas.uzdirbtu_pinigu - filmas.biudzetas) {
  console.log("Filmas uzsidirbo:", filmas.uzdirbtu_pinigu - filmas.biudzetas);
}
filmas.aktoriu_sarasas.length;
if (filmas.dabartiniai_metai - filmas.isleidimometai) {
  console.log(
    "Filmui yra",
    filmas.dabartiniai_metai - filmas.isleidimometai,
    "metai"
  );
}

console.log();

let pirmaKnyga = {
  pavadinimas: "pirma knyga",
  autorius: "pirmas autorius",
  zamras: "detektivas",
  kaina: 25,
  puslapiu_kiekis: 90,
  skyriu_sarasas: ["pradzia", "istorija", "finalas"],
  isleidimo_metai: 2023,
  ar_galima_rasti: true,
};

let antraKnyga = {
  pavadinimas: "antra knyga",
  autorius: "antras autorius",
  zamras: "siaubo",
  kaina: 34,
  puslapiu_kiekis: 70,
  skyriu_sarasas: ["izanga", "kulminacija", "apibendrinimas"],
  isleidimo_metai: 2021,
  ar_galima_rasti: false,
};
for (let key in pirmaKnyga) {
  console.log(`${key}- ${pirmaKnyga[key]}`);
}

console.log();

for (let key in antraKnyga) {
  console.log(`${key}- ${antraKnyga[key]}`);
}
if (pirmaKnyga.puslapiu_kiekis <= antraKnyga.puslapiu_kiekis) {
  console.log("pirmos knygos yra maziau puslapiu");
} else if (antraKnyga.puslapiu_kiekis <= pirmaKnyga.puslapiu_kiekis) {
  console.log("antros knygos yra maziau puslapiu");
} else {
  console.log("abieju knygu puslapiu kiekis yra vienodas");
}
if (pirmaKnyga.puslapiu_kiekis <= antraKnyga.puslapiu_kiekis) {
  console.log("pirmos knygos yra maziau puslapiu");
}

if (pirmaKnyga.kaina * 2 >= antraKnyga.kaina) {
  console.log(
    "pirmos knygos, dviguba kaina yra dedesne negu antros knygos kaina"
  );
}
console.log();

console.log();

let pirmapreke = {
  pavadinimas: "iphone",
  kaina: 1500,
  savikaina: 500,
  kodas: "erw2220sdfv7890",
  kiekis_sandelyje: 200,
  dezes_matmenys: {
    x: 10,
    y: 21,
    z: 5,
  },
};
let antrapreke = {
  pavadinimas: "ps5",
  kaina: 700,
  savikaina: 300,
  kodas: "ps5erp802398",
  kiekis_sandelyje: 1000,
  dezes_matmenys: {
    x: 200,
    y: 450,
    z: 150,
  },
};
let treciapreke = {
  pavadinimas: "nike air max",
  kaina: 150,
  savikaina: 20,
  kodas: "jqi71209uopadqq1231d1",
  kiekis_sandelyje: 9000,
  dezes_matmenys: {
    x: 100,
    y: 70,
    z: 25,
  },
};
console.log(
  "pirma preke kainuoja -",
  pirmapreke.kaina,
  "antra preke kainuoja -",
  antrapreke.kaina,
  "trecia preke kainuoja -",
  treciapreke.kaina
);
