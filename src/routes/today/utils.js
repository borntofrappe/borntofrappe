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
const cardinals = {
	1: 'st',
	2: 'nd',
	3: 'rd'
};

const cardinal = (d) => {
	const [u, uu] = d.toString().split('').reverse();
	const match = uu !== '1' && cardinals[u];
	return match || 'th';
};

export const format = (d) => {
	const day = d.getDay();
	const date = d.getDate();
	const month = d.getMonth();
	const year = d.getFullYear();

	return `${days[day]}, ${date}${cardinal(date)} of ${months[month]} ${year}`;
};
