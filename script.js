// a contagem dos indices sempre começa do 0
// indices           0        1          2            3

let vendedores = ["Enzo", "Manoel", "Valentina", "Aurora"]
//console.log(vendedores)
//console.log(vendedores[1])

let carrinho = ["banana", "maça"]
//console.log (Carrinho)

//metodos de array


//.push() = Adiciona o elemnto no final do array
carrinho.push("uva")
//console.log(carrinho)
//imprimiu: ["banana", "maça", "uva"]

// .unshift() - adiciona o elemento no INíCIO do array
carrinho.unshift("abacaxi")
//console.log(carrinho)
//imprimiu: ["abacaxi", "banana", "maça", "uva"]


// .pop() - Remove o ÚLTIMO elemento do array
carrinho.pop()
//imprimiu: ["abacaxi", "banana", "maça"]

//.shift() - Remove o PRIMEIRO elemnto do array
carrinho.shift
//console.log(carrinho)

//  --------------- Métodos mais complexos ---------------

// Splice é um dos métodos mais complexos. Com ele podemos remover, adicionar ou substituir elementos do array

// Parâmetros
// Início: Indice que indica onde a ação vai começar
// quantidadeParaRemover
// Pra adicionar utilizo o 0 (Não quero remover)

//   posição          1       2         3
//   indice           0       1         2
let carrinhoPlus = ["caqui", "manga", "goiaba"]
// console.log(carrinhoPlus[1])

// ---------- Adicionar com Splice
carrinhoPlus.splice(1, 0, "morango")
// console.log(carrinhoPlus)
//               0         1         2        3
// imprimiu: ['caqui', 'morango', 'manga', 'goiaba']

carrinhoPlus.splice(4, 0, "mamão") // Pra adicionar o segundo valor será sempre 0
// console.log(carrinhoPlus)
//               0         1         2         3        4
// imprimiu: ['caqui', 'morango', 'manga', 'goiaba', 'mamão']

// ------- Remover com Splice
// carrinhoPlus.splice( indiceQueIndicaOndeComeça  ,  quantosElementosRemover )
carrinhoPlus.splice(1, 2) // Na posição 0 remova 2 itens
// console.log(carrinhoPlus)
// imprimiu: ['caqui', 'goiaba', 'mamão'] 
// Removeu o morango e manga

// --------- Substituir com Splice
let fastFoods = ["pizza", "Hamburguer", "batata frita", "bacon", "cheddar", "pão de queijo"]
fastFoods.splice(4, 1, "Hot Dog")
console.log(fastFoods)
// imprimiu: ['pizza', 'Hamburguer', 'batata frita', 'bacon', 'Hot Dog', 'pão de queijo']

fastFoods.splice(2, 1, "Batata Recheada")
console.log(fastFoods)