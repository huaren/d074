function tabAtribute(evt, tabName){
  var tabContent;
  var tabLinks;
  tabContent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i <tabContent.length; i++){
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tabLinks");
  for (var i = 0; i< tabLinks.length; i++){
    tablinks[i].className = tabLinks[i].className.replace("active", " ");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function strSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#000";
  str.style.color = "#fff";
  agi.style.background = "#fff";
  agi.style.color = "#000";
  int.style.background = "#fff";
  int.style.color = "#000";
}
function agiSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#fff";
  str.style.color = "#000";
  agi.style.background = "#000";
  agi.style.color = "#fff";
  int.style.background = "#fff";
  int.style.color = "#000";
}
function intSelected(){
  var str = document.getElementById("strSele");
  var agi = document.getElementById("agiSele");
  var int = document.getElementById("intSele");

  str.style.background = "#fff";
  str.style.color = "#000";
  agi.style.background = "#fff";
  agi.style.color = "#000";
  int.style.background = "#000";
  int.style.color = "#fff";
}
