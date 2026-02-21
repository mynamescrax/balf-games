// Search page logic with proxy selection (Scramjet default)

const frame = document.querySelector("iframe");
const div = document.querySelector(".center-container");
const input = document.querySelector(".pxyinput");
const proxySelect = document.getElementById("proxysel");

const PROXY_KEY = "proxyEngine";

if (frame) {
  frame.style.display = "none";
}

// Initialise proxy dropdown from localStorage (shared with Settings page)
(function initProxySelect() {
  if (!proxySelect) return;

  let saved = "scramjet";
  try {
    const stored = localStorage.getItem(PROXY_KEY);
    if (stored === "uv" || stored === "scramjet") {
      saved = stored;
    }
  } catch (e) {
    // ignore storage errors
  }

  proxySelect.value = saved;

  proxySelect.addEventListener("change", () => {
    try {
      localStorage.setItem(PROXY_KEY, proxySelect.value);
    } catch (e) {
      console.error("Failed to save proxy setting", e);
    }
  });
})();

function getProxyEngine() {
  // Prefer the dropdown on the page if present
  if (proxySelect && proxySelect.value) {
    return proxySelect.value === "uv" ? "uv" : "scramjet";
  }

  // Fallback to saved setting
  try {
    const stored = localStorage.getItem(PROXY_KEY);
    if (stored === "uv" || stored === "scramjet") {
      return stored;
    }
  } catch (e) {
    // ignore
  }

  // Scramjet is the default
  return "scramjet";
}

// Build a real URL or a Google search URL from user input
function search(input) {
  const template = "https://www.google.com/search?q=%s";

  try {
    // Valid URL as typed
    return new URL(input).toString();
  } catch (err) {}

  try {
    // Valid once http:// is added
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {}

  // Treat it as a search query
  return template.replace("%s", encodeURIComponent(input));
}

// Run the proxy for the given input and load into iframe
function runProxiedSearch(rawInput) {
  if (!frame || !div) return;
  if (!rawInput || !rawInput.trim()) return;

  const fixedUrl = search(rawInput.trim());
  const engine = getProxyEngine();

  let proxiedUrl = fixedUrl;

  try {
    if (engine === "uv") {
      // Ultraviolet
      if (typeof __uv$config !== "undefined") {
        proxiedUrl = __uv$config.prefix + __uv$config.encodeUrl(fixedUrl);
      }
    } else {
      // Scramjet (default)
      if (typeof scramjet !== "undefined" && scramjet.encodeUrl) {
        proxiedUrl = scramjet.encodeUrl(fixedUrl);
      }
    }

    // If chosen engine not available, try the other one
    if (proxiedUrl === fixedUrl) {
      if (engine === "uv" && typeof scramjet !== "undefined" && scramjet.encodeUrl) {
        proxiedUrl = scramjet.encodeUrl(fixedUrl);
      } else if (engine !== "uv" && typeof __uv$config !== "undefined") {
        proxiedUrl = __uv$config.prefix + __uv$config.encodeUrl(fixedUrl);
      }
    }
  } catch (e) {
    console.error("Proxy selection failed, falling back to direct URL:", e);
    proxiedUrl = fixedUrl;
  }

  div.style.display = "none";
  frame.style.display = "block";
  frame.src = proxiedUrl;
}

// Handle Enter key on the input
if (input) {
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      runProxiedSearch(input.value);
    }
  });
}

// Support /search.html?q=... format
try {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  if (q && input) {
    input.value = q;
    // Optionally auto-search:
    // runProxiedSearch(q);
  }
} catch (e) {
  console.error("Failed to parse search params:", e);
}
