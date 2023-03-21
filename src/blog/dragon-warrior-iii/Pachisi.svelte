<script>
	import svg from './svg.js';

	let dice = null;
	let state = 'wait';

	const handleMove = (roll) => {
		console.log(roll);
	};

	const handleRoll = async () => {
		if (state !== 'wait') return;

		state = 'roll';

		const duration = 1800;

		const roll = Math.floor(Math.random() * 6 + 1);

		const value = `#dice-${roll}`;
		const values = [
			...Array(28)
				.fill()
				.map((_, i) => `#roll-${i + 1}`),
			value
		].join(';');

		const dur = `${duration / 1000}s`;

		dice.querySelector('use').setAttribute('href', value);

		const animateTransform = dice.querySelector('animateTransform');
		const animate = dice.querySelector('animate');

		animateTransform.setAttribute('dur', dur);
		animate.setAttribute('dur', dur);
		animate.setAttribute('values', values);

		animateTransform.beginElement();
		animate.beginElement();

		setTimeout(() => {
			handleMove(roll);
		}, duration);
	};
</script>

{@html svg['dice']}

<div>
	<button on:click={handleRoll}> Roll </button>
	<svg
		bind:this={dice}
		style="display: block; --c0: #030f00; --c1: #ac3232; --c2: #eef2d9;"
		viewBox="0 0 1 3"
	>
		<g>
			<animateTransform
				begin="indefinite"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -2; 0 0; 0 -1.4; 0 0; 0 -0.6; 0 0"
				dur="1.8s"
				calcMode="spline"
				keySplines="0.2 0 0.5 1; 0.75 0 0.75 1; 0.3 0 0.5 1; 0.75 0 0.75 1; 0.4 0 0.5 1; 0.75 0 0.75 1"
			/>
			<use href="#roll-1" y="2" width="1" height="1">
				<animate begin="indefinite" attributeName="href" dur="1.8s" />
			</use>
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: 0.5rem;
	}

	div > svg {
		display: block;
		inline-size: 3.5rem;
		block-size: auto;
	}

	div button {
		background: none;
		margin: 0;
		display: block;
		padding: 0.2rem 0.5rem;
		font: inherit;
		line-height: 1;
		letter-spacing: 0.5px;
		font-weight: 700;
		border: 0.2rem solid currentColor;
	}
</style>
