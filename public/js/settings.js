// ==============================
// THEME SYSTEM
// ==============================

const defaultTheme = "main";

function setTheme(theme) {
    document.body.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
}

function onThemeChange() {
    const themeSelect = document.querySelector("#theme-select");
    if (!themeSelect) return;
    setTheme(themeSelect.value);
}

// Apply theme immediately on page load
(function initTheme() {
    const savedTheme = localStorage.getItem("theme") || defaultTheme;
    document.body.setAttribute("theme", savedTheme);

    const themeSelect = document.querySelector("#theme-select");
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
})();
