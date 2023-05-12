<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let svg = null;
	let canAnimate = true;

	onMount(() => {
		svg.querySelector('animate').addEventListener('endEvent', handleEnd);

		return () => {
			svg.querySelector('animate').removeEventListener('endEvent', handleEnd);
		};
	});

	const handleClick = () => {
		if (!canAnimate) return;
		canAnimate = false;

		svg.querySelector('animate').beginElement();
	};

	const handleEnd = () => {
		canAnimate = true;
	};
</script>

<div>
	{#if canAnimate}
		<button transition:scale on:click={handleClick}>Focus</button>
	{/if}
	<svg viewBox="-50 -50 100 100">
		<defs>
			<circle id="petri-dish-circle" r="48" stroke-width="4" />
			<clipPath id="petri-dish-clip">
				<use href="#petri-dish-circle" />
			</clipPath>
			<circle id="petri-dish-circle" />
			<symbol
				id="petri-dish-blob-0"
				viewBox="-36.523441314697266 -36.523441314697266 73.04688262939453 73.04688262939453"
				x="-10"
				y="-10"
				width="20"
				height="20"
			>
				<path
					fill="var(--c, hsl(0 0% 90%)"
					d="M 18.91159159743827 -30.632526883228262 Q 32.438436593083665 -23.404013147246584 35.03298214558903 -8.287952822430883 39.48657488945645 6.388302082662309 30.63252688322823 18.911591597438324 23.404013147246523 32.4384365930837 8.287952822430823 35.032982145589045 -6.388302082662096 39.486574889456485 -18.911591597438374 30.6325268832282 -32.43843659308374 23.404013147246474 -35.03298214558906 8.287952822430764 -39.48657488945647 -6.388302082662164 -30.6325268832283 -18.91159159743821 -23.404013147246644 -32.438436593083615 -8.287952822430704 -35.032982145589074 6.388302082662232 -39.48657488945646 18.91159159743827 -30.632526883228262"
				/>
			</symbol>
			<symbol
				id="petri-dish-blob-1"
				viewBox="-55.88996887207031 -45.611175537109375 90.7169189453125 84.23530578613281"
				x="-10"
				y="-10"
				width="20"
				height="20"
			>
				<path
					fill="var(--c, hsl(0 0% 90%)"
					d="M 21.01287955270919 -34.03614098136474Q 26.600153082695005 -5.587273529985808 34.0361409813647 21.012879552709247T -21.012879552709304 34.03614098136467T -34.03614098136478 -21.012879552709123T 21.01287955270919 -34.03614098136474"
				/>
			</symbol>
			<symbol
				id="petri-dish-blob-2"
				viewBox="-42.45773696899414 -43.45233917236328 84.91547393798828 86.90467834472656"
				x="-10"
				y="-10"
				width="20"
				height="20"
			>
				<path
					fill="var(--c, hsl(0 0% 90%)"
					d="M 21.01287955270919 -34.03614098136474Q 29.882767461208527 -15.813288414720603 39.98260251300507 1.1796170086263316T 18.969722960295968 35.215757989991076T -21.012879552709304 34.03614098136467T -39.98260251300507 -1.1796170086264686T -18.969722960295847 -35.21575798999113T 21.01287955270919 -34.03614098136474"
				/>
			</symbol>

			<symbol id="petri-dish-germ-0" viewBox="-45 -45 90 90" x="-10" y="-10" width="20" height="20">
				<g stroke="var(--c0, hsl(0 0% 30%))" stroke-linejoin="round" stroke-linecap="round">
					<g fill="none" stroke-width="12">
						<line x1="-12" y1="25" x2="-18" y2="37" />
						<line x1="-26" y1="8" x2="-39" y2="13" />
						<line x1="-25" y1="-12" x2="-37" y2="-18" />
						<line x1="-8" y1="-26" x2="-13" y2="-39" />
						<line x1="12" y1="-25" x2="18" y2="-37" />
						<line x1="26" y1="-8" x2="39" y2="-13" />
						<line x1="25" y1="12" x2="37" y2="18" />
						<line x1="8" y1="26" x2="13" y2="39" />
					</g>
					<path
						fill="var(--c1, hsl(0 0% 90%))"
						stroke-width="4"
						d="M -15.682576564520954 31.289883226019526Q -25.063882960061733 21.77828005556108 -33.21454484690358 11.036032376403705T -31.28988322601961 -15.682576564520787T -11.036032376403412 -33.21454484690368T 15.682576564521064 -31.289883226019473T 33.21454484690362 -11.036032376403591T 31.289883226019555 15.682576564520895T 11.03603237640377 33.21454484690356T -15.682576564520954 31.289883226019526"
					/>
				</g>
			</symbol>
			<symbol
				id="petri-dish-germ-1"
				viewBox="-33.81818199157715 -34 66.6363639831543 65.79999923706055"
				x="-10"
				y="-10"
				width="20"
				height="20"
			>
				<path
					fill="var(--c1, hsl(0 0% 90%))"
					stroke="var(--c0, hsl(0 0% 30%))"
					stroke-width="4"
					stroke-linejoin="round"
					stroke-linecap="round"
					d="M 0 25 Q -14 37 -17 19 Q -35 19 -25 4 Q -40 -7 -22 -13 Q -26 -31 -9 -24 Q -1 -40 8 -24 Q 25 -31 21 -13 Q 39 -7 24 4 Q 34 19 16 19 Q 13 37 0 25"
				/>
			</symbol>
			<symbol
				id="petri-dish-germ-2"
				viewBox="-38.81818389892578 -36.11869812011719 73.98025512695312 73.93688201904297"
				x="-10"
				y="-10"
				width="20"
				height="20"
			>
				<path
					fill="var(--c1, hsl(0 0% 90%))"
					stroke="var(--c0, hsl(0 0% 30%))"
					stroke-width="4"
					stroke-linejoin="round"
					stroke-linecap="round"
					d="M 5 29 C -2 39 -10 38 -14 26 -19 23 -23 19 -27 14 -39 11 -40 2 -30 -5 -29 -11 -26 -16 -22 -21 -23 -34 -15 -38 -6 -30 1 -30 7 -30 13 -27 24 -32 30 -26 26 -15 28 -9 29 -3 29 4 37 13 33 21 21 20 16 24 11 27 5 29"
				/>
			</symbol>

			<g id="composition">
				<g>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(40 0) scale(0.61) rotate(121)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(16 11) scale(0.6) rotate(253)"
						href="#petri-dish-germ-2"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(32 23) scale(0.4) rotate(81)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(6 19) scale(0.72) rotate(7)"
						href="#petri-dish-germ-2"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(12 38) scale(0.75) rotate(247)"
						href="#petri-dish-germ-2"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(-7 19) scale(0.81) rotate(203)"
						href="#petri-dish-germ-2"
					/>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(-13 38) scale(1) rotate(217)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(-25 2) scale(1.32) rotate(225)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(-33 23) scale(0.78) rotate(147)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(-40 0) scale(0.44) rotate(228)"
						href="#petri-dish-germ-2"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(-33 -24) scale(0.9) rotate(215)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(-13 -39) scale(0.64) rotate(148)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(-13 -20) scale(0.64) rotate(70)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(7 -23) scale(1.22) rotate(290)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(12 -39) scale(0.51) rotate(104)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #1e939b; --c1: #267ca8"
						transform="translate(20 25) scale(0.51) rotate(50)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(17 3) scale(0.51) rotate(24)"
						href="#petri-dish-germ-1"
					/>
					<use
						style="--c0: #ee9024; --c1: #dc8543"
						transform="translate(18 -13) scale(0.8) rotate(94)"
						href="#petri-dish-germ-0"
					/>
					<use
						style="--c0: #d13928; --c1: #c7252c"
						transform="translate(32 -24) scale(0.93) rotate(49)"
						href="#petri-dish-germ-2"
					/>
				</g>
			</g>
		</defs>

		<use href="#petri-dish-circle" fill="none" stroke="#132851" />
		<g clip-path="url(#petri-dish-clip)">
			<rect x="-50" y="-50" fill="#a6bbed" width="100" height="100" />

			<g>
				<use
					style="--c: #9eb6e9"
					transform="translate(16 11) scale(1.49) rotate(284)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(32 23) scale(1.01) rotate(356)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #98b0e3"
					transform="translate(23 32) scale(0.69) rotate(72)"
					href="#petri-dish-blob-1"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(6 19) scale(1.4) rotate(212)"
					href="#petri-dish-blob-1"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(0 40) scale(0.99) rotate(49)"
					href="#petri-dish-blob-0"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-13 38) scale(0.66) rotate(200)"
					href="#petri-dish-blob-1"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-12 16) scale(0.9) rotate(185)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-24 32) scale(0.61) rotate(286)"
					href="#petri-dish-blob-1"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-40 0) scale(1.26) rotate(153)"
					href="#petri-dish-blob-0"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-20 -7) scale(0.75) rotate(68)"
					href="#petri-dish-blob-1"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-39 -13) scale(1.4) rotate(216)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-17 -12) scale(0.8) rotate(203)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-33 -24) scale(1.4) rotate(346)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(-7 -20) scale(1.3) rotate(298)"
					href="#petri-dish-blob-0"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(12 -39) scale(1.48) rotate(230)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #98b0e3"
					transform="translate(11 -17) scale(1.4) rotate(175)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #98b0e3"
					transform="translate(16 -12) scale(1.21) rotate(317)"
					href="#petri-dish-blob-0"
				/>
				<use
					style="--c: #98b0e3"
					transform="translate(32 -24) scale(1.49) rotate(354)"
					href="#petri-dish-blob-2"
				/>
				<use
					style="--c: #9eb6e9"
					transform="translate(19 -7) scale(1.3) rotate(127)"
					href="#petri-dish-blob-1"
				/>
			</g>

			<svg bind:this={svg} viewBox="-50 -50 100 100" x="-50" y="-50" width="100" height="100">
				<animate
					begin="indefinite"
					attributeName="viewBox"
					to="-10 -10 20 20"
					dur="3s"
					restart="whenNotActive"
					calcMode="spline"
					keyTimes="0; 1"
					keySplines="0.5 0 0.3 1"
				/>
				<use transform="scale(0.008 0.008)" href="#composition" />
				<use transform="scale(0.04 0.04)" href="#composition" />
				<use transform="scale(0.2 0.2)" href="#composition" />
				<use href="#composition" />
			</svg>
		</g>
	</svg>
</div>

<style>
	div {
		position: relative;
	}

	div > button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		cursor: pointer;
		color: hsl(40, 23%, 97%);
		background: hsl(30, 13%, 9%);
		letter-spacing: 1px;
		border: none;
		border-radius: 0.25rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
	}

	div > svg {
		display: block;
	}
</style>
