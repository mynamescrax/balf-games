(() => {
  const canvas = document.getElementById("constellationCanvas");
  if (!canvas) return;

  // Hide default cursor
  canvas.style.cursor = "none";

  const ctx = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;
  let width = 0;
  let height = 0;

  // Resize canvas to full window
  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // ---- Particle setup ----
  const isMobile = window.matchMedia("(max-width: 700px)").matches;

  const STAR_COUNT = isMobile ? 45 : 80;
  const MAX_SPEED = 0.4;
  const MAX_LINE_DIST = isMobile ? 120 : 160;
  const MOUSE_PULL_RADIUS = 180;
  const MOUSE_PULL_STRENGTH = 0.02;

  const stars = [];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createStar() {
    const speedFactor = isMobile ? 0.7 : 1;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: rand(-MAX_SPEED, MAX_SPEED) * speedFactor,
      vy: rand(-MAX_SPEED, MAX_SPEED) * speedFactor,
      radius: rand(1, isMobile ? 1.8 : 2.2),
    };
  }

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(createStar());
  }

  const mouse = {
    x: null,
    y: null,
    active: false,
  };

  function setPointerPosition(clientX, clientY) {
    mouse.x = clientX;
    mouse.y = clientY;
    mouse.active = true;
  }

  function clearPointer() {
    mouse.active = false;
    mouse.x = mouse.y = null;
  }

  // Mouse
  window.addEventListener("mousemove", (e) => {
    setPointerPosition(e.clientX, e.clientY);
  });

  window.addEventListener("mouseleave", clearPointer);

  // Touch
  window.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      if (!t) return;
      setPointerPosition(t.clientX, t.clientY);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (!t) return;
      setPointerPosition(t.clientX, t.clientY);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    () => {
      clearPointer();
    },
    { passive: true }
  );

  // ---- Animation loop ----
  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Update + draw stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      if (mouse.active && mouse.x != null && mouse.y != null) {
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_PULL_RADIUS && dist > 0.001) {
          const strength = (1 - dist / MOUSE_PULL_RADIUS) * MOUSE_PULL_STRENGTH;
          s.vx += (dx / dist) * strength;
          s.vy += (dy / dist) * strength;
        }
      }

      const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const maxSpeed = MAX_SPEED * (isMobile ? 0.9 : 1.1);
      if (speed > maxSpeed) {
        s.vx = (s.vx / speed) * maxSpeed;
        s.vy = (s.vy / speed) * maxSpeed;
      }

      s.x += s.vx;
      s.y += s.vy;

      if (s.x < -20) s.x = width + 20;
      if (s.x > width + 20) s.x = -20;
      if (s.y < -20) s.y = height + 20;
      if (s.y > height + 20) s.y = -20;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();
    }

    // Star-to-star lines
    ctx.lineWidth = 1;

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const s1 = stars[i];
        const s2 = stars[j];

        const dx = s1.x - s2.x;
        const dy = s1.y - s2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_LINE_DIST) {
          const alpha = 1 - dist / MAX_LINE_DIST;
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.stroke();
        }
      }
    }

    // Pointer lines
    if (mouse.active && mouse.x != null && mouse.y != null) {
      const maxPointerDist = MAX_LINE_DIST * 1.2;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxPointerDist) {
          const alpha = 1 - dist / maxPointerDist;
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
        }
      }

      // ---- Draw glowing cursor dot ----
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.shadowColor = "rgba(255,255,255,0.9)";
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Soft purple glow
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(124, 58, 237, 0.2)";
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
