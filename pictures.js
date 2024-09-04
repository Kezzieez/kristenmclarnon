const images = ["flower.jpg", "ellie.jpg", "asher.jpg"];
let index = 0;

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("images").src = images[index];
});
