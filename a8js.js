const canvas = document.getElementById('animationCanvas');
const draw = canvas.getContext('2d');
const resetButton = document.getElementById('resetButton');

let x = 50, y = 50;
let speed= 7, angle = 3;
const size = 30;
let particles = [];
let exploded = false;

function drawObject() {
    draw.clearRect(0, 0, canvas.width, canvas.height);
    if (!exploded) {
        draw.fillStyle = 'purple';
        draw.fillRect(x, y, size, size);
    } else {
        particles.forEach(particle => {
            draw.fillStyle = particle.color;
            draw.fillRect(particle.x, particle.y, particle.size, particle.size);
        });
    }
}

function update() {
    if (!exploded) {
        if (x + size > canvas.width || x < 0) speed = -speed;
        if (y + size > canvas.height || y < 0) angle = -angle;
    
        x += speed;
        y += angle;
    } else {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; 
        });
    }

    drawObject();
    requestAnimationFrame(update);
}

canvas.addEventListener('click', () => {
    if (!exploded) {
        explode();
    }
});

resetButton.addEventListener('click', reset);

function explode() {
    exploded = true;
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: x + size / 2,
            y: y + size / 2,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            size: 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
}

function reset() {
    x = 50;
    y = 50;
    speed = 7;
    angle = 3;
    particles = [];
    exploded = false;
}

update();
