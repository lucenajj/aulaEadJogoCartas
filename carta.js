var nipes = ['&spades;','&clubs;','&hearts;','&diams;']
var faces = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
var nipe = nipes [Math.floor(Math.random()*nipes.length)]
var face = faces [Math.floor(Math.random()*faces.length)]
document.write('<h1>' + face + nipe + '<h1>')