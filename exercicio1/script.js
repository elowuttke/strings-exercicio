console.log(" - EXERCÍCIO 1 STRINGS -")

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:

// ```
// Estas são as comidas favoritas de nomeDoUsuario
// - Comida1
// - Comida2
// - Comida3
// ```
// Você deve usar apenas um console.log() para isso

const user = prompt("Qual é seu nome?")
const foodFir = prompt("Qual é a sua comida favorita?")
const foodSec = prompt("E a segunda comida favorita?")
const foodThi = prompt("Em terceiro lugar fica qual?")

console.log(`Estas são as comidas favoritas de ${user} \n- ${foodFir} \n- ${foodSec} \n- ${foodThi}`)