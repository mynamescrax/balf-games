// Any scripts that need to be preloaded in advance, like ads or analytics

// 🔒 If running inside an iframe, skip service worker logic entirely
const isIframe = window.self !== window.top;

// Debug tools
if (/debug/.test(window.location)) {
  console.log('Debug mode enabled');
  const eruda = document.createElement('script');
  eruda.src = 'https://cdn.jsdelivr.net/npm/eruda';
  document.head.append(eruda);

  eruda.onload = () => {
    eruda.init();
  };
}

// UV Service Worker
const swAllowedHostnames = ['localhost', '127.0.0.1'];

async function registerSW() {
  if (isIframe) {
    console.log('Iframe detected — skipping service worker');
    return;
  }

  console.log('Starting registration...');

  if (
    location.protocol !== 'https:' &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    console.warn('Service worker skipped (not https)');
    return;
  }

  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers not supported');
    return;
  }

  try {
    await navigator.serviceWorker.register('sw.js', {
      scope: __uv$config.prefix
    });
    console.log('Service worker registered');
  } catch (err) {
    console.warn('Service worker registration failed', err);
  }
}

registerSW();

// Font Awesome
const fa = document.createElement('link');
fa.href =
  'https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css';
fa.rel = 'stylesheet';
fa.type = 'text/css';
document.head.appendChild(fa);

// CSS Scripts
const hover = document.createElement('link');
hover.href =
  'https://cdn.jsdelivr.net/gh/ianlunn/hover/css/hover-min.css';
hover.rel = 'stylesheet';
document.head.appendChild(hover);

// Google Analytics
const googleAnalytics = document.createElement('script');
googleAnalytics.src =
  'https://www.googletagmanager.com/gtag/js?id=G-66ZE075DLD';
googleAnalytics.async = true;
document.head.appendChild(googleAnalytics);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-66ZE075DLD');
