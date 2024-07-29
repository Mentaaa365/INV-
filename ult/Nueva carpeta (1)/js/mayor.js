document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("question");
    const resultElement = document.getElementById("result");
    const explanationElement = document.getElementById("explanation");

    
    function generateExample() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        questionElement.textContent = `¿Cuál número es mayor, ${num1} o ${num2}?`;
        
        const correctAnswer = num1 > num2 ? num1 : num2;
        
        document.querySelectorAll('.options button').forEach((button, index) => {
            button.textContent = [num1, num2][index];
            button.onclick = function() {
                checkAnswer([num1, num2][index] === correctAnswer);
            };
        });

        
        resultElement.textContent = '';
        explanationElement.style.display = 'none';
    }

    
    function checkAnswer(isCorrect) {
        if (isCorrect) {
            resultElement.textContent = "¡Correcto!";
            resultElement.style.color = "#388e3c"; // Verde
            explanationElement.style.display = "block"; // Mostrar explicación
            explanationElement.textContent = "Correcto. El número mayor es el que seleccionaste. Recuerda que para comparar dos números, simplemente observa cuál es mayor.";
        } else {
            resultElement.textContent = "Incorrecto. Inténtalo de nuevo.";
            resultElement.style.color = "#d32f2f"; // Rojo
            explanationElement.style.display = "none"; // Ocultar explicación
        }
    }

    
    generateExample();

    document.getElementById("new-question").addEventListener("click", generateExample);
});
