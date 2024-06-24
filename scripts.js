// Lista de canciones y letras asociadas (assuming lyrics data exists)
const tracks = [
  { src: 'Bad.mp3' },
  { src: 'Sanctuary.mp3' },
  { src: 'Beso.mp3' },
  { src: 'Peach.mp3' },
  { src: 'One.mp3' },
  { src: 'Snow.mp3' },
  { src: 'LIGHT.mp3' }
];

let currentTrackIndex = 0;
let audio = new Audio(tracks[currentTrackIndex].src);

// Elementos del DOM para la barra de progreso
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

// Función para reproducir audio
function playAudio() {
  audio.play();
  audio.addEventListener('timeupdate', updateProgress);
}

// Función para pausar audio
function pauseAudio() {
  audio.pause();
}

// Función para retroceder audio
function rewindAudio() {
  audio.currentTime = Math.max(audio.currentTime - 10, 0); // Retrocede 10 segundos, pero no menos de 0
}

// Función para avanzar audio
function forwardAudio() {
  audio.currentTime = Math.min(audio.currentTime + 10, audio.duration); // Avanza 10 segundos, pero no más de la duración total
}

// Función para cambiar a la pista anterior
function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  switchTrack();
}

// Función para cambiar a la siguiente pista
function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  switchTrack();
}

// Función para actualizar la barra de progreso
function updateProgress() {
  const progressValue = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressValue}%`;
}

// Función para cargar y reproducir la nueva pista
function switchTrack() {
  audio.src = tracks[currentTrackIndex].src;
  playAudio();
}

// Asigna las funciones a los botones
document.getElementById('retroceder').addEventListener('click', rewindAudio);
document.getElementById('pausar').addEventListener('click', function() {
  if (audio.paused) {
      playAudio();
  } else {
      pauseAudio();
  }
});
document.getElementById('avanzar').addEventListener('click', forwardAudio);
document.getElementById('prev-track').addEventListener('click', prevTrack);
document.getElementById('next-track').addEventListener('click', nextTrack);


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach(card => {
      card.addEventListener("click", () => {
          const cardInner = card.querySelector(".flip-card-inner");

          // Verificar si la tarjeta está girada
          const isFlipped = cardInner.style.transform === "rotateY(180deg)";

          // Aplicar el giro correspondiente
          cardInner.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
      });
  });
});
  