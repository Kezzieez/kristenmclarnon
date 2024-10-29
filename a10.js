console.log("Script loaded");

const images = ["flower.webp", "ellie.webp", "asher.webp"];
let index = 0;

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", changeImage);
nextButton.addEventListener("touchend", function(e) {
    e.preventDefault();
    changeImage();
});

function changeImage() {
    index = (index + 1) % images.length;
    updateImage();
}

function updateImage() {
    const img = document.getElementById("images");
    img.src = images[index];
    img.alt = images[index].split('.')[0];
}

updateImage();
