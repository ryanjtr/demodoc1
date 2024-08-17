// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');

    console.log('JavaScript Loaded');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = 'Dark Mode';
    } else {
        document.body.classList.add('light-mode');
        themeToggle.checked = false;
        themeLabel.textContent = 'Light Mode';
    }

    themeToggle.addEventListener('change', () => {
        console.log('Theme Toggle Changed');
        if (themeToggle.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeLabel.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeLabel.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
