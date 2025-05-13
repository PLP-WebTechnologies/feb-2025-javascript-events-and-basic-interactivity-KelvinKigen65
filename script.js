
document.getElementById("myButton").addEventListener("click", () => {
    alert("Button clicked!");
});

document.getElementById("hoverElement").addEventListener("mouseover", () => {
    document.getElementById("hoverElement").style.backgroundColor = "blue";
});

document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

document.getElementById("changeTextButton").addEventListener("click", () => {
    const btn = document.getElementById("changeTextButton");
    btn.textContent = "Clicked!";
    btn.style.backgroundColor = "green";
});

document.getElementById("nextImage").addEventListener("click", () => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentImage = (parseInt(localStorage.getItem("currentImage")) || 0) + 1;
    currentImage = currentImage % images.length;
    localStorage.setItem("currentImage", currentImage);
    document.getElementById("galleryImage").src = images[currentImage];
});

document.getElementById("email").addEventListener("input", (event) => {
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    event.target.style.border = emailPattern.test(event.target.value) ? "2px solid green" : "2px solid red";
});

document.getElementById("password").addEventListener("input", (event) => {
    document.getElementById("passwordHint").textContent = event.target.value.length < 8 ? "Password must be at least 8 characters" : "";
});
