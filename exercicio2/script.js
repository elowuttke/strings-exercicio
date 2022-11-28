console.log(" - EXERCÍCIO 2 STRINGS -")
// Observe a string abaixo.
let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log(minhaString.length)

// A partir dela, execute os passos abaixo:
// a) Remova o excesso de espaços no final da string;
minhaString = minhaString.trim()
console.log(minhaString)
console.log(minhaString.length)

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

// c) Substitua os traços ________ por “sticioso”.
minhaString = minhaString.replace("________","sticioso")
console.log(minhaString)
