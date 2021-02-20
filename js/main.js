
const btn = document.querySelector(".nav-btn");
const links = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav-toggle");
});
links.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("nav-toggle");
  })
);

const work = document.querySelectorAll(".work-desc");
const img = document.querySelectorAll(".work");

function removeActiveClass() {
  work.forEach((w) => w.classList.remove("active"));
}

img.forEach((e, i) =>
  e.addEventListener("click", () => {
    removeActiveClass();
    work[i].classList.add("active");
  })
);
