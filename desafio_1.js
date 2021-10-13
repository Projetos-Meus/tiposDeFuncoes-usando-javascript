function somar(a){
  return function(b){

    return function(c){
      return a + b + c
    }
  }
}

const somarAb = somar(3)(4)
console.log(somarAb(13))

function calcular(x){
  return function(y){
    return function(fn){
      return fn(x, y)
    }
  }
}

function som(a, b){
  return a + b;
}

function sim(a, b){
  return a - b;
}

const at = calcular(5)(6)(som);
const atis = calcular(6)(5)(sim);

console.log(at)
console.log(atis)