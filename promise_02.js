
setTimeout(function() {
  console.log('Executando callbakck...')

  setTimeout(function(){
    console.log('Executando callbakck...')

    setTimeout(function(){
      console.log('Executando callbakck...')
    }, 2000)
  }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function(){
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

esperarPor()
.then(() => esperarPor())
.then(esperarPor)