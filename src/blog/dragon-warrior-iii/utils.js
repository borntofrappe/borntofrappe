export const animate = (node) => {
	const observation = (entries) => {
		if (entries[0].isIntersecting) {
			node.querySelectorAll('animate').forEach((d) => d.beginElement());
		} else {
			node.querySelectorAll('animate').forEach((d) => d.endElement());
		}
	};

	const observer = new IntersectionObserver(observation);
	observer.observe(node);

	return {
		onDestroy() {
			observer.unobserve(node);
		}
	};
};

export const blink = (node, { duration = 300, delay = 0 }) => {
	const values = [0, 1];
	return {
		duration,
		delay,
		css: (t) => `opacity: ${values[Math.floor((t * 10) / 2) % values.length]}`
	};
};

export const typewriter = (node, { speed = 50, delay = 0 }) => {
	const { textContent: text } = node;
	const { length } = text;

	const duration = speed * length;
	return {
		duration,
		delay,
		tick: (t) => {
			const i = ~~(length * t);
			node.textContent = text.slice(0, i);
		}
	};
};
