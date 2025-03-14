// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');
    const imageSources = [
        'https://placekitten.com/200/300',
        'https://placekitten.com/400/250',
        'https://placekitten.com/300/350',
        'https://placekitten.com/250/200',
        'https://placekitten.com/350/400',
        'https://placekitten.com/450/300',
        'https://placekitten.com/300/200',
        'https://placekitten.com/200/400',
    ];

    const numberOfImages = 20;
    const imagePositions = []; // Store image positions

    // Generate random positions and sizes only once
    for (let i = 0; i < numberOfImages; i++) {
        const randomWidth = Math.floor(Math.random() * 200) + 50;
        const randomHeight = Math.floor(Math.random() * 200) + 50;
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);

        imagePositions.push({
            width: randomWidth,
            height: randomHeight,
            x: randomX,
            y: randomY,
        });
    }

    // Use the stored positions to create images
    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
        img.classList.add('random-image');

        img.style.width = `${imagePositions[i].width}px`;
        img.style.height = `${imagePositions[i].height}px`;
        img.style.left = `${imagePositions[i].x}px`;
        img.style.top = `${imagePositions[i].y}px`;

        container.appendChild(img);
    }
});
