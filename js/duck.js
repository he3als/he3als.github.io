var duck = document.querySelector('.duck');
var cat = document.querySelector('.cat');
var cat1 = document.querySelector('.cat1');
var optionalimage = document.querySelector('.optionalimage');
var duckSound = document.getElementById('duckSound');

duckSound.volume = 0.1;
var clickCount = 0;

duck.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 20) {
    duck.style.opacity = 0;
	cat.style.display = 'block';
	cat.style.opacity = 1;
  }
  if (clickCount === 40) {
    cat.style.opacity = 0;
	cat1.style.display = 'block';
	cat1.style.opacity = 1;
  }
  if (clickCount === 70) {
	var boomSound = new Audio('/other/boom.ogg');
	boomSound.play();
    optionalimage.style.display = 'none';
  }
  var newDuckSound = new Audio('/other/duck.ogg');
  newDuckSound.volume = 0.1;
  newDuckSound.play();
});
