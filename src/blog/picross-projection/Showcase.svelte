<script>
	import Level from './Level.svelte';

	const showcase = [
		{
			key: 'clover',
			color: 'hsl(120, 72%, 64%)',
			caption: 'A good luck charm'
		},
		{
			key: 'apple',
			color: 'hsl(0, 72%, 64%)',
			caption: 'A savory apple'
		},
		{
			key: 'sea-horse',
			color: 'hsl(180, 72%, 64%)',
			caption: 'A hopping creature'
		},
		{
			key: 'butterfly',
			color: 'hsl(300, 72%, 64%)',
			caption: 'A fanciful critter'
		}
	];
</script>

<div>
	{#each showcase as { key, color, caption }}
		<figure>
			<Level {key} {color} />
			<figcaption>{caption}</figcaption>
		</figure>
	{/each}
</div>

<style>
	div,
	div > :global(*) {
		padding: 0;
	}
	div > :global(*) {
		margin: 0;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
	}

	figure {
		inline-size: 100%;
		max-inline-size: 20rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		background-size: 2rem;
		border: 0.25rem solid currentColor;
		border-radius: 0.5rem;
	}

	figure > :global(*:first-child) {
		aspect-ratio: 1/1;
	}

	figcaption {
		font-weight: 700;
		text-align: center;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		figcaption {
			display: flex;
			align-items: flex-end;
			--size: 2em;
		}

		figcaption::before,
		figcaption::after {
			box-sizing: border-box;
			content: '';
			inline-size: var(--size, 2em);
			block-size: var(--size, 2em);
			background: currentColor;
			-webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="-3 -10 13 13" xmlns="http://www.w3.org/2000/svg">\
	<g fill="none" stroke-width="1" stroke="black" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');
			mask-image: url('data:image/svg+xml;utf8,<svg viewBox="-3 -10 13 13" xmlns="http://www.w3.org/2000/svg">\
	<g fill="none" stroke-width="1" stroke="black" stroke-linecap="round" stroke-linejoin="round">\
		<path transform="rotate(10)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path transform="rotate(80)" d="M 0 -5 q -2 -1.5 0 -3 2 1.5 0 3" />\
		<path d="M 0 0 l 0.5 -3 3 0 -0.5 3z" />\
		<path d="M 5 -5 l 0.25 -1.5 1.5 0 -0.25 1.5z" />\
	</g>\
</svg>');

			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-size: 100%;
			mask-size: 100%;
		}

		figcaption::before {
			margin-inline-end: auto;
		}

		figcaption::after {
			transform: scale(-1, 1);
			margin-inline-start: auto;
		}
	}
</style>
