const form = document.querySelector(".form-04");
const formInputs = form.querySelectorAll(".form-04__input");

function getErrorSpan(inputElem) {
  console.log(inputElem.nextElementSibling);
  return inputElem.nextElementSibling;
}

function showInputError(formElement, inputElement, errorMassage) {
  inputElement.classList.add("form-04__input_type_error");
  let errorSpan = getErrorSpan(inputElement);
  errorSpan.textContent = errorMassage;
  errorSpan.classList.add("form-04__input-error_active");
}

function hideInputError(formElement, inputElement) {
  inputElement.classList.remove("form-04__input_type_error");
  const errorSpan = getErrorSpan(inputElement);
  errorSpan.textContent = "";
  errorSpan.classList.remove("form-04__input-error_active");
}

function isValid(formElement, inputElement) {
  inputElement.validity.valid
    ? hideInputError(formElement, inputElement)
    : showInputError(formElement, inputElement, inputElement.validationMessage);
}

function setEventListeners(formElement) {
  inputList = formElement.querySelectorAll(".form-04__input");
  inputList.forEach((inputElement) => {
    console.log("hello");
    inputElement.forEach((input) => input.addEventListener("input", isValid));
  });
}

function enableValidation() {
  const formList = document.querySelectorAll(".form-04");
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formElement);
  });
}

enableValidation();
