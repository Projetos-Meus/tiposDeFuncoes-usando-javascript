function bomDia() {
  console.log('Bom dia!!!!')
}

const boaTarde = function () {
  console.log('Boa tarde!!!!')
}

// 1 PASSAR UMA FUNÇAO PARA OUTRA FUNÇAO
function executarQualquerCoisa(fn) {
  if(typeof fn === 'function') {
    fn()
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2 RETORNA UMA FUNÇAO A PARTIR DE UMA OUTRA FUNÇÃO

function potencia(base){
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(3))

const pot34 = potencia(1)
console.log(pot34(2))

const pot35 = potencia(3)
console.log(pot35(1))

//soma(3)(4)(5)

//calcular(3)(7)(fn)