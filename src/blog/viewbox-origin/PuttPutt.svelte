<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let svg = null;
	let canAnimate = false;

	onMount(() => {
		canAnimate = true;
	});

	const handleClick = () => {
		canAnimate = false;
		svg.querySelector('#puttPuttStrike').beginElement();
	};

	const durs = {
		strike: 1,
		motion: 4
	};
</script>

<div>
	{#if canAnimate}
		<button out:scale on:click|once={handleClick}>Putt putt!</button>
	{/if}

	<svg bind:this={svg} viewBox="0 0 36 36">
		<defs>
			<g id="putt-putt-cloud-0">
				<rect width="6" height="2.4" rx="1.2" />
				<rect x="1" y="1.2" width="6" height="2.4" rx="1.2" />
			</g>
			<g id="putt-putt-cloud-1">
				<circle cx="4" cy="1.75" r="1.25" />
				<circle cx="2" cy="1.5" r="1.5" />
				<rect y="1.5" width="6" height="2" rx="1" />
			</g>
			<g id="putt-putt-cloud-2">
				<circle cx="5.25" cy="1.75" r="2" />
				<circle cx="2" cy="1.75" r="1.25" />
				<circle cx="4" cy="2" r="1.25" />
				<rect y="1.5" width="8" height="2.2" rx="1.1" />
			</g>
			<g id="putt-putt-cloud-3">
				<rect x="2" width="6" height="2" rx="1" />
				<rect x="0" y="1" width="10" height="2" rx="1" />
				<rect x="1" y="2" width="6" height="2" rx="1" />
			</g>

			<path id="putt-putt-grass-0" d="M 0 0 l 1 -2.5 0.75 2.5 l 1.25 -3 1.5 3 l 0.75 -2.5 1 2.5" />
			<path id="putt-putt-grass-1" d="M 0 0 l 0.75 -2 1 2 l 1 -2.5 1.5 2.5" />
			<use
				id="putt-putt-grass-2"
				href="#putt-putt-grass-0"
				transform="translate(7.75) scale(-1 1)"
			/>
			<use
				id="putt-putt-grass-3"
				href="#putt-putt-grass-1"
				transform="translate(4.25) scale(-1 1)"
			/>

			<path id="putt-putt-path" d="M 0 0 h 164" />

			<symbol
				id="putt-putt-sparkle"
				viewBox="-23.204545974731445 -24 45.409088134765625 43.56756591796875"
				x="-1.5"
				y="-1.5"
				width="3"
				height="3"
			>
				<path
					fill="#ffdb47"
					d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15"
				/>
			</symbol>
		</defs>

		<animate
			begin="puttPuttMotion.begin"
			attributeName="viewBox"
			to="164 0 36 36"
			dur={durs.motion}
			fill="freeze"
			calcMode="spline"
			keyTimes="0; 1"
			keySplines="0.1 0 0.5 1"
		/>

		<rect fill="#b5e7de" width="200" height="40" />
		<g fill="#f3f1f3">
			<use transform="translate(26 5)" href="#putt-putt-cloud-0" />
			<use transform="translate(52 8)" href="#putt-putt-cloud-1" />
			<use transform="translate(70 4)" href="#putt-putt-cloud-3" />
			<use transform="translate(100 6)" href="#putt-putt-cloud-2" />
			<use transform="translate(126 2)" href="#putt-putt-cloud-3" />
			<use transform="translate(145 9)" href="#putt-putt-cloud-2" />
			<use transform="translate(168 3)" href="#putt-putt-cloud-1" />
		</g>

		<g transform="translate(0 28)">
			<rect fill="#40d1a6" width="200" height="8" />
			<g fill="#15a47b">
				<use transform="translate(6 6)" href="#putt-putt-grass-0" />
				<use transform="translate(38 3)" href="#putt-putt-grass-1" />
				<use transform="translate(96 3)" href="#putt-putt-grass-1" />
				<use transform="translate(134 3)" href="#putt-putt-grass-2" />
				<use transform="translate(192 6)" href="#putt-putt-grass-3" />
			</g>

			<g transform="translate(18 2.5)">
				<g transform="translate(165.5 0.5)">
					<ellipse fill="#25666e" rx="2.4" ry="1" />
					<g transform="translate(1 1)">
						<path fill="#dddee0" d="M 0 0 v -24 h 1.2 v 24z" />
						<ellipse fill="#dddee0" cx="0.6" rx="0.6" ry="0.3" />
						<ellipse fill="#f3f1f3" cx="0.6" cy="-24" rx="0.6" ry="0.3" />
						<path fill="#f9a72a" d="M 0 -23 l -8 4 8 3.5" />
					</g>
				</g>

				<g transform="translate(0.5 -16.5)">
					<g transform="rotate(0)">
						<animateTransform
							id="puttPuttStrike"
							begin="indefinites"
							attributeName="transform"
							type="rotate"
							values="0; 4; -7; 0"
							dur={durs.strike}
							fill="freeze"
							calcMode="spline"
							keySplines="0.5 0 0.5 1; 0.8 0 0.3 1; 0.5 0 0.5 1"
						/>
						<g stroke-width="0.5" stroke-linejoin="round">
							<path fill="none" stroke="#a3a1a1" d="M 0 0 v 15" />
							<path fill="#b6cea6" stroke="#b6cea6" d="M 0 15 l -2.4 0.25 0 2.25 0.4 0 2 -0.5" />
							<path fill="#a3a1a1" stroke="#a3a1a1" d="M 0 15 l -2 0.5 0 2 2 -0.5z" />
						</g>
						<rect fill="#5a413c" x="-0.6" width="1.2" height="4" rx="0.5" />
					</g>
				</g>

				<g transform="translate(0 0)">
					<animateMotion
						id="puttPuttMotion"
						begin="puttPuttStrike.end - {durs.strike / 2}s"
						dur={durs.motion}
						fill="freeze"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.1 0 0.5 1"
					>
						<mpath href="#putt-putt-path" />
					</animateMotion>
					<animateTransform
						id="puttPuttFall"
						begin="puttPuttMotion.end"
						attributeName="transform"
						type="translate"
						values="0 0; 0.5 5"
						dur="0.25s"
						fill="freeze"
						calcMode="spline"
						keySplines="0.5 0 0.5 1"
					/>
					<g transform="rotate(0)">
						<animateTransform
							begin="puttPuttMotion.begin"
							end="puttPuttFall.end"
							attributeName="transform"
							type="rotate"
							to="360"
							dur="0.5s"
							fill="freeze"
							repeatCount="indefinite"
						/>
						<circle fill="#f3f1f3" r="1" />
						<g fill="#dddee0">
							<circle r="0.15" cx="-0.65" cy="0.2" />
							<circle r="0.15" cx="-0.35" cy="0.6" />
							<circle r="0.15" cx="0.15" cy="0.7" />
						</g>
					</g>
				</g>

				<g transform="translate(165.5 0.5)">
					<g transform="translate(0 3)">
						<g>
							<animateMotion begin="puttPuttFall.end" dur="0.6s" path="M 0 0 c 0 -3 3 -7 5 -5" />
							<use href="#putt-putt-sparkle">
								<animateTransform
									begin="puttPuttFall.end"
									attributeName="transform"
									type="scale"
									values="1 1; 1 1; 0 0"
									dur="0.6s"
									fill="freeze"
								/>
							</use>
						</g>
						<g>
							<animateMotion begin="puttPuttFall.end" dur="0.6s" path="M 0 0 c 0 -3 -3 -7 -5 -5" />
							<use href="#putt-putt-sparkle">
								<animateTransform
									begin="puttPuttFall.end"
									attributeName="transform"
									type="scale"
									values="1 1; 1 1; 0 0"
									dur="0.6s"
									fill="freeze"
								/>
							</use>
						</g>
						<g>
							<animateMotion begin="puttPuttFall.end" dur="0.65s" path="M 0 0 v -8" />
							<use href="#putt-putt-sparkle">
								<animateTransform
									begin="puttPuttFall.end"
									attributeName="transform"
									type="scale"
									values="1 1; 1 1; 0 0"
									dur="0.65s"
									fill="freeze"
								/>
							</use>
						</g>
					</g>

					<path fill="#40d1a6" d="M -2.4 0 c 0 1.2 4.8 1.2 4.8 0 v 40 h -4.8z" />
				</g>
			</g>

			<g fill="#15a47b">
				<use transform="translate(60 6)" href="#putt-putt-grass-3" />
				<use transform="translate(78 5)" href="#putt-putt-grass-2" />
				<use transform="translate(118 6)" href="#putt-putt-grass-3" />
				<use transform="translate(158 7)" href="#putt-putt-grass-0" />
			</g>
		</g>
	</svg>
</div>

<style>
	div {
		position: relative;
		max-inline-size: 28rem;
	}

	div > button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		color: hsl(215, 86%, 97%);
		background: hsl(200, 30%, 24%);
		border: none;
		border-radius: 1rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
	}

	svg {
		display: block;
	}
</style>
