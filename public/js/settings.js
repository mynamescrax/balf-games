// ==============================
// THEME SYSTEM
// ==============================

const defaultTheme = "main";
// Only themes that actually exist in themes.css:
const allowedThemes = ["main"];

function setTheme(theme) {
    const safeTheme = allowedThemes.includes(theme) ? theme : defaultTheme;
    document.body.setAttribute("theme", safeTheme);
    localStorage.setItem("theme", safeTheme);
}

function onThemeChange() {
    const themeSelect = document.querySelector("#theme-select");
    if (!themeSelect) return;
    setTheme(themeSelect.value);
}

// Apply theme immediately on page load
(function initTheme() {
    let savedTheme = localStorage.getItem("theme") || defaultTheme;

    // If the saved value is from an old theme ("light", "dark", etc.),
    // fall back to the current default.
    if (!allowedThemes.includes(savedTheme)) {
        savedTheme = defaultTheme;
        localStorage.setItem("theme", savedTheme);
    }

    document.body.setAttribute("theme", savedTheme);

    const themeSelect = document.querySelector("#theme-select");
    if (themeSelect) {
        // Makes sure the dropdown matches the actual theme
        themeSelect.value = savedTheme;
    }
})();
