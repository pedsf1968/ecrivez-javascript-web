let nameElt = document.getElementById('name');
let resNameElt = document.getElementById('res-name');
let genderElt = document.getElementById('gender');
let resGenderElt = document.getElementById('res-gender');
let resultElt = document.getElementById('result');
let mouseXElt = document.getElementById('mouse-x');
let mouseYElt = document.getElementById('mouse-y');

nameElt.addEventListener('input', function(event) {
  resNameElt.innerHTML = event.target.value;
});

genderElt.addEventListener('change', function(event) {
  resGenderElt.innerHTML = event.target.value;
});

resultElt.addEventListener('mouseover', function(event){
  mouseXElt.innerHTML = event.offsetX;
  mouseYElt.innerHTML = event.offsetY;
});