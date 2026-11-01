"use client";

import React, { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  color: string;
}

export default function DriftingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Color palette for Japanese red maple leaves
    const leafColors = [
      "rgba(225, 29, 46, 0.75)",
      "rgba(195, 18, 35, 0.8)",
      "rgba(255, 65, 80, 0.65)",
      "rgba(145, 12, 22, 0.85)",
      "rgba(175, 25, 38, 0.7)",
    ];

    const leafCount = Math.min(Math.floor(width / 50), 28);
    const leaves: Leaf[] = [];

    for (let i = 0; i < leafCount; i++) {
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 0.8 + 0.4,
        speedY: Math.random() * 0.9 + 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.35,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.015,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
      });
    }

    const drawMapleLeaf = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate((rotation * Math.PI) / 180);
      context.globalAlpha = opacity;
      context.fillStyle = color;

      // Stylized 5-pointed maple leaf shape
      context.beginPath();
      context.moveTo(0, -size);
      context.lineTo(size * 0.25, -size * 0.4);
      context.lineTo(size * 0.8, -size * 0.5);
      context.lineTo(size * 0.4, -size * 0.05);
      context.lineTo(size * 0.9, size * 0.35);
      context.lineTo(size * 0.25, size * 0.3);
      context.lineTo(0, size * 0.85); // Stem / bottom lobe
      context.lineTo(-size * 0.25, size * 0.3);
      context.lineTo(-size * 0.9, size * 0.35);
      context.lineTo(-size * 0.4, -size * 0.05);
      context.lineTo(-size * 0.8, -size * 0.5);
      context.lineTo(-size * 0.25, -size * 0.4);
      context.closePath();
      context.fill();

      context.restore();
    };

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < leaves.length; i++) {
          const l = leaves[i];
          l.wobble += l.wobbleSpeed;
          l.x += l.speedX + Math.sin(l.wobble) * 0.4;
          l.y += l.speedY;
          l.rotation += l.rotationSpeed;

          // Wrap around screen
          if (l.y > height + 20) {
            l.y = -20;
            l.x = Math.random() * (width * 0.7); // spawn mainly from top-left
          }
          if (l.x > width + 20) {
            l.x = -20;
            l.y = Math.random() * height;
          }

          drawMapleLeaf(ctx, l.x, l.y, l.size, l.rotation, l.color, l.opacity);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
