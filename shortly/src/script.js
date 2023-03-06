const mobileMenu = document.getElementById("mobile-menu");

const debounce = (fn, delay) => {
  let timeOutId;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document
  .querySelector("#hamburger")
  .addEventListener("click", debounce(openMenu, 200));

function openMenu(e) {
  mobileMenu.classList.toggle("close");
}
