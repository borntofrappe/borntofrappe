<script>
	export let attributeName = 'fill-opacity';

	let svg = null;

	const handleAnimation = async () => {
		const from = [...svg.querySelectorAll('set.from')].slice(1);
		const to = svg.querySelectorAll('set.to');

		from.forEach((set) => {
			set.beginElement();
		});

		const timeout = setTimeout(() => {
			to.forEach((set, i) => {
				const currentTime = svg.getCurrentTime();
				set.setAttribute('begin', `${currentTime + i * 0.05}`);
			});

			clearTimeout(timeout);
		}, 50);
	};
</script>

<button on:click={handleAnimation}>Animate</button>

<svg bind:this={svg} viewBox="0 -18 80 19">
	<g fill="currentColor" font-family="sans-serif" font-size="16">
		<text>
			{#each 'Hi there!'.split('') as letter, i}
				<tspan>
					<set class="from" {attributeName} to="0" />
					<set begin="indefinite" class="to" {attributeName} to="1" />
					{letter}
				</tspan>
			{/each}
		</text>
	</g>
</svg>

<style>
	button {
		display: block;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 10%);
		border: none;
		border-radius: 2rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
		max-inline-size: 16rem;
		inline-size: 100%;
		block-size: auto;
	}
</style>
