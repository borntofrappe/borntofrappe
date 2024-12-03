/**
 * @param { HTMLElement } node
 * @param {{ speed?: number }} [param]
 * @returns {{ duration: number, tick: (t : number) => void }}
 */
export const typewriter = (node, { speed = 50 } = {}) => {
  const { textContent: text } = node;
  if (!text) return { duration: 0, tick: (t) => {} };
  const { length } = text;
  
  const duration = speed * length;
  return {
    duration,
    tick: (t) => {
      const i = ~~(length * t);
      node.textContent = text.slice(0, i);
    },
  };
};
