let valueElt = document.getElementById('value');
let submitElt = document.getElementsByTagName('input')[1];
let resultElt = document.getElementById('result');


function sendRequest() {
  var request = new XMLHttpRequest();
  
   request.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
      console.log(valueElt.value);
      console.log(this.postData.text);
      resultElt.innerHTM = this.postData.text;
    }
  };
  
  request.open('POST', "https://mockbin.com/request");
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({value: document.getElementById("value").value}));
}

submitElt.addEventListener('input', function(event) {
  console.log(valueElt);
});
