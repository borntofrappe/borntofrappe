export const typewriter = (node, { speed = 50 }) => {
	const { textContent: text } = node;
	const { length } = text;

	const duration = speed * length;
	return {
		duration,
		tick: (t) => {
			const i = ~~(length * t);
			node.textContent = text.slice(0, i);
		}
	};
};
