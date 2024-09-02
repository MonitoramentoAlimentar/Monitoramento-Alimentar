periodo = null;

turma = null;

function ler(){
    periodo = localStorage.getItem("adicionar");

    // alert(periodo)

    document.getElementById('periodo').innerHTML = periodo;

    
    
    turma = localStorage.getItem("addT")

    //alert(periodo)

    document.getElementById('turma').innerHTML = turma;
}

//tornando o botão funcional

var valorA = 0;
valorB = 0;
valorF = 0;

function plusA(){
    valorA++
    if(valorA > 3){
        valorA = 0;
    }
    document.getElementById("valorAlimento").innerHTML = valorA
}
function plusB(){
    valorB++
    if(valorB > 3){
        valorB = 0;
    }
    document.getElementById("valorBebida").innerHTML = valorB
}
function plusF(){
    valorF++
}


function midA(){
    valorA--
    if(valorA < 0){
        valorA = 3
    }
    document.getElementById("valorAlimento").innerHTML = valorA
}
function midB(){
    valorB--
    if(valorB < 0){
        valorB = 3
    }
    document.getElementById("valorBebida").innerHTML = valorB
}
function midF(){
    valorF--
}
