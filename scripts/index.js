const modal = document.querySelector(".modal");
const mentorModal = document.querySelector("#mentor-modal");
const youthModal = document.querySelector("#youth-modal");
const mentorForm = document.querySelector("#mentor-form");
const youthForm = document.querySelector("#youth-form");
const mentorNameInput = document.querySelector("#mentor-full-name");
const mentorAgeInput = document.querySelector("#mentor-age");
const mentorEmailInput = document.querySelector("#mentor-email");
const mentorPhoneInput = document.querySelector("#mentor-phone-number");
const mentorStreetAdressInput = document.querySelector(
  "#mentor-street-address"
);
const mentorZipInput = document.querySelector("#mentor-zip");
const mentorCityInput = document.querySelector("#mentor-city");
const mentorStateInput = document.querySelector("#mentor-state");
const parentNameInput = document.querySelector("#parent-full-name");
const parentEmailInput = document.querySelector("#parent-email");
const parentPhoneInput = document.querySelector("#parent-phone-number");
const parentStreetAdressInput = document.querySelector(
  "#parent-street-address"
);
const parentCityInput = document.querySelector("#parent-city");
const parentStateInput = document.querySelector("#parent-state");
const parentZipInput = document.querySelector("#parent-zip");
const childNameInput = document.querySelector("#child-name");
const childAgeInput = document.querySelector("#child-age");
const childSchoolInput = document.querySelector("#child-school");
const mentorRegistrationButton = document.querySelector("#mentor-registration");
const youthRegistrationButton = document.querySelector("#youth-registration");
const mentorFormSubmitButton = mentorForm.querySelector(".modal__button");
const youthFormSubmitButton = youthForm.querySelector(".modal__button");

const mentorModalCloseButton = mentorModal.querySelector(".modal__close-btn");
const youthModalCloseButton = youthModal.querySelector(".modal__close-btn");

const publicKey = "dvnhytUdown87cm7F";
const serviceID = "service_piwj2vu";
const templateID = "template_xwz047b";
emailjs.init(publicKey);

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

mentorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  mentorFormSubmitButton.innerText = "Just A Moment ...";
  const inputFields = {
    name: mentorNameInput.value,
    age: mentorAgeInput.value,
    email: mentorEmailInput.value,
    phone: mentorPhoneInput.value,
    street: mentorStreetAdressInput.value,
    city: mentorCityInput.value,
    state: mentorStateInput.value,
    zip: mentorZipInput.value,
  };
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      mentorFormSubmitButton.innerText = "Registration Complete!";
      mentorNameInput.value = "";
      mentorAgeInput.value = "";
      mentorEmailInput.value = "";
      mentorPhoneInput.value = "";
      mentorStreetAdressInput.value = "";
      mentorCityInput.value = "";
      mentorStateInput.value = "";
      mentorZipInput.value = "";
    },
    (error) => {
      console.log(error);
      mentorFormSubmitButton.innerText = "Oops, Something Went Wrong";
    }
  );
});
