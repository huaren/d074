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
