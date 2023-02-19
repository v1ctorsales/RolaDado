valor = Math.random();
valor = Math.floor(valor*6 +1);

valor2 = Math.random();
valor2 = Math.floor(valor2*6 +1);

//setar o dado
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+valor+".png")
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+valor2+".png")

if(valor > valor2){
  document.querySelector("h1").innerHTML = ("Player 1 venceu");
}
else if(valor < valor2){
  document.querySelector("h1").innerHTML = ("Player 2 venceu");
}
else if(valor == valor2){
  document.querySelector("h1").innerHTML = ("Empate");
}