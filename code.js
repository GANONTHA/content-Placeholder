const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const name = document.getElementById("name");
const date = document.getElementById("date");
const profile_img = document.getElementById("profile_img");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 3000);

function getData() {
  header.innerHTML = '<img src="desktop.png" alt="a desktop"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,dolores";

  name.innerHTML = "Bruno Ganontha";
  profile_img.innerHTML = '<img src="bruno.jpg" alt="bruno"/>';
  date.innerHTML = "oct-29-2023";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
