// Función para generar un número aleatorio entre 1 y 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Función para dibujar un dado dado un número
function drawDie(number) {
    const diceContainer = document.getElementById('diceContainer');
    const dieImg = document.createElement('img');
    dieImg.className = 'dice'; // Agregamos la clase 'dice' aquí
    dieImg.src = `images/dice${number}.png`; // Ruta de la imagen correspondiente al número del dado
    diceContainer.appendChild(dieImg);
}

// Función para generar y dibujar los dados
function generateDice() {
    const diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = ''; // Limpiamos el contenedor de dados antes de generar nuevos

    // Generar 5 números aleatorios y dibujar los dados correspondientes
    for (let i = 0; i < 5; i++) {
        const randomNumber = rollDice();
        drawDie(randomNumber);
    }
}

// Obtener referencia al botón de generar
const generateButton = document.getElementById('generateButton');

// Agregar un event listener para detectar cuando se hace clic en el botón
generateButton.addEventListener('click', generateDice);

// Llamar a la función para generar los dados inicialmente al cargar la página
generateDice();
