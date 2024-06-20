<script>
	import { onMount } from 'svelte';

	let value = 0;
	let split = false;

	onMount(() => {
		split = CSS.supports('grid-area: 1/-1');
	});
</script>

<div class="wrapper" class:split style:--split-value="{value}%">
	<div>
		<slot name="before">
			<figure>
				<svg style="display: block;" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
					<path
						stroke="hsl(0 0% 100%)"
						d="M 1 0 h 1 M 6 12 h 1 M 3 0 h 1 M 1 1 h 1 M 4 1 h 1 M 13 1 h 2 M 1 2 h 1 M 4 2 h 2 M 7 2 h 1 M 10 2 h 1 M 12 2 h 2 M 1 3 h 1 M 1 4 h 1 M 1 5 h 1 M 1 6 h 1 M 14 7 h 1 M 3 8 h 2 M 13 8 h 3 M 3 9 h 1 M 7 9 h 1 M 12 9 h 1 M 11 11 h 1 M 5 12 h 1 M 11 12 h 2 M 9 13 h 2 M 12 13 h 1 M 14 0 h 1 M 3 1 h 1 M 5 9 h 1 M 8 9 h 2 M 1 10 h 1 M 5 1 h 1 M 12 1 h 1 M 3 7 h 1 M 8 2 h 1 M 9 2 h 1 M 6 11 h 1 M 10 9 h 1 M 11 13 h 1"
					/>
					<path
						stroke="hsl(205 46% 35%)"
						d="M 7 0 h 1 M 9 0 h 1 M 6 1 h 3 M 6 2 h 1 M 5 3 h 4 M 10 3 h 2 M 10 4 h 1 M 12 4 h 1 M 3 5 h 2 M 7 5 h 1 M 10 5 h 1 M 14 5 h 1 M 2 6 h 3 M 13 6 h 3 M 0 7 h 3 M 6 7 h 2 M 10 7 h 2 M 0 8 h 1 M 5 8 h 1 M 7 8 h 1 M 9 8 h 1 M 11 8 h 1 M 0 9 h 1 M 6 10 h 2 M 9 10 h 1 M 11 10 h 2 M 4 11 h 1 M 7 11 h 2 M 10 11 h 1 M 12 11 h 2 M 4 12 h 1 M 7 12 h 4 M 13 12 h 1 M 7 14 h 1 M 9 15 h 4 M 8 0 h 1 M 10 0 h 1 M 10 1 h 1 M 6 8 h 1 M 9 1 h 1 M 9 3 h 1 M 4 7 h 1 M 11 1 h 1 M 11 2 h 1 M 5 4 h 1 M 7 4 h 1 M 10 8 h 1 M 8 10 h 1 M 5 11 h 1 M 6 14 h 1 M 12 3 h 1 M 12 6 h 1 M 13 5 h 1 M 12 7 h 1 M 6 9 h 1 M 10 10 h 1 M 5 6 h 1 M 5 7 h 1 M 8 8 h 1 M 11 9 h 1 M 5 10 h 1 M 5 14 h 1 M 13 7 h 1 M 12 8 h 1 M 9 11 h 1"
					/>
					<path
						stroke="hsl(29 71% 77%)"
						d="M 6 4 h 1 M 8 4 h 2 M 5 5 h 2 M 8 5 h 2 M 11 5 h 2 M 6 6 h 2 M 9 6 h 1 M 9 7 h 1 M 1 8 h 2 M 1 9 h 1 M 15 9 h 1 M 5 13 h 3 M 11 14 h 2 M 11 4 h 1 M 8 7 h 1 M 15 10 h 1 M 8 6 h 1 M 11 6 h 1 M 9 14 h 1 M 10 6 h 1 M 2 9 h 1 M 10 14 h 1 M 14 9 h 1 M 14 10 h 1"
					/>
				</svg>
			</figure>
		</slot>
	</div>
	<div>
		<slot name="after">
			<figure>
				<svg style="display: block;" viewBox="0 -0.5 16 16" shape-rendering="crispEdges">
					<path
						stroke="hsl(9 35% 30%)"
						d="M 1 0 h 1 M 6 0 h 1 M 14 0 h 1 M 0 1 h 1 M 13 1 h 1 M 0 2 h 1 M 12 2 h 1 M 0 3 h 1 M 15 3 h 1 M 14 4 h 1 M 14 5 h 1 M 2 6 h 1 M 6 6 h 1 M 9 6 h 1 M 12 6 h 2 M 9 7 h 1 M 2 8 h 1 M 1 9 h 1 M 5 9 h 1 M 10 9 h 1 M 14 9 h 1 M 1 10 h 1 M 6 10 h 4 M 1 11 h 1 M 15 11 h 1 M 0 12 h 1 M 15 12 h 1 M 0 13 h 1 M 15 13 h 1 M 0 14 h 1 M 15 14 h 1 M 1 15 h 1 M 14 15 h 1 M 9 0 h 1 M 2 1 h 1 M 15 1 h 1 M 1 4 h 1 M 1 5 h 1 M 6 7 h 1 M 15 2 h 1 M 14 10 h 1"
					/>
					<path
						stroke="hsl(246 24% 16%)"
						d="M 5 0 h 1 M 10 0 h 1 M 4 1 h 1 M 11 1 h 1 M 5 2 h 6 M 4 3 h 1 M 11 3 h 1 M 6 4 h 2 M 9 4 h 1 M 11 4 h 1 M 11 5 h 1 M 12 7 h 1 M 4 8 h 1 M 11 10 h 1 M 5 11 h 1 M 3 12 h 2 M 2 13 h 1 M 6 13 h 1 M 3 14 h 1 M 7 14 h 1 M 13 14 h 1 M 9 15 h 2 M 8 4 h 1 M 13 8 h 1 M 6 15 h 1 M 4 5 h 1 M 4 10 h 1 M 8 14 h 1 M 3 15 h 1 M 10 10 h 1 M 6 12 h 1 M 9 13 h 1 M 3 13 h 1 M 11 15 h 1"
					/>
					<path
						stroke="hsl(24 74% 51%)"
						d="M 7 0 h 2 M 1 1 h 1 M 7 1 h 1 M 14 1 h 1 M 1 2 h 2 M 13 2 h 1 M 2 3 h 1 M 12 3 h 2 M 2 4 h 1 M 12 4 h 1 M 1 12 h 1 M 1 13 h 1 M 14 13 h 1 M 1 14 h 1 M 4 14 h 2 M 14 2 h 1 M 13 4 h 1 M 5 6 h 1 M 10 6 h 1 M 4 7 h 1 M 7 7 h 2 M 10 7 h 2 M 10 8 h 1 M 3 10 h 1 M 13 13 h 1 M 12 14 h 1 M 4 9 h 1 M 9 9 h 1 M 13 9 h 1 M 3 11 h 1 M 14 14 h 1 M 8 1 h 1"
					/>
					<path
						stroke="hsl(231 69% 62%)"
						d="M 5 1 h 2 M 9 1 h 2 M 4 2 h 1 M 11 2 h 1 M 5 3 h 6 M 5 4 h 1 M 10 4 h 1 M 12 8 h 1 M 11 9 h 2 M 8 11 h 2 M 12 11 h 1 M 11 12 h 1 M 4 13 h 1 M 7 13 h 2 M 11 13 h 1 M 4 15 h 2 M 7 11 h 1 M 12 12 h 1 M 5 13 h 1"
					/>
					<path
						stroke="hsl(0 0% 100%)"
						d="M 3 2 h 1 M 3 3 h 1 M 3 5 h 1 M 3 6 h 1 M 3 4 h 1 M 3 7 h 1"
					/>
					<path
						stroke="hsl(0 55% 44%)"
						d="M 1 3 h 1 M 14 3 h 1 M 12 5 h 2 M 14 11 h 1 M 2 12 h 1 M 14 12 h 1 M 6 14 h 1 M 2 5 h 1"
					/>
					<path
						stroke="hsl(205 46% 35%)"
						d="M 4 4 h 1 M 5 5 h 4 M 10 5 h 1 M 11 8 h 1 M 5 10 h 1 M 13 10 h 1 M 4 11 h 1 M 6 11 h 1 M 13 11 h 1 M 5 12 h 1 M 7 12 h 3 M 13 12 h 1 M 12 13 h 1 M 9 14 h 2 M 9 5 h 1 M 4 6 h 1 M 11 6 h 1"
					/>
					<path
						stroke="hsl(29 71% 77%)"
						d="M 7 6 h 1 M 5 7 h 1 M 5 8 h 2 M 8 8 h 2 M 2 9 h 2 M 6 9 h 3 M 2 10 h 1 M 10 11 h 1 M 10 12 h 1 M 10 13 h 1 M 11 14 h 1 M 8 6 h 1 M 7 8 h 1 M 12 10 h 1 M 2 11 h 1 M 11 11 h 1"
					/>
					<path stroke="hsl(199 16% 66%)" d="M 3 8 h 1" />
				</svg>
			</figure>
		</slot>
	</div>

	<input hidden={!split} type="range" min="0" max="100" step="1" bind:value />
</div>

<style>
	.wrapper > * + * {
		margin-block-start: 0.5rem;
	}

	.wrapper input[type='range'] {
		display: none;
	}

	.split > * + * {
		margin-block-start: 0;
	}

	.split input[type='range'] {
		display: initial;
		z-index: 1;
	}

	.split {
		display: grid;
		--split-padding: 1rem;
		--split-value: 100%;
		padding: var(--split-padding) 0;
	}

	.split > * {
		grid-area: 1/1;
	}

	.split > div:nth-child(1) {
		-webkit-mask: linear-gradient(
			to right,
			hsl(0 0% 0% / 0) 0%,
			hsl(0 0% 0% / 0) var(--split-value),
			hsl(0 0% 0%) 0%
		);
		mask: linear-gradient(
			to right,
			hsl(0 0% 0% / 0) 0%,
			hsl(0 0% 0% / 0) var(--split-value),
			hsl(0 0% 0%) 0%
		);
	}

	.split > div:nth-child(2) {
		-webkit-mask: linear-gradient(
			to right,
			hsl(0 0% 0%) 0%,
			hsl(0 0% 0%) 0% var(--split-value),
			hsl(0 0% 0% / 0) 0%
		);
		mask: linear-gradient(
			to right,
			hsl(0 0% 0%) 0%,
			hsl(0 0% 0%) 0% var(--split-value),
			hsl(0 0% 0% / 0) 0%
		);
	}

	input[type='range'] {
		margin: 0;
		cursor: pointer;
		appearance: none;
		background: none;
		-webkit-tap-highlight-color: transparent;
	}

	input::-webkit-slider-runnable-track {
		block-size: 100%;
		block-size: calc(100% + var(--split-padding) * 2);
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-moz-range-thumb {
		border-radius: 1e5px;
		appearance: none;
		inline-size: 0.4rem;
		block-size: 100%;
		background: hsl(0 0% 100%);
		border: none;
		box-shadow: 0 0 4px -1px hsl(0 0% 0% / 0.2);
	}
</style>
