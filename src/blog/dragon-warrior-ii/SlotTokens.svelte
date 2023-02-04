<script>
	import SlotToken from './SlotToken.svelte';

	const n = 3;
	const sprites = ['life', 'moon', 'star', 'sun', 'water'];

	const is = {};
	const tokens = Array(n)
		.fill()
		.map((_) => {
			let i;
			do {
				i = Math.floor(Math.random() * sprites.length);
			} while (is[i]);
			is[i] = true;
			const values = [...sprites.slice(i), ...sprites.slice(0, i)];
			return {
				values,
				value: null,
				stopped: false
			};
		});

	let state = 'wait';

	const handleStart = () => {
		if (state === 'start') return;

		state = 'start';
	};

	const handleStop = ({ i, value }) => {
		if (state !== 'start') return;

		if (tokens[i].value === null) {
			tokens[i].value = value % sprites.length;
		}
	};

	const handleEnd = ({ i }) => {
		tokens[i].stopped = true;
		if (tokens.every(({ stopped }) => stopped === true)) {
			state = 'stop';
		}
	};

	const labels = {
		wait: 'Spin tokens',
		start: 'Select a token to stop',
		stop: 'Reset to spin the tokens once more'
	};

	const handleReset = async () => {
		for (let i = 0; i < tokens.length; i++) {
			tokens[i].value = null;
			tokens[i].stopped = false;
		}

		state = 'start';
	};
</script>

<svg aria-hidden="true" style:width="0" style:height="0" style:position="absolute">
	<defs>
		<symbol id="life" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
			<path stroke="currentColor" d="M1 1h2M4 1h2M0 2h7M0 3h7M0 4h7M1 5h5M2 6h3M3 7h1" />
		</symbol>

		<symbol id="moon" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
			<path stroke="currentColor" d="M1 1h4M2 2h4M3 3h4M3 4h4M3 5h4M2 6h4M1 7h4" />
		</symbol>

		<symbol id="star" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
			<path stroke="currentColor" d="M3 1h1M3 2h1M0 3h7M1 4h5M2 5h3M1 6h5M0 7h2M5 7h2" />
		</symbol>

		<symbol id="sun" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
			<path
				stroke="currentColor"
				d="M3 0h1M0 1h1M6 1h1M2 2h3M1 3h5M1 4h5M2 5h3M0 6h1M6 6h1M3 7h1"
			/>
		</symbol>

		<symbol id="water" viewBox="-0.5 -0.5 8 8" shape-rendering="crispEdges">
			<path stroke="currentColor" d="M3 0h1M3 1h1M2 2h3M1 3h5M0 4h7M0 5h7M0 6h7M1 7h5" />
		</symbol>
	</defs>
</svg>

<button
	aria-label={labels[state]}
	on:click={() => {
		if (state === 'wait') {
			handleStart();
		} else if (state === 'stop') {
			handleReset();
		}
	}}
>
	<svg viewBox="0 0 {n} 1">
		{#each tokens as { values, value }, x}
			<g transform="translate({x} 0)">
				<SlotToken
					sprites={values}
					{value}
					start={state === 'start'}
					on:stop={(e) => {
						handleStop({ i: x, value: Math.floor(e.detail.value) });
					}}
					on:end={() => {
						handleEnd({ i: x });
					}}
				/>
			</g>
		{/each}
	</svg>
</button>

<style>
	button {
		margin: 0;
		padding: 0;
		display: block;
		width: 100%;
		color: currentColor;
		background: none;
		border: 0.2rem solid currentColor;
	}

	button > svg {
		display: block;
		width: 100%;
		height: auto;
	}

	button {
		position: relative;
	}

	button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		background: currentColor;
		opacity: 0;
		z-index: -1;
	}

	button:focus {
		outline: none;
	}

	button:focus::before {
		opacity: 0.1;
	}

	button:focus:not(:focus-visible)::before {
		opacity: 0;
	}
</style>
