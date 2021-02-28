let start = Date.now();

let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  if (timePassed >= 1500) {
    clearInterval(timer);
    return;
  }

  draw(timePassed);

}, 100);

function draw(timePassed) {
	var molot = document.getElementById("molot");
	var serp = document.getElementById("serp");
	molot.style.left = timePassed / 3.5 + 'px';
	serp.style.right = timePassed / 1.165 + 'px';
}