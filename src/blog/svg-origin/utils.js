export const observe = (node, options) => {
	if (!IntersectionObserver) return;
	const callback = (entries) => {
		if (entries[0].isIntersecting) {
			options.onObserve();
		} else {
			options.onUnobserve();
		}
	};

	const observer = new IntersectionObserver(callback);
	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};
