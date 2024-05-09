const toastBox = document.querySelector("#toast-box");
const successBtn = document.querySelector(".buttons .success");
const errorBtn = document.querySelector(".buttons .error");
const invalidBtn = document.querySelector(".buttons .invalid");

const successMsg = ` Successfully submitted`;
const errorMsg = " Please fix the error! ";
const invalidMsg = "Invalid input, check again";

function showToast(msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = msg;
  toastBox.append(toast);
}

successBtn.addEventListener("click", () => {
  showToast(successMsg);
});
errorBtn.addEventListener("click", () => {
  showToast(errorMsg);
});
invalidBtn.addEventListener("click", () => {
  showToast(invalidMsg);
});
