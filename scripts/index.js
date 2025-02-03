const mentorModal = document.querySelector("#mentor-modal");
const youthModal = document.querySelector("#youth-modal");
const mentorRegistrationButton = document.querySelector("#mentor-registration");
const youthRegistrationButton = document.querySelector("#youth-registration");
const modal = document.querySelector(".modal");
const mentorModalCloseButton = mentorModal.querySelector(".modal__close-btn");
const youthModalCloseButton = youthModal.querySelector(".modal__close-btn");

function openModal(modal) {
  console.log(modal);
  modal.classList.add("modal_open");
  //modal.addEventListener("click", handleOverlay);
}

const closeModal = (modal) => {
  modal.classList.remove("modal_open");
  //modal.removeEventListener("click, handleOverlay");
};

mentorRegistrationButton.addEventListener("click", () => {
  openModal(mentorModal);
});

youthRegistrationButton.addEventListener("click", () => {
  openModal(youthModal);
});

mentorModalCloseButton.addEventListener("click", () => {
  closeModal(mentorModal);
});

youthModalCloseButton.addEventListener("click", () => {
  closeModal(youthModal);
});
