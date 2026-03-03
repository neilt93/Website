// Pure rendering functions for the PushT demo canvas.
// World space is 512x512. All coordinates are in world units.

const WORLD = 512;

// T-shape geometry (scale=30 from gym-pusht):
// Horizontal bar: 120x30, vertical stem: 30x90
// Centre of mass offset: (3600*15 + 2700*75) / 6300 = 40.714
const COM_Y = 40.714;
const BAR = { x: -60, y: -COM_Y, w: 120, h: 30 };
const STEM = { x: -15, y: 30 - COM_Y, w: 30, h: 90 };

const AGENT_RADIUS = 15;

export type Pose = { x: number; y: number; angle: number };

function drawTee(
  ctx: CanvasRenderingContext2D,
  pose: Pose,
  colour: string,
  scale: number,
) {
  ctx.save();
  ctx.translate(pose.x * scale, pose.y * scale);
  ctx.rotate(pose.angle);
  ctx.fillStyle = colour;

  ctx.fillRect(
    BAR.x * scale,
    BAR.y * scale,
    BAR.w * scale,
    BAR.h * scale,
  );
  ctx.fillRect(
    STEM.x * scale,
    STEM.y * scale,
    STEM.w * scale,
    STEM.h * scale,
  );

  ctx.restore();
}

function drawAgent(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number,
) {
  ctx.beginPath();
  ctx.arc(x * scale, y * scale, AGENT_RADIUS * scale, 0, Math.PI * 2);
  ctx.fillStyle = "#4169E1";
  ctx.fill();
}

export interface FrameData {
  agent: { x: number; y: number };
  block: Pose;
}

export function renderFrame(
  ctx: CanvasRenderingContext2D,
  frame: FrameData,
  goal: Pose,
  canvasWidth: number,
  canvasHeight: number,
) {
  const scale = canvasWidth / WORLD;

  // Background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Goal T (translucent green)
  drawTee(ctx, goal, "rgba(144,238,144,0.5)", scale);

  // Block T (slate)
  drawTee(ctx, frame.block, "#778899", scale);

  // Agent circle (blue)
  drawAgent(ctx, frame.agent.x, frame.agent.y, scale);
}
