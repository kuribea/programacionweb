let contador=0;
const mensaje="Buenas";

var num1="234";
let nombre="";
let num2=4567;
let Num2=4567;

function Contar(){
    let elem = document.getElementById("para0");//ambito local
    contador +=1;//contador = contador+1;
    console.log(contador);
    //alert(contador)
    elem.textContent=contador;
    let elem2=document.getElementById("titulo");
    elem2.textContent=mensaje + " " + contador;
    console.log(elem2.textContent);
}
function desContar(){
    let elem=document.getElementById("para0");//ambito local
    contador -= 1;//contador = contador-1;
    console.log(contador);
//alert(contador)
    elem.textContent=contador;
    let elem2=document.getElementById("titulo");
    elem2.textContent=mensaje+ " " + contador;
    console.log(elem2.textContent);
}

function chagenColor(changeColor){
    var elem = document.getElementById("para");
    elem.style.backgroundColor=newcolor;
}
function chagenColor1(newColor, identificador){
    let elem = document.getElementById(identificador);
    console.log(newColor, identificador);
    elem.style.backgroundColor = newColor;
    elem.textContent="El color es: " + newColor;
    if((newColor == "blue")){
        elem.className="caja2";
        elem.style.color="black";
    } else{
        elem.className="caja1";
        elem.style.color="black";
    }
    console.log(elem.className);
}

function chageEstilo(newEstilo, etiqueta){
    var elem = document.getElementById(etiqueta);
    elem.className = newEstilo;
    console.log(newEstilo);
}