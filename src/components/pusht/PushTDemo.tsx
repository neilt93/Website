"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { renderFrame } from "./pusht-renderer";
import { FRAME_COUNT, GOAL_POSE, TRAJECTORY } from "./pusht-trajectory";

const FPS = 10;
const INTERVAL = 1000 / FPS;

export default function PushTDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [frameIdx, setFrameIdx] = useState(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    renderFrame(ctx, TRAJECTORY[idx], GOAL_POSE, canvas.width, canvas.height);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!playing) return;

    const tick = (time: number) => {
      if (time - lastTimeRef.current >= INTERVAL) {
        lastTimeRef.current = time;
        setFrameIdx((prev) => {
          const next = (prev + 1) % FRAME_COUNT;
          draw(next);
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, draw]);

  // Draw current frame when scrubbing or on mount
  useEffect(() => {
    draw(frameIdx);
  }, [draw, frameIdx]);

  // Resize canvas to match container, respecting devicePixelRatio
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const observer = new ResizeObserver(() => {
      const rect = container.getBoundingClientRect();
      const size = Math.min(rect.width, 512);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frameIdx);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [draw, frameIdx]);

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Number(e.target.value);
    setFrameIdx(idx);
    setPlaying(false);
    draw(idx);
  };

  return (
    <figure className="not-prose my-8">
      <div ref={containerRef} className="mx-auto max-w-[512px]">
        <canvas
          ref={canvasRef}
          className="w-full rounded-md border border-slate-200"
        />
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            min={0}
            max={FRAME_COUNT - 1}
            value={frameIdx}
            onChange={handleScrub}
            className="flex-1"
          />
          <span className="text-xs tabular-nums text-slate-500">
            {frameIdx + 1}/{FRAME_COUNT}
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-sm text-slate-500">
        Interactive replay of a PushT episode. The blue circle (agent) pushes
        the grey T-block into the green target zone.
      </figcaption>
    </figure>
  );
}
