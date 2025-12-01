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

//----------------------------------Métodos mais complexos ------------------------------

// splice é um dos metodos mais complexos

// Parâmetros
// inicio: indice que indica onde a ação vai começar
//quantidaParaRemover

//posiçãop
//indice
let carrinhoPlus = ["caqui", "manga", "goiaba"]
//console.log(carrinhoPlus[1])

carrinhoPlus.splice(1, 0, "morango")
console.log(carrinhoPlus)
// 
// imprimiu: ["caqui", "morango", "manga", "goiaba"]

carrinhoPlus.splice(4,0, "mamão")
console.log(carrinhoPlus)

//-------- Remover com Splice
// carrinhoPlus.splice(Indice que indica onde começa , quantos elementos remover)
carrinhoPlus.splice(1, 2) // Na posição 0 remove 1 item
//console.log(carrinhoPlus)
// imprimiu: ["caqui", "goiaba", 'mamão']
//removeu o morango e manga