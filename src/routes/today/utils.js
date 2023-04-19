export const format = (d) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

	const cardinal = (d) => {
		const cardinals = {
			1: 'st',
			2: 'nd',
			3: 'rd'
		};

		const [u, uu] = d
			.toString()
			.split('')
			.reverse()
			.map((d) => parseInt(d, 10));

		const match = uu !== 1 && cardinals[u];
		return match || 'th';
	};

	const day = d.getDay();
	const date = d.getDate();
	const month = d.getMonth();
	const year = d.getFullYear();

	return `${days[day]}, ${date}${cardinal(date)} of ${months[month]} ${year}`;
};
