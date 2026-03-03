import type { FrameData, Pose } from "./pusht-renderer";

// Goal pose: the target position and rotation for the T-block.
export const GOAL_POSE: Pose = { x: 256, y: 280, angle: Math.PI / 4 };

const TOTAL_FRAMES = 80;
const APPROACH_END = 18;
const PUSH_END = 68;

// Block waypoints: [frame, x, y, angle]
// Block starts right of centre, ends at the goal pose.
const BLOCK_WP: number[][] = [
  [0, 360, 300, 0],
  [APPROACH_END, 360, 300, 0],
  [30, 340, 296, 0.08],
  [40, 318, 292, 0.2],
  [50, 296, 288, 0.38],
  [60, 274, 284, 0.58],
  [PUSH_END, 256, 280, Math.PI / 4],
  [79, 256, 280, Math.PI / 4],
];

// Agent stays on the right edge of the T's horizontal bar.
// Bar right-centre in local coords: (60, -25.71) relative to COM.
// Outward normal: (1, 0). Agent centre = contact point + 15 * normal.
// Rotated into world coords:
//   agent_x = bx + 75*cos(θ) + 25.71*sin(θ)
//   agent_y = by + 75*sin(θ) - 25.71*cos(θ)
const R = 75; // 60 (bar half-width) + 15 (agent radius)
const D = 25.71; // distance from COM to bar vertical centre

function agentFromBlock(b: Pose): { x: number; y: number } {
  const c = Math.cos(b.angle);
  const s = Math.sin(b.angle);
  return { x: b.x + R * c + D * s, y: b.y + R * s - D * c };
}

function ease(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function interpolateBlock(frame: number): Pose {
  let lo = 0;
  for (let i = 0; i < BLOCK_WP.length - 1; i++) {
    if (BLOCK_WP[i][0] <= frame) lo = i;
  }
  const hi = Math.min(lo + 1, BLOCK_WP.length - 1);
  const wLo = BLOCK_WP[lo];
  const wHi = BLOCK_WP[hi];
  const span = wHi[0] - wLo[0] || 1;
  const t = ease((frame - wLo[0]) / span);
  return {
    x: lerp(wLo[1], wHi[1], t),
    y: lerp(wLo[2], wHi[2], t),
    angle: lerp(wLo[3], wHi[3], t),
  };
}

function buildTrajectory(): FrameData[] {
  const frames: FrameData[] = [];
  const contactPos = agentFromBlock(interpolateBlock(APPROACH_END));

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const block = interpolateBlock(f);
    let agent: { x: number; y: number };

    if (f <= APPROACH_END) {
      // Approach: agent slides in from the right toward the contact point.
      const t = ease(f / APPROACH_END);
      agent = {
        x: lerp(contactPos.x + 55, contactPos.x, t),
        y: contactPos.y,
      };
    } else if (f <= PUSH_END) {
      // Push: agent stays locked to the right edge of the bar.
      agent = agentFromBlock(block);
    } else {
      // Settle: agent eases slightly away from the block.
      const onBlock = agentFromBlock(block);
      const t = ease((f - PUSH_END) / (TOTAL_FRAMES - 1 - PUSH_END));
      agent = {
        x: lerp(onBlock.x, onBlock.x + 20, t),
        y: lerp(onBlock.y, onBlock.y + 10, t),
      };
    }

    frames.push({ agent, block });
  }

  return frames;
}

export const TRAJECTORY: FrameData[] = buildTrajectory();
export const FRAME_COUNT = TRAJECTORY.length;
