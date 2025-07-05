import React, { useRef, useEffect } from "react";

function MatrixCanvas({ className = "", color = "#00FF41" }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const chars = "01";

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + "px monospace";
      ctx.fillStyle = color;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [color]);
  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export function EvervaultCard({ text }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="relative w-[28rem] h-56 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-zinc-900 dark:to-zinc-800 rounded-xl shadow-lg flex flex-col group overflow-hidden transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Matrix effect fills the card, with matching rounded corners */}
      <div className="absolute inset-0 pointer-events-none z-0 rounded-xl overflow-hidden bg-black">
        <MatrixCanvas color={hovered ? "#FF2222" : "#00FF41"} />
      </div>
      <div className="relative flex-1 flex items-center justify-center w-full z-10">
        <span className="text-4xl font-bold text-gray-800 dark:text-white w-full text-center select-none" style={{letterSpacing: '0.1em'}}>
          {hovered ? "ASHISH" : "DEVELOPER"}
        </span>
      </div>
    </div>
  );
}

export function Icon({ className = "" }) {
  // Simple lock icon
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="10" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 10V7a3 3 0 1 1 6 0v3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function EvervaultCardDemo() {
  return (
    <div
      className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-3xl mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <EvervaultCard />
      {/* Centered hello text in the empty area below the card */}
      <div className="flex-1 flex items-center justify-center w-full">
        <span className="text-xl text-white opacity-40" style={{ fontFamily: "Georgia, serif" }}>Hover over the matrix</span>
      </div>
    </div>
  );
} 