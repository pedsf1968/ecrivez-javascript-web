let mainElt = document.getElementById('main');
let pElt = document.createElement('p');
pElt.classList.add('important');
pElt.style.color='green';
pElt.innerHTML = "Mon <strong>grand</strong> contenu";
mainElt.appendChild(pElt);