import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	const { title, slug, date, brief} = post;
	return {
		title,
		slug,
		date,
		brief,
		dateTime: date,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}