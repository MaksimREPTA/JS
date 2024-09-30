// 1
function pirmaFunkcija(callback) {
  setTimeout(callback, 2000);
}

pirmaFunkcija(() => {
  console.log("callback funkcija po 2 s.");
});

// 2
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); // Pataisyta čia
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch the data.", undefined); // Taip pat pridėtas callback su klaidos pranešimu
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

getTodos((err, data) => {
  console.log(err ? err : data);
});
