const switches = document.querySelectorAll("label > input");

const fast = document.querySelector("#fast");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");

switches.forEach((s) => {
  s.addEventListener("change", (e) => {
    if (fast.checked && good.checked && e.target.id != "cheap") {
      cheap.checked = false;
    }
    if (cheap.checked && fast.checked) {
      good.checked = false;
    }
    if (cheap.checked && good.checked) {
      fast.checked = false;
    }
  });
});
