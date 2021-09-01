const n1 = document.querySelector("#n1"),
n2 = document.querySelector("#n2"),
resultNumb = document.querySelector(".resultNumb"),
btnNumb = document.querySelector(".btnNumb"),
namesPes = document.querySelector("#names"),
resultPes = document.querySelector(".resultPes"),
btnPes = document.querySelector(".btnPes")

/* # DICAS DE FÓRMULAS (GERAR NÚMEROS)

## Gerando um número aleatório entre dois valores
- O valor retornado será maior ou igual a min, e menor que max

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

## Gerando um número inteiro aleatório entre dois valores
- Este exemplo retorna um número inteiro entre dois valores definidos. O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro), e será menor (mas não igual) a max.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

## Gerando um número inteiro aleatório entre dois valores, inclusive
- A função getRandomInt() acima tem intervalo com o valor mínimo incluído e o máximo excluído. Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados? A função getRandomIntInclusive() abaixo faz isso

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


*/

btnNumb.addEventListener("click", ()=> {
    let min = n1.value;
    let max = n2.value;

    resultNumb.innerHTML = getRandomIntInclusive(min, max);
}) 


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

btnPes.addEventListener("click", ()=> {
    let arrNames = namesPes.value.replace(/\s/g,'').split(",");
    let indexRandom = Math.floor(Math.random() * arrNames.length)
    resultPes.innerHTML = arrNames[indexRandom];
});


