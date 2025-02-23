// JavaScript for adding cool effects and redirection
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.boxShadow = '0 0 15px #FF0000'; /* Red glow effect */
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });

        // Add click event for redirection
        button.addEventListener('click', () => {
            if (button.id === 'fpredictButton') {
                window.location.href = 'freepredict.html'; // Redirect to free predict page
            } else if (button.id === 'vippredictButton') {
                window.location.href = 'vippredict.html'; // Redirect to VIP predict page
            }
        });
    });
});
