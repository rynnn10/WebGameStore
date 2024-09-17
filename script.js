window.addEventListener("load", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("navbar-animate");

  const aboutSection = document.querySelector(".about-section");
  const mainSection = document.querySelector("#main");
  const footerSection = document.querySelector(".footer");
  const backgroundMusic = document.getElementById("background-music");

  // Memulai musik backsound saat halaman dimuat
  backgroundMusic.play();

  // Memulai animasi section dengan delay
  setTimeout(function () {
    aboutSection.classList.add("animate-about");
  }, 300);

  setTimeout(function () {
    mainSection.classList.add("animate-main");
  }, 600);

  setTimeout(function () {
    footerSection.classList.add("animate-footer");
  }, 900);
});

// Memainkan musik ketika halaman digulir
window.addEventListener("scroll", function () {
  const backgroundMusic = document.getElementById("background-music");
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});

function bukaGame1() {
  window.location.href = "https://rynnn10.github.io/GameGuntingBatuKertas/";
}
function bukaGame2() {
  window.location.href = "https://rynnn10.github.io/GameMenyusunTower/";
}
function bukaGame3() {
  window.location.href = "https://rynnn10.github.io/GameDinoRun/";
}
