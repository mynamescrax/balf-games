/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  console.log("Starting registration...");

  // 🚫 DO NOT register service workers inside iframes
  if (window.self !== window.top) {
    console.log("Service worker disabled (iframe)");
    return;
  }

  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    throw new Error("Service workers cannot be registered without https.");
  }

  if (!("serviceWorker" in navigator)) {
    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register("sw.js", {
    scope: __uv$config.prefix,
  });
}

registerSW();