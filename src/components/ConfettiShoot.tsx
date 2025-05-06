import confetti from "canvas-confetti";

const count = 200;
const defaults = {
  origin: { y: 0.7 },
};
type confettiOptions = {
  particleCount?: number;
  spread?: number;
  ticks?: number;
  gravity?: number;
  decay?: number;
  startVelocity?: number;
  scalar?: number;
  angle?: number;
  origin?: {
    y?: number;
    x?: number;
  };
};

type ConfettiShootOptions = "default" | "realistic" | "pride";

const fire = (particleRatio: number, opts: confettiOptions): void => {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
  });
};

export const confettiShoot = (
  variant:ConfettiShootOptions = "default",
): void => {
  if (variant === "default") {
    fire(1, {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else if (variant === "realistic") {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      origin: { x:0.5, y:1}
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  } else if (variant === "pride") {
    const end = Date.now() + 6 * 1000;

    if (Date.now() < end) {
      fire(1, {
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y:1 },
      });
      fire(1, {
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 , y: 1},
      });
    }
  }
};