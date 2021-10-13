// Função map pecorre todo array pela função

const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
  { nome: 'Caneta', qtade: 10, preco: 7.99 },
  { nome: 'Impressora', qtade: 0, preco: 649.50 },
  { nome: 'Caderno', qtade: 4, preco: 27.10 },
  { nome: 'Lapis', qtade: 3, preco: 5.82 },
  { nome: 'Tesoura', qtade: 1, preco: 19.20 },
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtade * item.preco
const totais = carrinho.map(getTotal)

console.log(totais) 

Array.prototype.meuMap = function(fn) {
  const novoArray = []
  for(let i = 0; i < this.length; i++){
    novoArray.push(fn(this[i], i,this))

  }
  return novoArray
}



