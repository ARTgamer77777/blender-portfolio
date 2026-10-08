const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const dialog = document.querySelector(".scene-dialog");
const dialogImage = document.querySelector(".dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector(".dialog-description");
const closeButton = document.querySelector(".dialog-close");

document.querySelectorAll(".project-image").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.querySelector("img").alt;
    dialogTitle.textContent = button.dataset.title;
    dialogDescription.textContent = button.dataset.description;
    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
