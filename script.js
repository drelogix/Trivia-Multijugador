// Variables del DOM
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

const btnComenzar = document.getElementById("comenzar");
const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");
const inputNombre = document.getElementById("nombre");
const inputPreguntas = document.getElementById("preguntas");
const turnoActualEl = document.getElementById("turno-actual");

let jugador = { nombre: "", puntos: 0 };
let preguntaActual = 0;
let preguntasSeleccionadas = [];

function seleccionarPreguntas(cantidad) {
  const copia = [...preguntas];
  const seleccionadas = [];

  while (seleccionadas.length < cantidad && copia.length > 0) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(index, 1)[0]);
  }

  return seleccionadas;
}

function mostrarPregunta() {
  nextBtn.disabled = true;
  answersEl.innerHTML = "";
  const pregunta = preguntasSeleccionadas[preguntaActual];
  questionEl.textContent = pregunta.pregunta;

  const respuestas = [...pregunta.opciones];
  shuffleArray(respuestas);

  respuestas.forEach((respuesta) => {
    const btn = document.createElement("button");
    btn.textContent = respuesta;
    btn.style.margin = "5px";
    btn.addEventListener("click", () =>
      seleccionarRespuesta(btn, respuesta, pregunta.respuesta)
    );
    answersEl.appendChild(btn);
  });
}

function seleccionarRespuesta(button, seleccionada, correcta) {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  if (seleccionada === correcta) {
    button.classList.add("correct");
    jugador.puntos++;
  } else {
    button.classList.add("incorrect");
    const correctBtn = [...buttons].find((btn) => btn.textContent === correcta);
    if (correctBtn) correctBtn.classList.add("correct");
  }

  scoreEl.textContent = `Puntaje: ${jugador.puntos}`;
  nextBtn.disabled = false;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

nextBtn.addEventListener("click", () => {
  preguntaActual++;
  if (preguntaActual < preguntasSeleccionadas.length) {
    mostrarPregunta();
  } else {
    mostrarResultadoFinal();
  }
});

function mostrarResultadoFinal() {
  questionEl.textContent = "¡Juego terminado!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const resultado = document.createElement("div");
  resultado.innerHTML = `<h3>🎉 ${jugador.nombre}, tu puntaje final es: ${jugador.puntos} 🎉</h3>`;

  const reiniciarBtn = document.createElement("button");
  reiniciarBtn.textContent = "Volver a jugar";
  reiniciarBtn.addEventListener("click", () => window.location.reload());
  resultado.appendChild(reiniciarBtn);

  answersEl.appendChild(resultado);
}

btnComenzar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const numPreguntas = parseInt(inputPreguntas.value);

  if (nombre === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  if (numPreguntas < 5 || numPreguntas > 30) {
    alert("El número de preguntas debe estar entre 5 y 30.");
    return;
  }

  jugador = { nombre, puntos: 0 };

  inicio.style.display = "none";
  juego.style.display = "block";
  preguntasSeleccionadas = seleccionarPreguntas(numPreguntas);
  mostrarPregunta();
});
