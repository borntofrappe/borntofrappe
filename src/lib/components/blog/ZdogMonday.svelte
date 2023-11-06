<script>
	export let current = '';
	const mondays = [
		{
			title: 'Beauty sleep',
			slug: 'beauty-sleep'
		},
		{
			title: 'Counting shapes',
			slug: 'counting-shapes'
		},
		{
			title: 'Step through frames',
			slug: 'step-through-frames'
		},
		{
			title: 'Spinning change',
			slug: 'spinning-change'
		},
		{
			title: 'One out of six',
			slug: 'one-out-of-six'
		},
		{
			title: "Child's play",
			slug: 'child-s-play'
		}
	];
</script>

<h2>What's this?</h2>

<p>
	Welcome to <em>"Zdog monday"</em>, a series devoted to spiffy pseudo-3D graphics created with
	<a href="https://zzz.dog/">the Zdog library</a> in the early stages of the week.
</p>

<p>
	There is <a href="https://codepen.io/collection/PYyrNq">a Codepen collection</a>
	housing every project, but if you need a bit of context, and a few delightful twists, I care to introduce
	every visual with a few words:
</p>

<ol>
	{#each mondays as { title, slug }}
		<li>
			{#if slug === current}
				{title}
			{:else}
				<a href="/{slug}">{title}</a>
			{/if}
		</li>
	{/each}
</ol>
