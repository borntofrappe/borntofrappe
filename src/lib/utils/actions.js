export const observeState = (node, { dataState } = { dataState: ['start', 'end'] }) => {
	if (!IntersectionObserver) return;

	const [start, end] = dataState;

	const observation = (entries, observer) => {
		const [entry] = entries;
		if (!entry.isIntersecting) return;

		const { target } = entry;
		node.setAttribute('data-state', end);
		observer.unobserve(target);
	};

	const observer = new IntersectionObserver(observation);

	node.setAttribute('data-state', start);
	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};
