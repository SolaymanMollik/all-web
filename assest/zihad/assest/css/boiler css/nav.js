console.clear();

const navigation = document.getElementById("navigation");

let count = 0;

const nav = () => {
  count == 1 ? (count = 0) : count++;
  count == 0
    ? (navigation.style.display = "none")
    : (navigation.style.display = "block");
};

let home = document.getElementById("home");
let about = document.getElementById("about");
let story = document.getElementById("story");
let familly = document.getElementById("familly");
let contact = document.getElementById("contact");

about.addEventListener("click", () => {
  window.scrollTo(0, 500);
});
contact.addEventListener("click", () => {
  window.scrollTo(0, 1000);
});
home.addEventListener("click", () => {
  window.scrollTo(0, 10);
});

// go top btn
let goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
  window.scrollY > 300
    ? (goTopBtn.style.display = "grid")
    : (goTopBtn.style.display = "none");
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
