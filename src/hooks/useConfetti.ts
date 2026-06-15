import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export function useConfetti() {
  const fireConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, scalar: 0.8, colors: ['#7c3aed', '#06b6d4', '#f59e0b'] });
    fire(0.2, { spread: 60, scalar: 1.2, colors: ['#ec4899', '#8b5cf6', '#06b6d4'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#7c3aed', '#06b6d4', '#10b981'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#f59e0b', '#ec4899', '#7c3aed'] });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#06b6d4', '#10b981', '#8b5cf6'] });
  }, []);

  return { fireConfetti };
}
