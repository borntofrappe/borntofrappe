<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="Let's begin with a smile. On January 10." />
</svelte:head>

<div>
	<h1>Hi there</h1>
	<p>
		It is <time datetime="2023-01-01T22:09:37">the 10th of January 2023</time>. A good day to start
		from scratch.
	</p>
	<figure>
		<img alt="" src="/icon.svg" />
		<figcaption>Let's begin with a smile.</figcaption>
	</figure>
</div>

<style>
	figure,
	img {
		max-width: 100%;
		display: block;
	}

	div {
		font-family: monospace;
		margin-inline: auto;
		padding-block: 1rem;
		padding-inline: 1rem;
		max-width: 70ch;
	}

	div > * + * {
		margin-block-start: 0.7em;
	}

	figure {
		max-width: 20rem;
		width: 100%;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
	}

	figure > figcaption {
		order: -1;
	}
</style>
