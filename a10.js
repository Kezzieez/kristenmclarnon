const images = ["flower.webp", "ellie.webp", "asher.webp"];
let index = 0;

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("images").src = images[index];
});
