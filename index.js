console.log(" - AULA STRINGS -")

// Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
// A cor favorita de pessoa é cor;
let nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual é a sua cor favorita?")

// Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings.
let fraseConcatenada = "A cor favorita de " + nome + " é " + cor + "."
console.log(fraseConcatenada)

let fraseTemplateString = `A cor favorita de ${nome} é ${cor}.`
console.log(fraseTemplateString)

// Agora, vamos alterar a forma com que o texto aparece.
// Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
const citacao = prompt("Qual é sua citação favorita?")
fraseConcatenada = "A cor favorita de " + nome + " é " + cor + ", e sua citação favorita é \"" + citacao + "\"."
console.log(fraseConcatenada)

// Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
fraseTemplateString = `Nome: ${nome} \nCor favorita: ${cor} \nCitação favorita: "${citacao}"`
console.log(fraseTemplateString)

// Vamos alterar a forma de nossa exibição de strings agora.
// Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
nome = nome.toUpperCase()
console.log(nome)

// Exiba no console quantos caracteres tem o nome da pessoa.
console.log(nome.length)

// Cheque se o nome da pessoa possui a letra A
console.log(nome.includes("A"))