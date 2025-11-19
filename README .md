# Trivia Multijugador — Juego de Preguntas en JavaScript

Este proyecto es un **juego de trivia interactivo** creado con **HTML, CSS y JavaScript puro**, pensado para ser ligero, fácil de usar y totalmente ejecutable en cualquier navegador sin instalaciones adicionales.

---

## ¿En qué consiste?

El jugador ingresa su nombre, elige cuántas preguntas quiere jugar (entre 5 y 30) y comienza la partida.  
El juego selecciona preguntas aleatorias, mezcla las respuestas y muestra el puntaje en tiempo real.  
Al finalizar, se presenta un resumen con el puntaje total y la opción de volver a jugar.

---

## Características principales

- Interfaz intuitiva y centrada en la experiencia
- Sistema de preguntas aleatorias
- Mezcla automática de opciones
- Puntuación mostrada en tiempo real
- Validación de nombre y cantidad de preguntas
- Destacado visual de respuestas correctas e incorrectas
- Opción de reinicio sin recargar archivos
- Responsive y adaptable a móviles

---

## Estructura del proyecto

```
.
├── index.html        # Estructura visual del juego
├── styles.css        # Estilos y diseño
├── preguntas.js      # Base de preguntas con opciones y respuestas correctas
├── script.js         # Lógica del juego (flujo, puntuación, controles)
└── LICENSE           # Licencia del proyecto
```

---

## Descripción de cada archivo

### index.html

Contiene la estructura del juego dividida en dos pantallas:

- Pantalla inicial (nombre del jugador + cantidad de preguntas)
- Pantalla del juego (pregunta, respuestas, puntaje y botón siguiente)

También enlaza los archivos `styles.css`, `preguntas.js` y `script.js`.

---

### styles.css

Define el diseño general:

- Colores
- Botones
- Estilos para respuestas correctas/incorrectas
- Layout centrado y adaptable
- Animaciones suaves en botones

---

### preguntas.js

Contiene un array con todas las preguntas del trivia.  
Cada objeto incluye:

- `pregunta`
- `opciones` (array de respuestas posibles)
- `respuesta` (la correcta)

Es editable y expandible fácilmente.

---

### script.js

Controla toda la lógica del juego:

- Captura datos del jugador
- Selecciona preguntas aleatorias
- Mezcla opciones
- Detecta respuesta correcta/incorrecta
- Actualiza puntaje
- Maneja el botón de siguiente pregunta
- Muestra el resultado final
- Permite reiniciar la partida

Es un script autocontenido que no depende de librerías externas.

---

## ¿Cómo ejecutar el proyecto?

1. Descarga o clona el repositorio
2. Abre el archivo **index.html** en tu navegador
3. ¡Listo! El juego funciona automáticamente

---

## 🪪 Licencia

Este proyecto está bajo la licencia incluida en el archivo `LICENSE`.

---
