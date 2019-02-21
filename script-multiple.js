var STATUS_URL = "http://35.184.211.77/";

window.onload = initialRequest();
var container;

function initialRequest() {
  container = document.getElementById("container");
  container.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    getSignleContent(STATUS_URL, renderSquare);
  }
}

function die() {
  console.log("DIE");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", STATUS_URL + "die", true);
  xhttp.send();
}

function getSignleContent(url, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.response);
      var response = JSON.parse(xhttp.response);
      cb(response);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function renderSquare(status) {
  var color = "background-color: " + status.color;
  var div = '<div onclick="die()" class="box" style="' + color + '">';
  var span = '<span class="box--content"></span>';
  div += span;
  div += "</div>";
  container.innerHTML += div;
}
