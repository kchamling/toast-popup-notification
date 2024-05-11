const showToastBtn = document.querySelector(".container button");
const inputBox = document.querySelector(".input-box input");
const toastType = document.querySelector(".toast-type select");
const verticalPosition = document.querySelector(".vertical-position select");
const horizontalPosition = document.querySelector(
  ".horizontal-position select"
);
const duration = document.querySelector(".duration input");

const toastContainer = document.querySelector(".toast-container");

showToastBtn.addEventListener("click", () => {
  const newToast = document.createElement("div");
  newToast.classList.add("toast");

  if (toastType.value === "success") {
    newToast.classList.add("success");
    newToast.innerHTML = ` <i class="fa-solid fa-check"></i>  Successfully submitted `;
  } else if (toastType.value === "error") {
    newToast.classList.add("error");

    newToast.innerHTML = `<i class="fa-solid fa-xmark"></i> Please fix the error!  `;
  } else if (toastType.value === "invalid") {
    newToast.classList.add("invalid");

    newToast.innerHTML = `<i class="fa-solid fa-exclamation"></i> Invalid input check again!  `;
  }

  if (verticalPosition.value === "Bottom") {
    toastContainer.classList.add("bottom");
  } else {
    toastContainer.classList.remove("bottom");
  }

  if (horizontalPosition.value === "Right") {
    toastContainer.classList.add("right");
  } else {
    toastContainer.classList.remove("right");
  }

  toastContainer.append(newToast);

  const timerId = setTimeout(() => {
    newToast.remove();
  }, parseInt(duration.value) * 1000);
});
