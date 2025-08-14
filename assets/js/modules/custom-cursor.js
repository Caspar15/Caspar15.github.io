document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Create cursor elements
    const cursorContainer = document.createElement('div');
    cursorContainer.className = 'custom-cursor';

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';

    const circle = document.createElement('div');
    circle.className = 'cursor-circle';

    cursorContainer.appendChild(dot);
    cursorContainer.appendChild(circle);
    body.appendChild(cursorContainer);

    let dotX = 0, dotY = 0;
    let circleX = 0, circleY = 0;
    let hasMoved = false; // Flag to track the first mouse move

    // Mouse move listener
    window.addEventListener('mousemove', (e) => {
        if (!hasMoved) {
            // On the first move, snap the cursor to the position and fade it in
            cursorContainer.style.opacity = 1;
            circleX = e.clientX;
            circleY = e.clientY;
            hasMoved = true;
        }

        dotX = e.clientX;
        dotY = e.clientY;

        // The dot follows the cursor instantly
        dot.style.transform = `translate(${dotX - 3.5}px, ${dotY - 3.5}px)`;
    });

    // Animation loop for the trailing circle
    const animateCircle = () => {
        let dx = dotX - circleX;
        let dy = dotY - circleY;

        circleX += dx * 0.25; // Adjusted speed for a smooth but responsive feel
        circleY += dy * 0.25;

        // The circle has a trailing effect
        circle.style.transform = `translate(${circleX - 15}px, ${circleY - 15}px)`;

        requestAnimationFrame(animateCircle);
    };

    animateCircle();

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [onclick], .interactive');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorContainer.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => {
            cursorContainer.classList.remove('grow');
        });
    });
});
