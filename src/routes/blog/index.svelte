<script context="module">
	export async function load({ session }) {
		const { posts } = session;

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;

	const formatter = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	posts.forEach((post) => {
		const datetime = new Date(new Date(...post.date.split('-')));
		post.datetime = datetime;
		post.date = formatter.format(datetime);
		post.href = `/blog/${post.slug}`;
	});
</script>

<header>
	<h1>Jotting things down</h1>
	<p>I learn, I build, I write. Not necessarily in that order.</p>
</header>

<main id="content">
	{#each posts as { title, datetime, date, brief, href }}
		<article>
			<h2>
				<a {href}>{title}</a>
			</h2>
			<time {datetime}>{date}</time>
			<p>
				{brief}
			</p>
		</article>
	{/each}
</main>
