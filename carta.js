
// Criado o array os nipes com caracteres especiais.
var nipes = ['&spades;', '&clubs;', '&hearts;', '&diams;']
// Criado o array com as numerções das cartas de um baralho.
var faces = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function rodaCartas() {
  // Criado a variáveil "nipe" para gerar randômicamente os nipes das cartas.
  var nipe = nipes[Math.floor(Math.random() * nipes.length)]
  // Criado a variável "face" para gerar randômicamente os números das cartas.
  var face = faces[Math.floor(Math.random() * faces.length)]
  // Imprimi no browser o resultado do código acima.
  var text = document.getElementById('Texto').innerHTML = ( face + nipe )
}
  





