/* Para pedir un dato al usuario se puede usar prompt(mensaje) */
//prompt('Introduzca su nombre')
/* Para imprimir un dato se puede usar console.log(dato) */
//console.log(dato);
 


/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje 
 "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
*/
const calcular1 = document.getElementById('calcular1');
calcular1.addEventListener('click', () => {
	const nombre = document.getElementById('nombre').value;
	const edad = parseInt(document.getElementById('edad').value);
	const proxEdad = edad + 1;
	console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${proxEdad} años.`);
});



/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites
para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/
const figuraSelect = document.getElementById('figura');
const inputContainer = document.getElementById('input-container');
const calcularBtn = document.getElementById('calcular2');

figuraSelect.addEventListener('change', mostrarInputs);
calcularBtn.addEventListener('click', calcularArea);

function mostrarInputs() {
  const figura = figuraSelect.value;
  inputContainer.innerHTML = '';

  if (figura === 'triangulo') {
    inputContainer.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base" required>
      <label for="altura">Altura:</label>
      <input type="number" id="altura" required>
    `;
  } else if (figura === 'rectangulo') {
    inputContainer.innerHTML = `
      <label for="base">Base:</label>
      <input type="number" id="base" required>
      <label for="altura">Altura:</label>
      <input type="number" id="altura" required>
    `;
  } else if (figura === 'circulo') {
    inputContainer.innerHTML = `
      <label for="radio">Radio:</label>
      <input type="number" id="radio" required>
    `;
  }
}

function calcularArea() {
  const figura = figuraSelect.value;

  if (figura === 'triangulo') {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area}`);
  } else if (figura === 'rectangulo') {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
  } else if (figura === 'circulo') {
    const radio = parseFloat(document.getElementById('radio').value);
    const area = Math.PI * radio ** 2;
    console.log(`El área del círculo es: ${area}`);
  }
}



/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese 
número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/
const calcular3 = document.getElementById('calcular3');
const resultado3 = document.getElementById('resultado3');

calcular3.addEventListener('click', () => {
    const numero = parseInt(document.getElementById('numero').value);
    let mensaje = '';

    for(let i = 1; i <= numero; i++){
        if(i % 2 == 0){
            mensaje += i + ' - es par <br>';
        }else{
            mensaje += i + ' - es impar <br>';
        }
    }
    resultado3.innerHTML = mensaje;
});




/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/
const btn4 = document.getElementById('calcular4');
btn4.addEventListener('click', calcularPrimo);

function calcularPrimo() {
  const numero = parseInt(document.getElementById('numero').value);
  let esPrimo = true;
  
  if (numero < 2) {
    document.getElementById('resultado4').innerHTML = "Introduce un número entero mayor que 1";
    return;
  }
  
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  
  if (esPrimo) {
    document.getElementById('resultado4').innerHTML = `${numero} es primo`;
  } else {
    document.getElementById('resultado4').innerHTML = `${numero} no es primo`;
  }
}



/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
!5 = 5*4*3*2*1 = 120
*/
const btn5 = document.getElementById('calcular5');
btn5.addEventListener('click', calculateFactorial);

function calculateFactorial() {
  const number = parseInt(document.getElementById('number').value);
  
  if (isNaN(number) || number < 1) {
    document.getElementById('resultado5').innerHTML = "Ingrese un número entero mayor que cero";
    return;
  }
  
  let factorial = 1;
  
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  
  document.getElementById('resultado5').innerHTML = `El factorial de ${number} es ${factorial}`;
}



/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números 
mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total 
acumulado y el contador de cuantos números se han introducido
*/
const btn6 = document.getElementById('agregar6');
btn6.addEventListener('click', agregarNumero);

let sumaTotal = 0;
let contadorNumeros = 0;

function agregarNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  
  if (isNaN(numero) || numero <= 0) {
    alert('Introduce un número válido mayor que cero');
    return;
  }
  
  if (sumaTotal + numero > 50) {
    alert('La suma total no debe superar 50');
    return;
  }
  
  sumaTotal += numero;
  contadorNumeros++;
  
  document.getElementById('numero').value = '';
  document.getElementById('resultado6').innerHTML = `Suma total: ${sumaTotal}<br>Número de números introducidos: ${contadorNumeros}`;
}



/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, 
            ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un 
            número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares 
            y si es impar en el array de impares. Muestra por consola:
            -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
            -el array de pares e impares
*/
const numeros = [2, 5, 8, 10, 13];
const pares = [];
const impares = [];
for (let i = 0; i < numeros.length; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const multiplicacion = numeros[i] + ' x ' + randomNum;
  const resultado = numeros[i] * randomNum;
  if (resultado % 2 === 0) {
    pares.push(resultado);
  } else {
    impares.push(resultado);
  }
  console.log(`${multiplicacion} = ${resultado}`);
}
console.log(`Array de pares: [${pares}]`);
console.log(`Array de impares: [${impares}]`);



/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. 
            El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es 
            el resultado del módulo del número introducido entre 23
            const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
            'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
            'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const btn8 = document.getElementById('calcular8');
btn8.addEventListener('click', calcularLetraDNI);

function calcularLetraDNI() {
  const dni = parseInt(document.getElementById('dni').value);
  
  if (isNaN(dni) || dni <= 0 || dni > 99999999) {
    alert('Introduce un número de DNI válido');
    return;
  }
  
  const letra = letras[dni % 23];
  
  document.getElementById('resultado9').innerHTML = `Tu letra de DNI es: ${letra}`;
}



/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, 
            vocales y longitud de la palabra
*/
const btn9 = document.getElementById('calcular9');
btn9.addEventListener('click', calcular9);

function calcular9() {
  const palabra = document.getElementById('palabra').value;
  const consonantes = palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  const vocales = palabra.match(/[aeiou]/gi).length;
  const longitud = palabra.length;
  
  const resultado = document.getElementById('resultado9');
  resultado9.innerHTML = `Consonantes: ${consonantes}<br>Vocales: ${vocales}<br>Longitud: ${longitud}`;
}




/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] 
            determinar si un color introducido por el usuario a través de un prompt 
            se encuentra dentro del array o no
*/
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const btn10 = document.getElementById('verificar10');
btn10.addEventListener('click', verificarColor);

function verificarColor() {
  const color = document.getElementById('color').value.toLowerCase();
  
  if (colores.includes(color)) {
    document.getElementById('resultado10').innerHTML = `El color ${color} se encuentra en el array`;
  } else {
    document.getElementById('resultado10').innerHTML = `El color ${color} no se encuentra en el array`;
  }
}
