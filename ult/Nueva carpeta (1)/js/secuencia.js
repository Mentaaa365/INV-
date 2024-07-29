document.addEventListener("DOMContentLoaded", function () {
    const sequenceContainer = document.getElementById("sequence-container");
    const sequenceForm = document.getElementById("sequence-form");
    const resultContainer = document.getElementById("result");
    const explanationContainer = document.getElementById("explanation");
    const newSequenceButton = document.getElementById("new-sequence");
    const submitButton = document.getElementById("sequence-submit");

    // Función para generar una secuencia aleatoria
    function generateSequence() {
        const start = Math.floor(Math.random() * 10);
        const step = Math.floor(Math.random() * 5) + 1;
        const length = 4;

        const sequence = [];
        for (let i = 0; i < length; i++) {
            sequence.push(start + step * i);
        }
        return sequence;
    }

    // Función para generar opciones de respuesta
    function generateOptions(correctAnswer) {
        const options = new Set();
        options.add(correctAnswer);

        while (options.size < 4) {
            const option = correctAnswer + Math.floor(Math.random() * 10) - 5;
            options.add(option);
        }

        return Array.from(options).sort((a, b) => a - b);
    }

    // Función para mostrar una nueva secuencia
    function displayNewSequence() {
        const sequence = generateSequence();
        const correctAnswer = sequence[sequence.length - 1] + (sequence[1] - sequence[0]);
        const options = generateOptions(correctAnswer);

        sequenceContainer.innerHTML = `
            ${sequence.join(", ")} , ...
        `;

        sequenceForm.innerHTML = options.map(option => `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label>
        `).join("<br>");

        resultContainer.textContent = "";
        explanationContainer.textContent = "";

        submitButton.onclick = function () {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (selectedOption) {
                if (parseInt(selectedOption.value) === correctAnswer) {
                    resultContainer.textContent = "¡Correcto!";
                    resultContainer.style.color = "#388e3c"; // Verde
                    explanationContainer.textContent = `La secuencia es ${sequence.join(", ")}, el siguiente número es ${correctAnswer} ya que cada número aumenta en ${sequence[1] - sequence[0]}.`;
                } else {
                    resultContainer.textContent = "Incorrecto. La respuesta correcta es " + correctAnswer;
                    resultContainer.style.color = "#d32f2f"; // Rojo
                }
            } else {
                resultContainer.textContent = "Por favor, selecciona una respuesta.";
                resultContainer.style.color = "#f57c00"; // Naranja
            }
        };
    }

    newSequenceButton.addEventListener("click", displayNewSequence);

    // Mostrar la primera secuencia al cargar la página
    displayNewSequence();
});
