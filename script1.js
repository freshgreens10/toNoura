const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    // Redirect to "timer.html" when the popup is clicked
    window.location.href = "timer.html";
});


// Hide the popup initially
popup.style.display = "none";