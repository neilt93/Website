import type { FrameData, Pose } from "./pusht-renderer";

// Goal pose: the target position and rotation for the T-block.
export const GOAL_POSE: Pose = { x: 256, y: 280, angle: Math.PI / 4 };

// Waypoints: [frame, agentX, agentY, blockX, blockY, blockAngle]
// Agent approaches from bottom-right, pushes block left-up and rotates it
// ~45 degrees into the goal pose.
const WAYPOINTS: number[][] = [
  [0, 430, 420, 370, 340, 0],
  [10, 398, 375, 370, 340, 0],
  [18, 378, 348, 368, 338, 0.02],
  [28, 345, 318, 340, 315, 0.12],
  [38, 315, 298, 315, 300, 0.28],
  [48, 290, 285, 295, 290, 0.42],
  [58, 272, 275, 278, 282, 0.56],
  [68, 260, 268, 264, 276, 0.68],
  [75, 254, 264, 258, 278, 0.75],
  [79, 252, 262, 256, 280, Math.PI / 4],
];

// Cubic ease in-out for smooth interpolation.
function ease(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// Build the full trajectory by interpolating between waypoints.
function buildTrajectory(): FrameData[] {
  const totalFrames = WAYPOINTS[WAYPOINTS.length - 1][0] + 1;
  const frames: FrameData[] = [];

  for (let f = 0; f < totalFrames; f++) {
    // Find surrounding waypoints.
    let lo = 0;
    for (let i = 0; i < WAYPOINTS.length - 1; i++) {
      if (WAYPOINTS[i][0] <= f) lo = i;
    }
    const hi = Math.min(lo + 1, WAYPOINTS.length - 1);

    const wLo = WAYPOINTS[lo];
    const wHi = WAYPOINTS[hi];
    const span = wHi[0] - wLo[0] || 1;
    const t = ease((f - wLo[0]) / span);

    frames.push({
      agent: {
        x: lerp(wLo[1], wHi[1], t),
        y: lerp(wLo[2], wHi[2], t),
      },
      block: {
        x: lerp(wLo[3], wHi[3], t),
        y: lerp(wLo[4], wHi[4], t),
        angle: lerp(wLo[5], wHi[5], t),
      },
    });
  }

  return frames;
}

export const TRAJECTORY: FrameData[] = buildTrajectory();
export const FRAME_COUNT = TRAJECTORY.length;
