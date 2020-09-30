let parentElt = document.getElementById('parent');
let childElt = document.getElementById('child');
let parentOut = document.getElementById('parent-count');
let childOut = document.getElementById('child-count');
let parentCounter = 0;
let childCounter = 0;

parentElt.addEventListener('click', function(event) {
    parentOut.innerHTML = ++parentCounter;
});

childElt.addEventListener('click', function(event) {
    event.stopPropagation();
    childOut.innerHTML = ++childCounter;
});