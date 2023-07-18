
const buttonOne = document.querySelector(".buttonone");
const buttonTwo = document.querySelector(".buttontwo");


function redirectToURL(url) {
  window.location.href = url;
}

buttonOne.addEventListener("click", function() {
  redirectToURL("https://forms.gle/jA1nVjAmTDXkNQwE7");
});

buttonTwo.addEventListener("click", function() {
  redirectToURL("https://forms.gle/PfyBxG7d87rbjDKn8");
});
