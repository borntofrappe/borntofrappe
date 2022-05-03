<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let scale = spring(0.7, {
		stiffness: 0.1,
		damping: 0.2
	});

	let offset = spring(0, {
		stiffness: 0.1,
		damping: 0.2
	});

	let angle = spring(-20, {
		stiffness: 0.2,
		damping: 0.4
	});

	let svg;
	let l;
	let w;

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { left, width } = svg.getBoundingClientRect();
		l = left;
		w = width;
	};

	const handleStart = () => {
		scale.set(1);
		offset.set(2);
	};

	const handleEnd = () => {
		scale.set(0.7);
		offset.set(0);
	};

	const handleMove = ({ offsetX }) => {
		const degrees = (offsetX / w - 0.5) * 40;
		angle.set(degrees);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-30 -35 60 80"
	bind:this={svg}
	on:mouseenter={handleStart}
	on:touchstart|preventDefault={handleStart}
	on:mouseleave={handleEnd}
	on:touchend|preventDefault={handleEnd}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={(e) => {
		const { pageX: x } = e.touches[0];
		handleMove({
			offsetX: x - l
		});
	}}
>
	<defs>
		<g id="bb">
			<g transform="scale({$scale})">
				<g fill="#f6c159">
					<circle id="b" r="4" />
				</g>
				<use transform="scale(0.4)" y="-4" href="#b" fill="#f1daae" />
			</g>
		</g>

		<g id="ff">
			<g transform="scale({$scale})">
				<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g fill="#f04545" stroke="#f04545">
						<path id="f" d="M 0 1 c -3.5 0 -4.5 -4.5 0 -6.5 4.5 1.5 3.5 6.5 0 6.5" />
					</g>
					<g fill="#e8da38" stroke="#e8da38">
						<use transform="scale(0.6)" href="#f" />
					</g>
				</g>
			</g>
		</g>
	</defs>

	<g transform="translate(0 5)">
		<g class="translate">
			<g>
				<use transform="translate(10 0) rotate(30)" href="#bb" />
			</g>
			<g>
				<use transform="rotate(-30) scale(0.7)" href="#bb" />
			</g>
			<g>
				<use transform="translate(-10 0) rotate(-30) scale(0.8)" href="#bb" />
			</g>
			<g>
				<use transform="rotate(-30) scale(0.9)" href="#bb" />
			</g>
		</g>
	</g>

	<g fill="none" stroke="#e18434" stroke-width="5" stroke-linecap="round">
		<g transform="translate(0 40)">
			<g transform="rotate({$angle})">
				<g transform="scale(1 -1)">
					<path d="M 0 48 v -30" />
				</g>
			</g>
		</g>
	</g>

	<g fill="none" stroke="#2e2e2c" stroke-width="6" stroke-linecap="round">
		<g id="l">
			<g transform="rotate(20) translate(0 35)">
				<path d="M 0 0 v 8" />
			</g>
		</g>
		<use transform="scale(-1 1)" href="#l" />
	</g>

	<g fill="#2e2e2c">
		<rect x="-20" width="40" height="8" rx="4" />
		<path d="M -16 4 a 22 22 0 1 0 32 0" />
	</g>

	<g transform="translate(0 42)">
		<g class="scale">
			<g id="fff">
				<use transform="translate(8 0) scale(0.8) rotate(28)" href="#ff" />
				<use transform="translate(4 0) scale(0.9) rotate(16)" href="#ff" />
			</g>
			<use transform="scale(-1 1)" href="#fff" />
			<use href="#ff" />
		</g>
	</g>

	<g fill="#edb927">
		<g transform="translate(2.5 1)">
			<g id="sss">
				<rect id="s" x="-1.5" y="-1.5" width="3" height="7" rx="1.5" />
				<use transform="translate(4.1 0) scale(1.2)" href="#s" />
				<use transform="translate(8 0) scale(0.8)" href="#s" />
			</g>
			<g transform="translate(0 {$offset})">
				<use href="#sss" />
			</g>
		</g>
		<path d="M -3 0 h 16" stroke="#edb927" stroke-width="4" stroke-linecap="round" />
	</g>
</svg>

<style>
	.translate > g {
		animation: translate infinite 6s ease-in-out;
	}

	.translate > g:nth-of-type(1) {
		animation-delay: 1.5s;
	}

	.translate > g:nth-of-type(2) {
		animation-delay: 3s;
	}

	.translate > g:nth-of-type(3) {
		animation-delay: 4s;
	}

	.scale {
		animation: scale infinite alternate 4s;
	}

	@keyframes translate {
		to {
			transform: translateY(-25px);
		}
	}

	@keyframes scale {
		to {
			transform: scale(0.9);
		}
	}
</style>
