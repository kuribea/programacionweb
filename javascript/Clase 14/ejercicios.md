1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)

3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar

4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad

5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120

6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares

8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites
para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

const figura = prompt("¿Que figura desea calcular? triangulo, rectangulo o circulo");
if (figura === "triangulo") 
{
    const base = prompt("Ingresa la base del triangulo:");
    const altura = prompt("Ingresa la altura del triangulo:");
    const area = (base * altura) / 2;
    console.log(`El area del triangulo es ${area}`);
}else if (figura === "rectangulo") 
{
    const base = prompt("Ingresa la base del rectangulo:");
    const altura = prompt("Ingresa la altura del rectangulo:");
    const area = base * altura;
    console.log(`El area del rectangulo es ${area}`);
}else if (figura === "circulo") 
{
    const radio = prompt("Ingresa el radio del circulo:");
    const area = Math.PI * (radio ** 2);
    console.log(`El area del circulo es ${area}`);
}else
{
    console.log("La figura ingresada no es valida.");
}

/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar 
*/

const num = prompt("Ingresar un número:");
for (let i = 1; i <= num; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(`${i} - es par`);
    }else 
    {
        console.log(`${i} - es impar`);
    }
}

/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

const nume = prompt("Ingresa un numero entero mayor que 1:");
let esPrimo = true;
for (let i = 2; i < nume; i++) 
{
    if (nume % i === 0) 
    {
        esPrimo = false;
        break;
    }
}
if (esPrimo) 
{
    console.log(`${nume} es un numero primo.`);
}else 
{
    console.log(`${nume} no es un numero primo.`);
}

/*
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
*/

const numero = parseInt(prompt("Ingresa un numero entero mayor que cero:"));
let factorial = 1;
for (let i = 2; i <= numero; i++)
{
    factorial *= i;
}
console.log(`El factorial de ${numero} es ${factorial}.`);

/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números 
mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado 
y el contador de cuantos números se han introducido
*/

let suma = 0;
let contador = 0;
while (suma < 50) 
{
    const numero = parseInt(prompt("Ingresa un numero:"));
    suma += numero;
    contador++;
}
console.log(`La suma total es ${suma}, y se introducieron ${contador} numeros.`);

/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, 
ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio 
entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de
 impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

const numeros = [2, 4, 7, 9, 10];
const pares = [];
const impares = [];
for (let i = 0; i < numeros.length; i++) 
{
    const aleatorio = Math.floor(Math.random() * 10) + 1;
    const resultado = numeros[i] * aleatorio;
    console.log(`${numeros[i]} x ${aleatorio} = ${resultado}`);
    if (resultado % 2 === 0) 
    {
        pares.push(resultado);
    } else 
    {
        impares.push(resultado);
    }
}
console.log("Números pares: ", pares);
console.log("Números impares: ", impares);

/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde.
El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado 
del módulo del número introducido entre 23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 
                'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Introduce su numero de DNI");
if (dni >= 0 && dni <= 99999999) 
{
  let posicion = dni % 23;
  console.log(`Su letra de DNI es: ${letras[posicion]}`);
} else
{
  console.log("El numero de DNI no es valido");
}

/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, 
vocales y longitud de la palabra.
*/

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {

}else
{

}
      
/*
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] 
determinar si un color introducido por el usuario a través de un prompt 
se encuentra dentro del array o no.
*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const colorUsuario = prompt("Introduce un color:");
if (colores.includes(colorUsuario))
{
    console.log(`${colorUsuario} se encuentra en el array`);
} else 
{
    console.log(`${colorUsuario} no se encuentra en el array`);
}
