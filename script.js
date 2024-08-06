

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Constants for localStorage values
const DARK_MODE_ENABLED = 'enabled';
const DARK_MODE_DISABLED = 'disabled';

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Constants for localStorage values
    const DARK_MODE_ENABLED = 'enabled';
    const DARK_MODE_DISABLED = 'disabled';

    // Check system preference for dark mode
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check and apply dark mode based on localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === DARK_MODE_ENABLED || (isDarkMode === null && prefersDarkScheme)) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', DARK_MODE_ENABLED);
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', DARK_MODE_DISABLED);
        }
    });
});
