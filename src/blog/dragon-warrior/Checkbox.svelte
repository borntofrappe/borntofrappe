<script>
	import { typewriter } from './utils';

	let checked;
	const talks = ['Keys! Keys that open any door!', 'Begone, you fool!', 'Fwah-fwah-fwah-fwah!'];
	$: talk = checked && talks[Math.floor(Math.random() * talks.length)];
</script>

<div>
	<label>
		<svg
			width="1em"
			height="1em"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -0.5 16 16"
			shape-rendering="crispEdges"
		>
			<g stroke="currentColor">
				<path
					class="c1"
					d="M5 0h7M3 1h2M12 1h1M1 2h2M12 2h1M3 3h1M12 3h1M4 4h1M7 4h1M10 4h1M12 4h1M5 5h1M7 5h1M10 5h1M12 5h1M5 6h1M13 6h1M2 7h3M13 7h1M2 8h2M14 8h1M1 9h1M4 9h1M14 9h1M1 10h1M4 10h1M14 10h1M2 11h2M14 11h1M2 12h2M14 12h1M2 13h1M4 13h1M14 13h1M2 14h1M4 14h1M13 14h1M2 15h1M6 15h2M10 15h2"
				/>
				<path
					class="c2"
					d="M5 1h7M3 2h9M4 3h3M8 3h2M11 3h1M5 4h1M8 6h2M12 6h1M5 7h3M10 7h3M4 8h2M12 8h2M5 9h2M11 9h3M5 10h3M11 10h3M4 11h5M10 11h4M4 12h10M5 13h9M7 14h6"
				/>
				<path
					class="c3"
					d="M7 3h1M10 3h1M6 4h1M8 4h2M11 4h1M6 5h1M8 5h2M11 5h1M6 6h2M10 6h2M8 7h2M6 8h6M2 9h2M7 9h4M2 10h2M8 10h3M9 11h1M5 14h2"
				/>
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
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	label svg {
		width: 64px;
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
