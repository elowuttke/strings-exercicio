console.log(" - EXERCÍCIO DE FIXAÇÃO STRINGS -")

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
// O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!
const usuario = prompt("Defina seu nome de usuário:")
const email = prompt("Informe seu e-mail:")
let phrase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${usuario}!`

console.log(phrase)

// 2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.
phrase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${usuario}! \nSeu usuário tem ${usuario.length} caracteres.`
console.log(phrase)

// 3. A seguir, faça o que se pede:
// Substitua todas as letras R na frase criada, por letras X
const phxase = phrase.replaceAll("r","x").replaceAll("R","X")
console.log(phxase)

// Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.
console.log(email.includes("@"))
