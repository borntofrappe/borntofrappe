/**
 * @param { SVGSVGElement } node
 */
export const animate = (node) => {
  /**
   * @param { IntersectionObserverEntry[] } entries
   */
  const observation = (entries) => {
    if (entries[0].isIntersecting) {
      node.querySelectorAll("animate").forEach((d) => d.beginElement());
    } else {
      node.querySelectorAll("animate").forEach((d) => d.endElement());
    }
  };

  const observer = new IntersectionObserver(observation);
  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
};

/**
 * @param { HTMLElement } node
 * @param {{ speed?: number }} [param]
 * @returns {{ duration: number, tick: (t : number) => void }}
 */
export function typewriter(node, { speed = 50 } = {}) {
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
}
