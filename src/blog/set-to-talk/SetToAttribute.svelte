<script>
	export let attributeName = 'opacity';

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
		});
	};
</script>

<button on:click={handleAnimation}>Animate</button>

<svg bind:this={svg} viewBox="0 -18 80 19">
	<g fill="currentColor" font-family="sans-serif" font-size="16">
		<text>
			{#each 'Hi there!'.split('') as letter, i}
				<tspan>
					<set class="from" {attributeName} to="0" />
					<set class="to" {attributeName} to="1" begin="indefinite" />
					{letter}
				</tspan>
			{/each}
		</text>
	</g>
</svg>

<style>
	svg {
		display: block;
		max-inline-size: 16rem;
		inline-size: 100%;
		block-size: auto;
	}
</style>
