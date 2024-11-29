<script>
	import { typewriter } from './utils';
	const talks = ['Keys! Keys that open any door!', 'Begone, you fool!', 'Fwah-fwah-fwah-fwah!'];

	let checked = false;
	$: talk = checked && talks[Math.floor(Math.random() * talks.length)];
</script>

<svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
	<defs>
		<symbol id="dragon-warrior-sage" viewBox="0 0 16 16" shape-rendering="crispEdges">
			<g fill="hsl(0, 0%, 13%)">
				<rect x="5" width="7" height="1" />
				<rect x="3" y="1" width="2" height="1" />
				<rect x="12" y="1" width="1" height="5" />
				<rect x="1" y="2" width="2" height="1" />
				<rect x="3" y="3" width="1" height="1" />
				<rect x="4" y="4" width="1" height="1" />
				<rect x="7" y="4" width="1" height="2" />
				<rect x="10" y="4" width="1" height="2" />
				<rect x="5" y="5" width="1" height="2" />
				<rect x="13" y="6" width="1" height="2" />
				<rect x="2" y="7" width="3" height="1" />
				<rect x="2" y="8" width="2" height="1" />
				<rect x="14" y="8" width="1" height="6" />
				<rect x="1" y="9" width="1" height="2" />
				<rect x="4" y="9" width="1" height="2" />
				<rect x="2" y="11" width="1" height="5" />
				<rect x="3" y="11" width="1" height="2" />
				<rect x="4" y="13" width="1" height="2" />
				<rect x="13" y="14" width="1" height="1" />
				<rect x="6" y="15" width="2" height="1" />
				<rect x="10" y="15" width="2" height="1" />
			</g>

			<g fill="hsl(205, 87%, 29%)">
				<rect x="5" y="1" width="7" height="1" />
				<rect x="3" y="2" width="9" height="1" />
				<rect x="4" y="3" width="3" height="1" />
				<rect x="8" y="3" width="2" height="1" />
				<rect x="11" y="3" width="1" height="1" />
				<rect x="5" y="4" width="1" height="1" />
				<rect x="8" y="6" width="2" height="1" />
				<rect x="12" y="6" width="1" height="1" />
				<rect x="5" y="7" width="3" height="1" />
				<rect x="10" y="7" width="3" height="1" />
				<rect x="4" y="8" width="2" height="1" />
				<rect x="12" y="8" width="2" height="1" />
				<rect x="5" y="9" width="2" height="1" />
				<rect x="11" y="9" width="3" height="1" />
				<rect x="5" y="10" width="3" height="1" />
				<rect x="11" y="10" width="3" height="1" />
				<rect x="4" y="11" width="5" height="1" />
				<rect x="10" y="11" width="4" height="1" />
				<rect x="4" y="12" width="10" height="1" />
				<rect x="5" y="13" width="9" height="1" />
				<rect x="7" y="14" width="6" height="1" />
			</g>
			<g fill="hsl(205, 79%, 92%)">
				<rect x="7" y="3" width="1" height="1" />
				<rect x="10" y="3" width="1" height="1" />
				<rect x="6" y="4" width="1" height="3" />
				<rect x="8" y="4" width="2" height="2" />
				<rect x="11" y="4" width="1" height="3" />
				<rect x="7" y="6" width="1" height="1" />
				<rect x="10" y="6" width="1" height="1" />
				<rect x="8" y="7" width="2" height="1" />
				<rect x="6" y="8" width="6" height="1" />
				<rect x="2" y="9" width="2" height="2" />
				<rect x="7" y="9" width="4" height="1" />
				<rect x="8" y="10" width="3" height="1" />
				<rect x="9" y="11" width="1" height="1" />
				<rect x="5" y="14" width="2" height="1" />
			</g>
		</symbol>
	</defs>
</svg>

<div>
	<label>
		<svg viewBox="0 0 16 16">
			<use href="#dragon-warrior-sage" />
		</svg>
		<input type="checkbox" bind:checked />
		<span>Talk</span>
	</label>

	<p>
		<span aria-hidden="true" style:opacity="0" style:visibility="none">{talk || talks[0]}</span>
		{#if talk}
			<span in:typewriter>{talk}</span>
		{/if}
	</p>
</div>

<style>
	div,
	div * {
		box-sizing: border-box;
		padding: 0;
	}

	div * {
		margin: 0;
	}

	p {
		line-height: initial;
	}

	div {
		display: inline-flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	svg {
		inline-size: 80px;
		block-size: auto;
	}

	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	p {
		position: relative;
	}

	p > span {
		display: inline-block;
		padding: 0.35rem 0.5rem;
		border: 0.2rem solid currentColor;
		border-radius: 0.25rem;
	}

	p > span:nth-of-type(1) {
		opacity: 0;
	}

	p > span:nth-of-type(2) {
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 0;
		inline-size: 100%;
		block-size: 100%;
	}
</style>
