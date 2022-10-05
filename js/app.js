const dateSetter = document.querySelector("input");
const items = document.querySelectorAll(".item");
const setBtn = document.querySelector(".set");
const cleanBtn = document.querySelector(".clean");

dateSetter.addEventListener("input", () => {
  const firstNum = dateSetter.value[8];
  const secondNum = dateSetter.value[9];
  const totalNum = firstNum + secondNum;

  items.forEach((el) => {
    if (el.innerText < 10) {
      el.setAttribute("number", 0 + el.innerText);
    } else {
      el.setAttribute("number", el.innerText);
    }
  });

  setBtn.addEventListener("click", () => {
    items.forEach((el) => {
      if (totalNum == el.getAttribute("number")) {
        el.classList.add("active");
      }
    });
  });
  cleanBtn.addEventListener("click", () => {
    items.forEach((el) => {
      el.classList.remove("active");
    });
  });
});
