document.addEventListener('DOMContentLoaded', function() {

    let bc = document.getElementById('color-box');
    let cb = document.getElementById('change-color-btn');

    function RC() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    cb.addEventListener('click', function() {
        bc.style.backgroundColor = RC();
    });
});
