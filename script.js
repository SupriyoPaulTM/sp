function navToggle() {
  const element = document.getElementById("nav");
  const isHidden = window.getComputedStyle(element).display === "none";
  element.style.display = isHidden ? "block" : "none";
}