document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("hidden");
  }, 2000); // 2 seconds
});
