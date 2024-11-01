const bookBtn = document.querySelector(".btn");
const modelBg = document.querySelector(".model-bg");
const close = document.querySelector(".close");


bookBtn.addEventListener("click", function (e) {
  modelBg.classList.add("bg-active");
  e.preventDefault();
});

close.addEventListener("click", (e) => {
  modelBg.classList.remove("bg-active");
  e.preventDefault();
});
