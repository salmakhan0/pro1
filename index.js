let images = [
];
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img = document.querySelector(".slide-img");
let count = 0;
prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
});
next.addEventListener("click", () => {
  count++;
  if (count > images.length - 1) {
    count = 0;
    img.src = images[count];
  } else {
    img.src = images[count];
  }
});