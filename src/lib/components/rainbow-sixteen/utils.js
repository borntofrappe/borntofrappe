export const getColorHsl = ({ h = 0, s = 0.9, l = 0.6 } = {}) =>
	`hsl(${h}, ${s * 100}%, ${l * 100}%)`;

export const getColorHsv = ({ h = 0, s = 0.55, v = 0.92 } = {}) => {
	const l = v * (1 - s / 2);
	const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
	return `hsl(${h}, ${sl * 100}%, ${l * 100}%)`;
};
