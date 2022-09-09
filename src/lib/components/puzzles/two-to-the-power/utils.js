import { backOut as easing } from "svelte/easing";

export const scale = (node, { delay = 0, duration = 250 }) => {
   return {
    delay,
    duration,
    tick: (t) => {
      node.style.transform = `scale(${easing(t)})`;
    },
  };
};
