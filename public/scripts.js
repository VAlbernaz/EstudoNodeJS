function init()
{
    loadNavBar();
}

function loadNavBar(){
    const nbar=document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch((err)=>{
        alert('Ocorreu um erro!')
    })
    showText();
}

function showText()
{
    
    console.log("ola")
    const campo = document.getElementById('campo')
    fetch('http://localhost:3000/campo')
    .then(res => res.text())
    .then((campoText) =>{
        var rawFile = new XMLHttpRequest();
            rawFile.open("GET", "/files/campo.txt", true);
            rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                var allText = rawFile.responseText;
                document.getElementById("outputCampo").innerHTML = allText;
                }
            }
            rawFile.send();})
            .then((campoText) =>{
                var rawFile = new XMLHttpRequest();
                    rawFile.open("GET", "/files/posicoes.txt", true);
                    rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4) {
                        var allText = rawFile.responseText;
                        document.getElementById("outputPosicoes").innerHTML = allText;
                        }
                    }
                    rawFile.send();})
            .then((campoText) =>{
                var rawFile = new XMLHttpRequest();
                    rawFile.open("GET", "/files/campo.txt", true);
                    rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4) {
                        var allText = rawFile.responseText;
                        document.getElementById("outputPosicoesTR").innerHTML = allText;
                        }
                    }
                    rawFile.send();})

    .catch((err)=>{
      alert('Ocorreu um erro!')
    })
}