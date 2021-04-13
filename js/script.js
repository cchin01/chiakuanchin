//TO TOP BUTTON

toTopbutton = document.getElementById("toTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    toTopbutton.style.display = "block";
  } else {
    toTopbutton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 複製function，創造textarea複製後刪除，須注意select只能針對textarea

function copyLink(text) {
  let textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert(`已成功複製信箱地址`);
}
