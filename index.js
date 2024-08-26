var dicePlayer1 = Math.floor((Math.random()* 6)+1);
var dicePlayer2 = Math.floor((Math.random()* 6)+1);

document.querySelector("img#left").setAttribute("src","./images/dice" + dicePlayer1 + ".png");
document.querySelector("img#right").setAttribute("src","./images/dice" + dicePlayer2 + ".png");

var title = document.querySelector("h1");

if(dicePlayer1 > dicePlayer2){
    title.innerHTML = "🚩Player 1 wins!";

}
else if(dicePlayer2 > dicePlayer1){
    title.innerHTML = "Player 2 wins!🚩";
}

else{
    title.innerHTML = "Draw!";
}