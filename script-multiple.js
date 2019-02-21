var STATUS_URL = "http://localhost:3000/status/";

window.onload = function() {
  for (var i = 0; i < 50; i++) {
    getSignleContent(STATUS_URL, renderSquare);
  }
};

function getSignleContent(url, cb) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.response);
      cb(response);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function renderSquare(status) {
  var container = document.getElementById("container");
  var color = "background-color: " + status.color;
  var div = '<div class="box" style="' + color + '">';
  var span =
    '<span class="box--content" onclick="getSignleContent(STATUS_URL, renderSquare, ' +
    status.id +
    ')"</span>';
  div += span;
  div += "</div>";
  container.innerHTML += div;
}
