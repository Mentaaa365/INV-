document.addEventListener("DOMContentLoaded", function () {
    const scenarioElement = document.getElementById("scenario");
    const resultElement = document.getElementById("result");
    const explanationElement = document.getElementById("explanation");

    // Escenarios de ejemplo
    const scenarios = [
        { text: "Encuentras una cartera en la calle. ¿La recoges?", correctAnswer: false, explanation: "Correcto. En este caso, la mejor decisión es no recoger la cartera debido a preocupaciones de seguridad. Siempre es importante considerar las consecuencias y actuar con precaución." },
        { text: "Ves a alguien en la calle pidiendo ayuda. ¿Lo ayudas?", correctAnswer: true, explanation: "Correcto. Ayudar a quienes lo necesitan es una buena acción, aunque siempre es importante asegurarse de que la situación sea segura." },
        { text: "Un amigo te invita a una fiesta. ¿Vas a la fiesta si no conoces a nadie allí?", correctAnswer: true, explanation: "Correcto. Ir a eventos sociales puede ser una buena oportunidad para conocer gente nueva y expandir tu círculo social, pero siempre es bueno considerar la seguridad y el confort personal." },
    ];

    // Genera un nuevo escenario
    function generateScenario() {
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        const scenario = scenarios[randomIndex];
        scenarioElement.textContent = scenario.text;
        explanationElement.style.display = 'none'; // Ocultar la explicación inicialmente
        explanationElement.textContent = scenario.explanation;
        window.correctAnswer = scenario.correctAnswer; // Establecer la respuesta correcta globalmente
    }

    // Toma una decisión
    function makeDecision(isYes) {
        if (isYes === window.correctAnswer) {
            resultElement.textContent = "¡Correcto!";
            resultElement.style.color = "#388e3c"; // Verde
            explanationElement.style.display = "block"; // Mostrar explicación
        } else {
            resultElement.textContent = "Incorrecto. Inténtalo de nuevo.";
            resultElement.style.color = "#d32f2f"; // Rojo
            explanationElement.style.display = "none"; // Ocultar explicación
        }
    }

    // Mostrar el primer escenario al cargar la página
    generateScenario();

    // Asignar el evento al botón de nueva pregunta
    document.getElementById("new-scenario").addEventListener("click", generateScenario);

    // Exponer la función makeDecision para el uso en los botones
    window.makeDecision = makeDecision;
});
