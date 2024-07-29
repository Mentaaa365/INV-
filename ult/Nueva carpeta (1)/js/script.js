function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    let result

    if (isNaN(num1) || isNaN(num2)) {
        result = "Falta ingresar datos"
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2
                break
            case 'subtract':
                result = num1 - num2
                break
            case 'multiply':
                result = num1 * num2
                break
            case 'divide':
                if (num2 === 0) {
                    result = "No se puede dividir entre cero."
                } else {
                    result = num1 / num2;
                }
                break
        }
    }
    document.getElementById('calc-result').innerText = `Resultado: ${result}`;
}

// Conversiones de Números
function convert(conversionType) {
    let result;
    let explanation;
    let process = '';
    let tableImage = "img/tablabase.jpg";

    switch (conversionType) {
        case 'binaryToHex':
            const binaryToDecimal = parseInt(document.getElementById('binary').value, 2);
            result = binaryToDecimal.toString(16);
            explanation = "Para convertir de binario a hexadecimal, primero convertimos el número binario a decimal, luego el decimal a hexadecimal.";
            process = `Número binario ${document.getElementById('binary').value} a decimal:<br>` +
                      `Multiplicamos cada dígito por 2 elevado a la posición del dígito (empezando desde 0 desde la derecha):<br>` +
                      `${document.getElementById('binary').value.split('').reverse().map((digit, index) => `${digit} * 2^${index}`).join(' + ')} = ${binaryToDecimal}<br>` +
                      `Decimal ${binaryToDecimal} a hexadecimal:<br>` +
                      `Dividimos ${binaryToDecimal} por 16 y guardamos los residuos:<br>` +
                      `${binaryToDecimal} dividido por 16 = ${(binaryToDecimal / 16).toFixed(2)} con residuo ${binaryToDecimal % 16}<br>` +
                      `Residuos en orden inverso forman el número hexadecimal: ${result}`;
            break;
        case 'binaryToDecimal':
            const binaryValue = document.getElementById('binary').value;
            result = parseInt(binaryValue, 2).toString(10);
            explanation = "Para convertir de binario a decimal, multiplicamos cada dígito por 2 elevado a la posición del dígito, sumando todos los valores.";
            process = `Número binario ${binaryValue} a decimal:<br>` +
                      `Multiplicamos cada dígito por 2 elevado a la posición del dígito (empezando desde 0 desde la derecha):<br>` +
                      `${binaryValue.split('').reverse().map((digit, index) => `${digit} * 2^${index}`).join(' + ')} = ${result}`;
            break;
        case 'hexToBinary':
            const hexValue = document.getElementById('hexadecimal').value;
            const hexToDecimal = parseInt(hexValue, 16);
            result = hexToDecimal.toString(2);
            explanation = "Para convertir de hexadecimal a binario, primero convertimos el número hexadecimal a decimal, luego el decimal a binario.";
            process = `Número hexadecimal ${hexValue} a decimal:<br>` +
                      `Multiplicamos cada dígito por 16 elevado a la posición del dígito (empezando desde 0 desde la derecha):<br>` +
                      `${hexValue.split('').reverse().map((digit, index) => `${digit} * 16^${index}`).join(' + ')} = ${hexToDecimal}<br>` +
                      `Decimal ${hexToDecimal} a binario:<br>` +
                      `Dividimos ${hexToDecimal} por 2 y guardamos los residuos:<br>` +
                      `${hexToDecimal} dividido por 2 = ${(hexToDecimal / 2).toFixed(2)} con residuo ${hexToDecimal % 2}<br>` +
                      `Residuos en orden inverso forman el número binario: ${result}`;
            break;
        case 'decimalToBinary':
            const decimalValue = parseInt(document.getElementById('decimal').value, 10);
            result = decimalValue.toString(2);
            explanation = "Para convertir de decimal a binario, dividimos el número por 2 y guardamos el residuo, repetimos con el cociente hasta llegar a 0, los residuos en orden inverso forman el número binario.";
            process = `Número decimal ${decimalValue} a binario:<br>` +
                      `Dividimos ${decimalValue} por 2 y guardamos los residuos:<br>`;
            let tempDecimal = decimalValue;
            let binaryProcess = [];
            while (tempDecimal > 0) {
                binaryProcess.push(`${tempDecimal} / 2 = ${Math.floor(tempDecimal / 2)} con residuo ${tempDecimal % 2}`);
                tempDecimal = Math.floor(tempDecimal / 2);
            }
            process += `${binaryProcess.join('<br>')}<br>Residuos en orden inverso forman el número binario: ${result}`;
            break;
        default:
            result = "Conversión no válida.";
            explanation = "";
            process = "";
            tableImage = "";
    }

    document.getElementById('conv-result').innerText = `Resultado: ${result}`;
    document.getElementById('conv-explanation').innerText = explanation;
    document.getElementById('conv-process').innerHTML = process;
    document.getElementById('conversion-table').src = tableImage;
}

// Análisis de Texto
function analyzeText() {
    const text = document.getElementById('text').value;
    const numChars = text.length;
    const numVowels = text.match(/[aeiouáéíóúü]/gi)?.length || 0;
    const numSigns = text.match(/[.,!?;:]/g)?.length || 0;
    const numSpaces = text.match(/ /g)?.length || 0;
    const numWords = text.match(/\b\w+\b/g)?.length || 0;
    const numDigits = text.match(/\d/g)?.length || 0;

    document.getElementById('text-result').innerHTML = `
        Caracteres: ${numChars}<br>
        Vocales: ${numVowels}<br>
        Signos: ${numSigns}<br>
        Espacios: ${numSpaces}<br>
        Palabras: ${numWords}<br>
        Dígitos: ${numDigits}
    `;
}

// Invertir Cadena de Texto
function invertText() {
    const text = document.getElementById('invert-text').value;
    const invertedText = text.split('').reverse().join('');
    document.getElementById('invert-result').innerText = `Texto Invertido: ${invertedText}`;
}

// Comparar Frases
function comparePhrases() {
    const phrase1 = document.getElementById('phrase1').value;
    const phrase2 = document.getElementById('phrase2').value;
    const wordsPhrase1 = phrase1.match(/\b\w+\b/g)?.length || 0;
    const wordsPhrase2 = phrase2.match(/\b\w+\b/g)?.length || 0;
    let result;

    if (wordsPhrase1 > wordsPhrase2) {
        result = "La primera frase tiene más palabras.";
    } else if (wordsPhrase1 < wordsPhrase2) {
        result = "La segunda frase tiene más palabras.";
    } else {
        result = "Ambas frases tienen la misma cantidad de palabras.";
    }

    document.getElementById('compare-result').innerText = result;
}
// Manejo de Arreglos
function analyzeArray(type) {
    const input = document.getElementById('array-input').value;
    const array = input.split(',').map(Number);
    let result;
    let explanation;
    let process = '';

    switch (type) {
        case 'primes':
            result = array.filter(isPrime).join(', ');
            explanation = "Para determinar si un número es primo, comprobamos si es divisible solo por 1 y por sí mismo.";
            process = array.map(num => `${num}: ${isPrimeProcess(num)}`).join('<br>');
            break;
        case 'perfects':
            result = array.filter(isPerfect).join(', ');
            explanation = "Un número es perfecto si es igual a la suma de sus divisores propios positivos (excluyendo al propio número).";
            process = array.map(num => `${num}: ${isPerfectProcess(num)}`).join('<br>');
            break;
        case 'stats':
            const sum = array.reduce((acc, num) => acc + num, 0);
            const average = sum / array.length;
            const mode = findMode(array);
            result = `Promedio: ${average.toFixed(2)}, Moda: ${mode}`;
            explanation = "El promedio se obtiene sumando todos los números y dividiendo por la cantidad de números. La moda es el número que aparece con mayor frecuencia en el conjunto.";
            process = `Suma de los números: ${sum}<br>Número de elementos: ${array.length}<br>Promedio: ${average.toFixed(2)}<br>Moda: ${mode}`;
            break;
        default:
            result = "Tipo de análisis no válido.";
            explanation = "";
            process = "";
    }

    document.getElementById('array-result').innerText = `Resultado: ${result}`;
    document.getElementById('array-explanation').innerText = explanation;
    document.getElementById('array-process').innerHTML = process;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPrimeProcess(num) {
    if (num <= 1) return `${num} no es primo porque es menor o igual a 1.`;
    let process = '';
    for (let i = 2; i <= Math.sqrt(num); i++) {
        process += `${num} % ${i} = ${num % i}<br>`;
        if (num % i === 0) {
            return `${num} no es primo porque es divisible por ${i}.<br>${process}`;
        }
    }
    return `${num} es primo.<br>${process}`;
}

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function isPerfectProcess(num) {
    let sum = 0;
    let process = '';
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
            process += `Divisor: ${i}, Suma actual: ${sum}<br>`;
        }
    }
    return `${num} ${sum === num ? 'es' : 'no es'} un número perfecto.<br>${process}`;
}

function findMode(array) {
    const frequency = {};
    let maxFreq = 0;
    let mode;

    array.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mode = num;
        }
    });

    return mode;
}