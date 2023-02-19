//Gerar um valor aleatório pro primeiro dado
valor = Math.random();
valor = Math.floor(valor*6 +1);

//Gerar um valor aleatório pro segundo dado
valor2 = Math.random();
valor2 = Math.floor(valor2*6 +1);

//Definir as imagens com base no número gerado
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+valor+".png")
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+valor2+".png")

//Definir o texto do h1 com base no resultado dos dados
if(valor > valor2){
  document.querySelector("h1").innerHTML = ("Player 1 venceu");
}
else if(valor < valor2){
  document.querySelector("h1").innerHTML = ("Player 2 venceu");
}
else if(valor == valor2){
  document.querySelector("h1").innerHTML = ("Empate");
}