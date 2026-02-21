const params = new URLSearchParams(window.location.search);

function setFrameForItem(item, frame) {
    if (!item || !frame) return;

    // Prefer local HTML if present, otherwise external URL
    const hasHtml = !!item.html;
    const hasUrl = !!item.url;

    // 🔹 If noProxy is set, ALWAYS load directly (no UV)
    if (item.noProxy) {
        if (hasHtml) {
            frame.src = item.html;
        } else if (hasUrl) {
            frame.src = item.url;
        } else {
            console.error("Item has no html or url:", item.id);
        }
        return;
    }

    // 🔹 Default behavior:
    // - Local html: load directly
    // - Remote url: go through UV proxy
    if (hasHtml) {
        frame.src = item.html; // local file, no proxy
    } else if (hasUrl) {
        frame.src = __uv$config.prefix + __uv$config.encodeUrl(item.url); // proxy
    } else {
        console.error("Item has no html or url:", item.id);
    }
}

if (params.get("game")) {
    games.forEach(async game => {
        if (game.id != params.get("game")) return;

        document.title = `${game.title} | Balf Games`;
        document.querySelector("#gameImage").src = game.image;
        document.querySelector("#gameTitle").innerHTML = game.title;
        if (game.description) {
            document.querySelector("#gameDescription").innerHTML = game.description;
        }

        const frame = document.querySelector("#frame");
        setFrameForItem(game, frame);
    });
} else if (params.get("app")) {

    apps.forEach(app => {
        if (app.id != params.get("app")) return;

        document.title = `${app.title} | Balf Games`;
        document.querySelector("#gameImage").src = app.image;
        document.querySelector("#gameTitle").innerHTML = app.title;
        if (app.description) {
            document.querySelector("#gameDescription").innerHTML = app.description;
        }

        const frame = document.querySelector("#frame");
        setFrameForItem(app, frame);
    });
}

if (!getObj("favoritedGames")) setObj("favoritedGames", []);
if (!getObj("favoritedApps")) setObj("favoritedApps", []);

var favoritedButton = document.querySelector(".favorited");
var favoritedGames = getObj("favoritedGames");
var favoritedApps = getObj("favoritedApps");

var game = params.get("game");
var app = params.get("app");

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far");
    favoritedButton.classList.add("fas");
}

function favorite() {
    if (game) {
        var index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas");
            favoritedButton.classList.add("far");
        } else {
            favoritedGames.push(game);
            favoritedButton.classList.remove("far");
            favoritedButton.classList.add("fas");
        }
        setObj("favoritedGames", favoritedGames);
    } else if (app) {
        var index = favoritedApps.indexOf(app);
        if (index !== -1) {
            favoritedApps.splice(index, 1);
            favoritedButton.classList.remove("fas");
            favoritedButton.classList.add("far");
        } else {
            favoritedApps.push(app);
            favoritedButton.classList.remove("far");
            favoritedButton.classList.add("fas");
        }
        setObj("favoritedApps", favoritedApps);
    }
}