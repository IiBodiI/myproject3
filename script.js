document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    let position = 0;
    const direction = 1;

    function animateTitle() {
        position += direction;
        title.style.transform = `translateY(${Math.sin(position / 10) * 10}px)`;
        requestAnimationFrame(animateTitle);
    }

    animateTitle();
});
