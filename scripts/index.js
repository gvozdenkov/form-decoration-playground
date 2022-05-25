const form = document.querySelector(".form-04");
const formInputs = form.querySelectorAll(".form-04__input");

function getErrorSpan(inputElem) {
  console.log(inputElem.nextElementSibling);
  return inputElem.nextElementSibling;
}

function showInputError(element, errorMassage) {
  element.classList.add("form-04__input_type_error");
  let errorSpan = getErrorSpan(element);
  errorSpan.textContent = errorMassage;
  errorSpan.classList.add("form-04__input-error_active");
}

function hideInputError(element) {
  element.classList.remove("form-04__input_type_error");
  const errorSpan = getErrorSpan(element);
  errorSpan.textContent = "";
  errorSpan.classList.remove("form-04__input-error_active");
}

function isValid(evt) {
  const inputElem = evt.target;
  inputElem.validity.valid
    ? hideInputError(inputElem)
    : showInputError(inputElem, inputElem.validationMessage);
}

formInputs.forEach((input) => input.addEventListener("input", isValid));

form.addEventListener("submit", (evt) => {
  console.log(`hello from ${evt.target.name}`);
  evt.preventDefault();
});
