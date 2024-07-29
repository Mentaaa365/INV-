function suma_numeros_naturales(){
let numero=0, resultado=0,r
numero=parseInt(document.getElementById("suma").value)
    if (numero <= 0 || isNaN(numero)) {
        resultado="Por favor, ingrese un número entero positivo";
    } else {
        for (let i = 1; i <= numero; i++) {
            resultado += i;
        }
    }
r = document.getElementById("resp1")
r.innerHTML =resultado
let explicacion=document.getElementById('explicacion1')
explicacion.innerHTML="Se sumará todos los números desde 1 hasta el número ingresado."+"<br>"+"Ejemplo: Si ingresa 5=> 1+2+3+4+5=15"
}
function factorial_numero() {
    let numero = parseInt(document.getElementById("factorial").value);
    let resultado = 1;
    if (numero < 0 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo";
    } else {
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
    }
let r = document.getElementById("resp2")
r.innerHTML =resultado
let explicacion=document.getElementById('explicacion2')
explicacion.innerHTML="Se multiplica todos los números naturales consecutivos desde el 1 hasta el número ingresado."+"<br>"+"Ejemplo: Si ingresa 4=> 4!=1×2×3×4=24"
}
function pares_impares() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultadoPares = [];
    let resultadoImpares = [];
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resp03").textContent = "Por favor, ingrese dos números enteros.";
        document.getElementById("resp3").textContent = "";
        return;
    }
    let inicio = Math.min(numero1, numero2);
    let fin = Math.max(numero1, numero2);
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            resultadoPares.push(i);
        } else {
            resultadoImpares.push(i);
        }
    }
    let mensajePares = `Pares: ${resultadoPares.join(', ')}.`;
    let mensajeImpares = `Impares: ${resultadoImpares.join(', ')}.`;
    document.getElementById("resp03").textContent = mensajePares;
    document.getElementById("resp3").textContent = mensajeImpares;
    let explicacion=document.getElementById('explicacion3')
explicacion.innerHTML="Si ingresa 3 y 9, los numeros en ese rango son (3,4,5,6,7,8,9) y obtenemos el MOD de cada numero para saber si es par (n%2=0) o impar(n%2=1)"+"<br>"+"3%2=1(impar), 4%2=0(par), 5%2=1(impar), 6%2=0(par), 7%2=1(impar), 8%2=0(par), 9%2=1(impar),"
}

function generarTablaMultiplicar() {
    let numero = parseInt(document.getElementById("tabla_numero").value);
    let tablaHTML = "";
    if (isNaN(numero)) {
        tablaHTML = "<p>Por favor, ingrese un número entero válido.</p>";
    } else {
        tablaHTML += `<h3>Tabla de multiplicar del ${numero}:</h3>`;
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            tablaHTML += `<li>${numero} x ${i} = ${resultado}</li>`;
        }
    }
    document.getElementById("resultado_tabla").innerHTML = tablaHTML;
    let explicacion=document.getElementById('explicacion4')
explicacion.innerHTML="Se obtiene la tabal de multiplicar del numero ingresado hasta el 10."+"<br>"+"Ejemplo: Si ingresa 7=> 7x1=7, 7x2=14, 7x3=21, 7x4=28, 7x5=35, 7x6=42, 7x7=49, 7x8=56, 7x9=63, 7x10=70"
}
function generar_tablaSuma() {
    let numero = parseInt(document.getElementById("numero_entero").value);
    let tabla = "";
    if (isNaN(numero) || numero <= 0) {
        tabla = "<p>Por favor, ingrese un número entero positivo válido.</p>";
    } else {
        tabla += `<h3>Tabla de suma del ${numero}:</h3>`;
        tabla += "<ul>";
        for (let i = 1; i <= 10; i++) {
            let resultado = numero + i;
            tabla += `<li>${numero} + ${i} = ${resultado}</li>`;
        }
        tabla += "</ul>";
    }
    document.getElementById("resp5").innerHTML = tabla;
        let explicacion=document.getElementById('explicacion5')
explicacion.innerHTML="Se obtiene la tabal de sumar del numero ingresado hasta el 10."+"<br>"+"Ejemplo: Si ingresa 7=> 7+1=8, 7+2=9, 7+3=10, 7+4=11, 7+5=12, 7+6=13, 7+7=14, 7+8=15, 7+9=16, 7+10=17"
}
function generar_fibonacci() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let resultado = "";
    if (cantidad <= 0 || isNaN(cantidad)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que cero.";
    } else {
        let fibonacci = [];
        if (cantidad >= 1) {
            fibonacci.push(0);
        }
        if (cantidad >= 2) {
            fibonacci.push(1);
        }
        for (let i = 2; i < cantidad; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        resultado = fibonacci.join(', ');
    }
    document.getElementById("resp6").innerHTML = resultado;
            let explicacion=document.getElementById('explicacion6')
explicacion.innerHTML="Para obtener más números de la serie Fibonacci, simplemente se continúa el patrón sumando los dos números anteriores en cada paso."+"<br>"+"Así que la serie Fibonacci de 6 es: 0 , 1 , 1 , 2 , 3 , 5 0,1,1,2,3,5."
}
function numero_perfecto() {
    let numero = parseInt(document.getElementById("numer").value);
    let resultado = "";
    if (numero <= 0 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que cero.";
    } else {
        let sumaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        if (sumaDivisores === numero) {
            resultado = `${numero} es un número perfecto.`;
        } else {
            resultado = `${numero} no es un número perfecto.`;
        }
    }
    document.getElementById("resp7").innerHTML = resultado;
        let explicacion=document.getElementById('explicacion7')
explicacion.innerHTML="Un número perfecto es aquel número entero positivo que es igual a la suma de sus divisores propios."+"<br>"+"Si ingresa 13, identificar los divisores propios de 13=1, luego sumar los divisores propios =1, comparar la suma con el número ingresado 13=1, no es un numero perfecto"
}
function NumeroPrimo() {
    let numero = parseInt(document.getElementById("num").value);
    let resultado = "";
    
    if (numero <= 1 || isNaN(numero)) {
        resultado = "Por favor, ingrese un número entero positivo mayor que uno.";
    } else {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            resultado = `${numero} es un número primo.`;
        } else {
            resultado = `${numero} no es un número primo.`;
        }
    }
    document.getElementById("resp8").innerHTML = resultado;
            let explicacion=document.getElementById('explicacion8')
explicacion.innerHTML="Un número primo es un número natural mayor que 1 que tiene únicamente dos divisores distintos: él mismo y el 1."+"<br>"+"Si ingresa 5, 5>1, realizar la división: Dividimos 5 por 2 y 3 para ver si hay residuos: 5 ÷ 2 = 2.5(residuo ≠ 0) , 5 ÷ 3 = 1.6667(residuo ≠ 0). Como 5 no es divisible por ningún número entero excepto 1 y 5 mismo, concluimos que 5 cumple con la definición de un número primo."
}