const menu = document.querySelector(".nav_targer");
const nav = document.querySelector("#menu");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
