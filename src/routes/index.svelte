<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	const title = 'borntofrappe';
</script>

<Meta
	{title}
	description="Hello, and welcome to my personal website. This is where I try to convince you I'm a solid programmer. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header title="Hello world" body="You are welcomed." />

<main>
	<p>Here's two things about me:</p>

	<ol>
		<li>I like to start new projects</li>
		<li>I often fail to follow through past the initial, exciting phase</li>
	</ol>

	<p>
		So here's my own website, reinforcing the first factoid and hopefully overriding the second.
	</p>

	<p>
		You can attest its progress over <a href="https://github.com/borntofrappe/borntofrappe"
			>on GitHub</a
		>.
	</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 4rem auto;
	}

	main > * + * {
		margin-top: 0.75em;
	}
</style>
