<script>
	export let slug;
	export let title;
	export let description;
	export let date;

	const [year, month, day] = date.split('-');

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
</script>

<article>
	<h2>
		<a sveltekit:prefetch href="/blog/{slug}">
			{title}
		</a>
	</h2>

	<time datetime={date}>
		{months[month - 1]}
		{day}, {year}
	</time>

	<p>
		{description}
	</p>
</article>

<style>
	article > * + * {
		margin-top: 0.5rem;
	}

	article h2 a {
		text-decoration: none;
	}

	article time {
		font-family: 'Maven Pro', sans-serif;
		font-size: 0.83rem;
		font-size: var(--size-300);
		font-weight: 500;
		letter-spacing: -1px;
		padding: 0.25rem 0.4rem;
		display: inline-block;
		color: hsl(350, 100%, 8%);
		color: var(--primary-0);
		background: hsl(335, 100%, 86%);
		background: var(--primary-9);
		border-left: 0.2rem solid hsl(340, 90%, 55%);
		border-left: 0.2rem solid var(--primary-6);
	}

	@media (min-width: 45rem) {
		article time {
			font-size: 1rem;
			font-size: var(--size-400);
		}
	}

	article p {
		line-height: 1.75;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference]) article h2) {
			font-weight: 600;
		}
	}

	:global(html[data-preference='dark'] article h2) {
		font-weight: 600;
	}
</style>
