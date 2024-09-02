var periodo = null;
var turma = null;

function periodoManha(){
    periodo = "Manhã - Fundamental II"

    // document.getElementById('periodo1').innerHTML = periodo;
    console.log(periodo)

    localStorage.setItem("adicionar", periodo)
    alert("item add")
}
function periodoTarde(){
    periodo = "Tarde - Ensino Médio"
    
    console.log(periodo)
    localStorage.setItem("adicionar", periodo)
    alert("item add")
}
