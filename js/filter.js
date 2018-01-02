// TURN ON GRAY SCALE ON ALL HEROES
function turnOnGrayScale(){
  var heroes = document.getElementsByClassName("heroes");
  for (var i = 0; i < heroes.length; i++) {
    heroes[i].style.filter = "grayscale(100%)";
    heroes[i].style.filter = "opacity(30%)";
  }
}
function turnOffGrayScale(){
  var heroes = document.getElementsByClassName("heroes");
  for (var i = 0; i < heroes.length; i++) {
    heroes[i].style.filter = "grayscale(0%)";
  }
}
// TURN GRAY SCALE *ON* ALL MELEE HEROES
function meleeGrayScaleON(){
  var meleeHero = document.getElementsByClassName("melee");
  for (var i = 0; i < meleeHero.length; i++) {
    meleeHero[i].style.filter = "grayscale(100%)";
  }
}
// TURN GRAY SCALE *OFF* ALL MELEE HEROES
function meleeGrayScaleOFF(){
  var meleeHero = document.getElementsByClassName("melee");
  for (var i = 0; i < meleeHero.length; i++) {
    meleeHero[i].style.filter = "grayscale(0%)";
  }
}
// TURN GRAY SCALE *OFF* ALL RANGED HEROES
function rangedGrayScaleON(){
  var rangedHero = document.getElementsByClassName("ranged");
  for (var i = 0; i < rangedHero.length; i++) {
    rangedHero[i].style.filter = "grayscale(100%)";
  }
}
// TURN GRAY SCALE *ON* ALL RANGED HEROES
function rangedGrayScaleOFF(){
  var rangedHero = document.getElementsByClassName("ranged");
  for (var i = 0; i < rangedHero.length; i++) {
    rangedHero[i].style.filter = "grayscale(0%)";
  }
}


function strSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#f9f9f9";
  str.style.color = "#222222";
  agi.style.background = "#222222";
  agi.style.color = "#f9f9f9";
  int.style.background = "#222222";
  int.style.color = "#f9f9f9";
}
function agiSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#222222";
  str.style.color = "#f9f9f9";
  agi.style.background = "#f9f9f9";
  agi.style.color = "#222222";
  int.style.background = "#222222";
  int.style.color = "#f9f9f9";
}
function intSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#222222";
  str.style.color = "#f9f9f9";
  agi.style.background = "#222222";
  agi.style.color = "#f9f9f9";
  int.style.background = "#f9f9f9";
  int.style.color = "#222222";
}

function bothSelected(){
  turnOffGrayScale();
  var both = document.getElementById("bothSele");
  var melee = document.getElementById("meleeSele");
  var ranged = document.getElementById("rangedSele");
  both.style.background = "#f9f9f9";
  both.style.color = "#222222";
  melee.style.background = "#222222";
  melee.style.color = "#f9f9f9";
  ranged.style.background = "#222222";
  ranged.style.color = "#f9f9f9";
}
function meleeSelected(){
  turnOnGrayScale();
  meleeGrayScaleOFF();
  var both = document.getElementById("bothSele");
  var melee = document.getElementById("meleeSele");
  var ranged = document.getElementById("rangedSele");
  both.style.background = "#222222";
  both.style.color = "#f9f9f9";
  melee.style.background = "#f9f9f9";
  melee.style.color = "#222222";
  ranged.style.background = "#222222";
  ranged.style.color = "#f9f9f9";
}
function rangedSelected(){
  turnOnGrayScale();
  rangedGrayScaleOFF();
  var both = document.getElementById("bothSele");
  var melee = document.getElementById("meleeSele");
  var ranged = document.getElementById("rangedSele");
  both.style.background = "#222222";
  both.style.color = "#f9f9f9";
  melee.style.background = "#222222";
  melee.style.color = "#f9f9f9";
  ranged.style.background = "#f9f9f9";
  ranged.style.color = "#222222";
}
