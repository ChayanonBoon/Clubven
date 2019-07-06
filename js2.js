
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn7 = document.getElementById("btnplayer7");
// Get the <span> element that closes the modal
var btn8 = document.getElementById("btnplayer8");
// Get the <span> element that closes the modal
var btn9 = document.getElementById("btnplayer9");
// Get the <span> element that closes the modal
var btn10 = document.getElementById("btnplayer10");
// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn7.onclick = function() {
  modal.style.display = "block";
}
btn8.onclick = function() {
    modal.style.display = "block";
}
btn9.onclick = function() {
    modal.style.display = "block";
}
btn10.onclick = function() {
    modal.style.display = "block";
}
      
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
