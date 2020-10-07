let resultElt = document.getElementById("result");

async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

async function compute() {
  const val1 = await getNumber1();
  const val2 = await getNumber2();
  
  return val1 + val2;
}

compute().then(function(data) {
  console.log(data);
  resultElt.innerHTML = data;
}).catch(function(data) {
  console.log("Erreur");
  resultElt.innerHTML = "Erreur";
});