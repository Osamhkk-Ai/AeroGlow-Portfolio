import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    const starCount = 250; // عدد النجوم

    // إعداد الحجم
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // إنشاء النجوم
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: 0.2 + Math.random() * 0.4,
      });
    }

    const drawStars = () => {
      const isDark = document.body.classList.contains("dark");
      const bgColor = isDark
        ? "rgba(5,10,30,0.8)" // خلفية ليلية غامقة
        : "rgba(230,240,255,0.9)"; // خلفية نهارية فاتحة
      const starColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.3)";

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = starColor;
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // تحريك النجوم ببطء
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        pointerEvents: "none",
        transition: "background 0.8s ease-in-out",
      }}
    />
  );
}
