function toggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function activateLink() {
  var topnav = document.getElementById('myTopnav');
  var links = topnav.getElementsByClassName('link');

  for(var i=0; i<links.length;i++) {
    links[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active','');
      this.className += ' active';
    });
  }
}
