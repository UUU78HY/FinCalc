const fabBtn = document.getElementById("fabBtn");
const fabContainer = document.querySelector(".fab-container");

fabBtn.addEventListener("click", () => {
    fabContainer.classList.toggle("active");
});