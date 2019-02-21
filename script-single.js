var STATUS_URL = "http://localhost:3000/status";

window.onload = getContent(STATUS_URL, renderSquares);

function getContent(url, cb) {
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

function renderSquares(response) {
  var container = document.getElementById("container");
  container.innerHTML = "";
  var html = "";
  response.forEach(function(el) {
    var color = "background-color: " + el.color;
    var div = '<div class="box" style="' + color + '">';
    var span =
      '<span class="box--content" onclick="getContent(STATUS_URL, renderSquares)"  href="' +
      STATUS_URL +
      '"</span>';
    div += span;
    div += "</div>";
    html += div;
  });
  container.innerHTML = html;
}
