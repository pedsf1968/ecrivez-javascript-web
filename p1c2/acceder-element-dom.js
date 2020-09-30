        let console1Elt = document.getElementById('console1');
        let console2Elt = document.getElementById('console2');
        let console3Elt = document.getElementById('console3');
        let console4Elt = document.getElementById('console4');
        
        console1Elt.innerHTML = document.getElementById('main-content').textContent;
        console2Elt.innerHTML = document.getElementsByClassName('important');
        console3Elt.innerHTML = document.getElementsByTagName('article');
        console4Elt.innerHTML = document.querySelector("article > ul.important > li");
        
