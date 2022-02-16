<script>
	import { typewriter } from './_utils';

	let checked;
	const talks = ['Keys! Keys that open any door!', 'Begone, you fool!', 'Fwah-fwah-fwah-fwah!'];
	$: talk = checked && talks[Math.floor(Math.random() * talks.length)];
</script>

<article>
	<label>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			shape-rendering="crispEdges"
			viewBox="0 0 16 16"
			width="1em"
			height="1em"
		>
			<g fill="currentColor">
				<g class="c1"
					><path
						d="M5 0h7v1H5zM3 1h10v1H3zM1 2h12v1H1zM3 3h10v1H3zM4 4h9v1H4zM5 5h8v1H5zM5 6h9v1H5zM2 7h12v1H2zM2 8h13v1H2zM1 9h14v2H1zM2 11h13v2H2zM2 13h1v1H2zM4 13h11v1H4zM2 14h1v1H2zM4 14h10v1H4zM2 15h1v1H2zM6 15h2v1H6zM10 15h2v1h-2z"
					/></g
				><g class="c2"
					><path
						d="M5 1h7v1H5zM3 2h9v1H3zM4 3h8v1H4zM5 4h1v1H5zM6 5h1v1H6zM6 6h7v1H6zM5 7h8v1H5zM4 8h10v1H4zM5 9h9v2H5zM4 11h10v2H4zM5 13h9v1H5zM6 14h7v1H6z"
					/></g
				><g class="c3"
					><path
						d="M7 3h1v1H7zM10 3h1v1h-1zM6 4h1v1H6zM8 4h2v1H8zM11 4h1v1h-1zM6 5h1v1H6zM8 5h2v1H8zM11 5h1v1h-1zM6 6h2v1H6zM10 6h2v1h-2zM8 7h2v1H8zM6 8h6v1H6zM2 9h2v1H2zM7 9h4v1H7zM2 10h2v1H2zM8 10h3v1H8zM9 11h1v1H9zM6 14h2v1H6z"
					/></g
				>
			</g>
		</svg>

		<input bind:checked type="checkbox" />
		<span>Talk</span>
	</label>

	<p>
		<span aria-hidden="true">{talk || talks[0]}</span>
		{#if talk}
			<span aria-hidden="true"><span>{talk}</span></span>
			<span in:typewriter>{talk}</span>
		{/if}
	</p>
</article>

<style>
	article {
		display: inline-flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	label svg {
		width: 4em;
		height: auto;
		display: inline-block;
	}

	p {
		line-height: initial;
		position: relative;
		padding: 0.35rem 0.5rem;
	}

	p > span {
		padding: 0.35rem 0.5rem;
		border: 0.2rem solid transparent;
	}

	p > span:nth-of-type(1),
	p > span > span {
		opacity: 0;
	}

	p > span:nth-of-type(2) {
		border-color: currentColor;
		border-radius: 0.25rem;
	}

	p > span:nth-of-type(2),
	p > span:nth-of-type(3) {
		width: max-content;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
