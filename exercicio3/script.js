console.log(" - EXERCÍCIO 3 STRINGS -")

// A partir da frase a seguir, faça o que se pede

// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);
let phrase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(phrase)

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;
phrase = phrase.replace("verde","rosa").replace("azul","laranja")
console.log(phrase)
console.log(phrase.length)

// c) Verifique se a nova string inclui verde, e se inclui laranja.

// EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const phrase1 = phrase.substring(0,75)
const phrase2 = phrase.substring(76,102)

console.log(phrase1)
console.log(phrase2)

console.log(phrase1,phrase2.toUpperCase())