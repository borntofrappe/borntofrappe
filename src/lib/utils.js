export function observe(node) {
	if (IntersectionObserver) {
		const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				node.classList.add('observed');
			} else {
				node.classList.remove('observed');
			}
		});

		if (!prefersReducedMotion.matches) {
			observer.observe(node);
		}
		prefersReducedMotion.addEventListener('change', ({ matches }) => {
			if (matches) {
				observer.unobserve(node);
			} else {
				observer.observe(node);
			}
		});

		return {
			onDestroy() {
				observer.unobserve(node);
			}
		};
	}
}

export const format = (date) => {
	if (Intl.DateTimeFormat) {
		return new Intl.DateTimeFormat('en', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(date);
	}

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
