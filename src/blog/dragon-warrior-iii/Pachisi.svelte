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
{@html svg['board']}

<svg viewBox="0 0 4 3">
	<defs>
		<use
			id="pachisi-grass"
			style="--c0: #030f00; --c2: #eef2d9;"
			href="#board-tile-grass"
			width="1"
			height="1"
		/>

		<g id="pachisi-goal">
			<use
				style="--c0: #030f00; --c1: #8c03ff; --c2: #eef2d9;"
				href="#board-tile-action"
				width="1"
				height="1"
			/>
			<g transform="translate(0 0)">
				<g transform="translate(0.5 0.5)">
					<use
						style="--c0: #030f00; --c1: #93ca27; --c2: #eef2d9;"
						href="#board-key"
						x="-0.25"
						y="-0.25"
						width="0.5"
						height="0.5"
					/>
				</g>
			</g>
		</g>

		{#each Array(3) as _, i}
			<g id="pachisi-forth-{i + 1}">
				<use
					style="--c0: #030f00; --c1: #da3900; --c2: #eef2d9;"
					href="#board-tile-action"
					width="1"
					height="1"
				/>
				<g transform="translate(0.5 0.5)">
					<path
						transform="translate(0 -0.25) rotate(180)"
						d="M 0 -0.25 l 0.075 0 0 0.1 0.05 0 0 0.05 -0.1 0.1 -0.05 0 -0.1 -0.1 0 -0.05 0.05 0 0 -0.1"
						fill="#f3f6f5"
					/>
					<g
						transform="translate(0 0.2)"
						fill="#d39854"
						stroke="#030f00"
						paint-order="stroke"
						stroke-width="0.06"
						stroke-linejoin="bevel"
						text-anchor="middle"
						font-size="0.25"
						word-spacing="-0.12"
						font-family="monospace"
					>
						<text>+ {i + 1}</text>
					</g>
				</g>
				<g />
			</g>
			<g id="pachisi-back-{i + 1}">
				<use
					style="--c0: #030f00; --c1: #1348ee; --c2: #eef2d9;"
					href="#board-tile-action"
					width="1"
					height="1"
				/>
				<g transform="translate(0.5 0.5)">
					<path
						d="M 0 -0.25 l 0.075 0 0 0.1 0.05 0 0 0.05 -0.1 0.1 -0.05 0 -0.1 -0.1 0 -0.05 0.05 0 0 -0.1"
						fill="#f3f6f5"
					/>
					<g
						transform="translate(0 0.2)"
						fill="#d39854"
						stroke="#030f00"
						paint-order="stroke"
						stroke-width="0.06"
						stroke-linejoin="bevel"
						text-anchor="middle"
						font-size="0.25"
						word-spacing="-0.12"
						font-family="monospace"
					>
						<text>- {i + 1}</text>
					</g>
				</g>
			</g>
		{/each}
	</defs>
	<g transform="translate(0 0)">
		<use href="#pachisi-goal" />
	</g>
	<g transform="translate(1 0)">
		<use href="#pachisi-grass" />
	</g>
	<g transform="translate(2 0)">
		<use href="#pachisi-grass" />
	</g>
	<g transform="translate(3 0)">
		<use href="#pachisi-grass" />
	</g>
	<g transform="translate(0 1)">
		<use href="#pachisi-forth-1" />
	</g>
	<g transform="translate(1 1)">
		<use href="#pachisi-forth-2" />
	</g>
	<g transform="translate(2 1)">
		<use href="#pachisi-forth-3" />
	</g>
	<g transform="translate(3 1)">
		<use href="#pachisi-grass" />
	</g>
	<g transform="translate(0 2)">
		<use href="#pachisi-back-1" />
	</g>
	<g transform="translate(1 2)">
		<use href="#pachisi-back-2" />
	</g>
	<g transform="translate(2 2)">
		<use href="#pachisi-back-3" />
	</g>
	<g transform="translate(3 2)">
		<use href="#pachisi-grass" />
		<g />
	</g>

	<g transform="translate(3 2)">
		<g transform="translate(0.5 0.5)">
			<use
				style="--c0: #030f00; --c1: #b15116; --c2: #eef2d9;"
				href="#board-player-0"
				x="-0.25"
				y="-0.25"
				width="0.5"
				height="0.5"
			>
				<animate
					attributeName="href"
					values="#board-player-0; #board-player-1"
					dur="0.25s"
					begin="click"
					repeatCount="2"
				/>
			</use>
		</g>
	</g>
</svg>

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
