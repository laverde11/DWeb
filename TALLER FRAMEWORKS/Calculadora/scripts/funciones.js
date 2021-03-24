function limpiar(){
    document.getElementById('Formulario').reset();
}

function Sumar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML=x+y;
    validar();
}
function Restar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML=x-y;
    validar();
}
function Multiplicar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML=x*y;
    validar();
}
function Dividir(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML=x/y;
    validar();
}
function Potenciar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML=Math.pow(x,y);
    validar();
}
function validar(){
    nume1 = (document.getElementById('num1').value);
    nume2 = (document.getElementById('num2').value);
    if(nume1.length==0 || nume2.length==0){
        alert("por favor completa los campos")
        }
    }