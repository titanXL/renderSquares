var STATUS_URL = 'http://localhost:3000/status/'

window.onload = function() {
    for(var i = 0; i< 50; i++) {
        getSignleContent(STATUS_URL, renderSquare, i)
    }
}

function getSignleContent(url,cb, id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.response)
            cb(response)
        }
    };
    xhttp.open("GET", url+ id, true);
    xhttp.send();
}

function renderSquare(el) {
    if(document.getElementById(el.id)) {
        document.getElementById(el.id).style.backgroundColor = el.color
    } else {
        var container = document.getElementById('container')
        var color = 'background-color: ' + el.color 
        var div = '<div id="' + el.id + '" class="box" style="'+ color +  '">'
        var span = '<span class="box--content" onclick="getSignleContent(STATUS_URL, renderSquare, '+ el.id + ')"</span>'
        div += span
        div += '</div>'
        container.innerHTML += div
    }
}