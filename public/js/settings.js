// ==============================
// THEME SYSTEM
// ==============================

const defaultTheme = "main";
// Only themes that actually exist in themes.css:
const allowedThemes = ["main"];

function setTheme(theme) {
    const safeTheme = allowedThemes.includes(theme) ? theme : defaultTheme;
    document.body.setAttribute("theme", safeTheme);
    try {
        localStorage.setItem("theme", safeTheme);
    } catch (e) {
        // localStorage might be disabled; ignore
    }
}

function onThemeChange() {
    const themeSelect = document.querySelector("#theme-select");
    if (!themeSelect) return;
    setTheme(themeSelect.value);
}

// Apply theme immediately on page load
(function initTheme() {
    let savedTheme = defaultTheme;
    try {
        savedTheme = localStorage.getItem("theme") || defaultTheme;
    } catch (e) {
        savedTheme = defaultTheme;
    }

    // If the saved value is from an old theme ("light", "dark", etc.),
    // fall back to the current default.
    if (!allowedThemes.includes(savedTheme)) {
        savedTheme = defaultTheme;
        try {
            localStorage.setItem("theme", savedTheme);
        } catch (e) {}
    }

    document.body.setAttribute("theme", savedTheme);

    const themeSelect = document.querySelector("#theme-select");
    if (themeSelect) {
        // Makes sure the dropdown matches the actual theme
        themeSelect.value = savedTheme;
    }
})();

// ==============================
// PROXY SETTING
// ==============================

const PROXY_KEY = "proxyEngine";

function initProxySetting() {
    const select = document.getElementById("proxy-select");
    if (!select) return;

    let saved = "scramjet";
    try {
        saved = localStorage.getItem(PROXY_KEY) || "scramjet";
    } catch (e) {
        saved = "scramjet";
    }

    // Only allow the two known values
    if (saved !== "uv" && saved !== "scramjet") {
        saved = "scramjet";
    }

    select.value = saved;

    select.addEventListener("change", () => {
        try {
            localStorage.setItem(PROXY_KEY, select.value);
        } catch (e) {
            // ignore
        }
    });
}

document.addEventListener("DOMContentLoaded", initProxySetting);
