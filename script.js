// // Exercícios Guiados - Slide Condicionais I

// const booleano1 = false
// const booleano2 = true

// // if (booleano1) {
// //     alert("booleano1 é verdadeiro")
// // }else{
// //     alert("booleano1 é falso")
// // }





// // pratica guiada 2
// const booleano3 = true
// if (booleano1 === booleano2){
//     alert("booleano1 é igual a booleano2")  
// }else alert("booleano1 é diferente de booleano2")
   
// if (booleano2 === booleano3){
//     alert("booleano2 é igual a booleano3")
// }else alert("booleando2 é diferente de booleano3)")

// if (booleano1 === booleano3){
//     alert("booleano1 é igual a booleano3")
// }else alert("booleano1 é diferente de booleano3")

// if (booleano1 !== booleano2 && booleano3){
//     alert("Há valores booleanos iguais")
// }else alert("Não existem valores booleanos iguais.")




//pratica guiada 3 - Título de Eleitor

// const idade = prompt("Insira o valor de sua idade:")

// if (idade >= 18){
//     alert("Você tem mais de 18 anos e é obrigatório o seu título de eleitor")
// }else alert("Você tem menos de 18 anos e seu título de eleitor não é obrigatório")

// if (idade >= 60){
//     alert("Você tem mais de 60 anos e é facultativo o seu título de eleitor")
// }

// if (idade === 16 || idade === 17){
//     alert(`Você tem ${idade}anos de idade e seu título de eleitor é facultativo`)
// }



const media = prompt("Insira aqui sua média:")

if (media >= 5){
    console.log("Sua média é maior que 5 e você foi aprovado!")
}else if (media >=3 && media < 5){
    console.log("Você está de recuperação!")
}else if (media < 3){
    console.log("Sua média é menor que 3 e você foi reprovado!")
}else console.log("Dado Inválido")

