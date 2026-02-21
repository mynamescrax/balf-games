// ==============================
// THEME SYSTEM
// ==============================

const defaultTheme = "main";

function setTheme(theme) {
    // Apply theme to the root <html> element
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
}

// Called by the <select> onchange in settings.html
function onThemeChange() {
    const themeSelect = document.querySelector("#theme-select");
    if (!themeSelect) return;
    setTheme(themeSelect.value);
}

// Initialize theme as early as possible
(function initTheme() {
    const savedTheme = localStorage.getItem("theme") || defaultTheme;
    document.documentElement.setAttribute("theme", savedTheme);

    // Sync dropdown if it exists (only on settings page)
    const themeSelect = document.querySelector("#theme-select");
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
})();

// ==============================
// TAB / PANIC SETTINGS (unchanged)
// ==============================

function setTab(
    name = document.querySelector('#tabname').value,
    icon = document.querySelector("#tabicon").value
) {
    localStorage.setItem("tabName", name);
    localStorage.setItem("tabIcon", icon);

    document.title = name;
    document.querySelector("link[rel='shortcut icon']").href = icon;

    if (localStorage.getItem("tabName")) {
        document.querySelector("#tabname").value = localStorage.getItem("tabName");
    }
    if (localStorage.getItem("tabIcon")) {
        document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
    }
}

var tabPresets = {
    google: {
        name: 'Google',
        icon: 'https://www.google.com/favicon.ico'
    },
    drive: {
        name: 'My Drive - Google Drive',
        icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
    },
    docs: {
        name: 'Google Docs',
        icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'
    },
    classroom: {
        name: 'Home',
        icon: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png'
    },
    default: {
        name: 'Balf Games',
        icon: '/assets/images/icon.png'
    }
};

function setTabPreset(tab) {
    setTab(tabPresets[tab].name, tabPresets[tab].icon);
}

// Restore saved values into inputs
if (localStorage.getItem("tabName")) {
    document.querySelector("#tabname").value = localStorage.getItem("tabName");
}
if (localStorage.getItem("tabIcon")) {
    document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
}

if (localStorage.getItem("panickey")) {
    document.querySelector("#panickey").value = localStorage.getItem("panickey");
}
if (localStorage.getItem("panicurl")) {
    document.querySelector("#panicurl").value = localStorage.getItem("panicurl");
}

var detecting = false;
function detectPanic() {
    var key = document.querySelector("#panickey");
    var button = document.querySelector("#panickeybtn");
    button.disabled = true;
    button.innerHTML = "Press any key...";

    detecting = true;
    document.addEventListener("keydown", detectPanicHandler);

    function detectPanicHandler(e) {
        key.value = e.key;
        localStorage.setItem("panickey", e.key);
        button.innerHTML = "Auto-detect panic key";
        button.disabled = false;
        detecting = false;

        document.removeEventListener("keydown", detectPanicHandler);
    }
}

function setPanicKey() {
    var key = document.querySelector("#panickey");
    localStorage.setItem("panickey", key.value);
}

function setPanicUrl() {
    var url = document.querySelector("#panicurl");
    localStorage.setItem("panicurl", url.value);
}
