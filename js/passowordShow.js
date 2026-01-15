// Password show/hide
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("bossifyTogglePassword");
  const input = document.getElementById("bossifyPassword");

  btn?.addEventListener("click", () => {
    const isPassword = input.getAttribute("type") === "password";
    input.setAttribute("type", isPassword ? "text" : "password");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("bfTogglePass1");
  const input1 = document.getElementById("bfSuPass");

  btn1?.addEventListener("click", () => {
    const isPassword = input1.getAttribute("type") === "password";
    input1.setAttribute("type", isPassword ? "text" : "password");
  });

  const btn2 = document.getElementById("bfTogglePass2");
  const input2 = document.getElementById("bfSuPass2");

  btn2?.addEventListener("click", () => {
    const isPassword = input2.getAttribute("type") === "password";
    input2.setAttribute("type", isPassword ? "text" : "password");
  });
});
