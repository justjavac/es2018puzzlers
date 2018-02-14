const total = document.querySelector(".total");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");

total.innerHTML = document.querySelectorAll("li").length;

document.addEventListener(
  "click",
  function(e) {
    if (e.target.tagName !== "BUTTON") {
      return;
    }

    if (e.target.parentNode.querySelectorAll(".clicked").length !== 0) {
      return;
    }

    let el = e.target;

    el.classList.add("clicked");

    if (el.classList.contains("ok")) {
      right.innerHTML = +right.innerHTML + 1;
    } else {
      el.classList.add("no");
      el.parentNode.querySelector(".ok").classList.add("clicked");
      wrong.innerHTML = +wrong.innerHTML + 1;
    }

    [...el.parentNode.querySelectorAll(".btn")].forEach(function(x) {
      x.classList.add("disabled");
    });

    el.parentNode.parentNode.querySelector(".answer").style.display = "block";
  },
  false
);
