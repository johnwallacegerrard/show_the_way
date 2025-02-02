const mentorModal = document.querySelector("#mentor-modal");
const registrationButton = document.querySelector(".registration__btn");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close-btn");

function openModal(modal) {
  console.log(modal);
  modal.classList.add("modal_open");
  //modal.addEventListener("click", handleOverlay);
}

const closeModal = (modal) => {
  modal.classList.remove("modal_open");
  //modal.removeEventListener("click, handleOverlay");
};

registrationButton.addEventListener("click", () => {
  openModal(mentorModal);
});
modalCloseButton.addEventListener("click", () => {
  closeModal(modal);
});
