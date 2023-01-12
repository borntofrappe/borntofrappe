<script>
	import { onMount } from 'svelte';
	import { tweened, spring } from 'svelte/motion';
	import { elasticOut as easing } from 'svelte/easing';

	let start;
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

	const scale = spring(0, {
		stiffness: 0.2,
		damping: 0.5
	});

	const bounce = tweened(1, {
		duration: 1000,
		easing
	});

	const translate = spring(0, {
		stiffness: 0.1,
		damping: 0.8
	});

	const rotate = spring(0, {
		stiffness: 0.1,
		damping: 0.2
	});

	const skewX = spring(0, {
		stiffness: 0.2,
		damping: 0.2
	});

	const handleStart = () => {
		start = true;
		scale.set(1);
	};

	const handleEnd = () => {
		start = false;
		scale.set(0);
	};

	const handleMove = ({ offsetX }) => {
		const x = offsetX / w - 0.5;
		rotate.set(x * 30);
		translate.set(x * 30);
		skewX.set(x * 10 * -1);
	};

	const handleMousedown = () => bounce.set(1.1);
	const handleMouseup = () => bounce.set(1);
</script>

<svelte:window on:resize={handleSize} />

<svg
	viewBox="-60 -30 120 130"
	class:start
	bind:this={svg}
	on:mouseenter={handleStart}
	on:mouseleave={handleEnd}
	on:touchstart|preventDefault={handleStart}
	on:touchend|preventDefault={handleEnd}
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={(e) => {
		const { pageX: x } = e.touches[0];
		handleMove({
			offsetX: x - l
		});
	}}
>
	<defs>
		<pattern id="p" viewBox="-8 -8 16 16" width="10" height="10" patternUnits="userSpaceOnUse">
			<g transform="scale({$bounce ** 3})">
				<g transform="scale({$scale})">
					<path fill="#35cce9" d="M 0 0 q 2 2 2 4 a 2 2 0 0 1 -4 0 q 0 -2 2 -4" />
				</g>
			</g>
		</pattern>
		<circle id="c" r="11" />
		<mask id="m">
			<use href="#c" fill="white" />
			<g transform="rotate({$rotate})">
				<use href="#c" y="-2" fill="black" />
			</g>
		</mask>
		<g id="cc">
			<use href="#c" />
			<use href="#c" fill="black" mask="url(#m)" opacity="0.1" />
		</g>
		<g id="ccc">
			<g fill="#ebf3f5">
				<use href="#c" />
				<use transform="translate(-12.5 -5)" href="#c" />
				<use transform="translate(12.5 -5)" href="#c" />
				<use transform="translate(0 -10)" href="#c" />
				<use transform="translate(-20 0) rotate(20)" href="#cc" />
				<use transform="translate(20 0) rotate(-20)" href="#cc" />
				<use transform="translate(-15 10) rotate(10)" href="#cc" />
				<use transform="translate(15 10) rotate(-10)" href="#cc" />
				<use transform="translate(0 15)" href="#cc" />
			</g>
		</g>
	</defs>
	<g transform="translate({$translate} 0)">
		<g transform="skewX({$skewX})">
			<g class="raindrop">
				<rect fill="url(#p)" x="-30" width="60" height="100" />
			</g>
		</g>

		<g transform="scale({$bounce})">
			<use href="#ccc" transform="scale(1.2)" />

			<g fill="#f9a3c6">
				<g transform="translate(12.5 3)">
					<ellipse transform="scale({$scale})" rx="4" ry="2" />
				</g>
				<g transform="translate(-12.5 3)">
					<ellipse transform="scale({$scale})" rx="4" ry="2" />
				</g>
			</g>

			<g fill="#acacfa">
				<g transform="translate(12.5 -2.5)">
					<circle transform="scale({$bounce})" r="3" />
				</g>
				<g transform="translate(-12.5 -2.5)">
					<circle transform="scale({$bounce})" r="3" />
				</g>
			</g>

			<g
				fill="#acacfa"
				stroke="#acacfa"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<g transform="translate(0 10)">
					<path d="M -2 0 h 4" />
					<g transform="scale({$bounce})">
						<g transform="scale({$scale})">
							<path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	svg .raindrop {
		opacity: 1;
		animation: raindrop 0.75s linear infinite;
		animation-play-state: paused;
	}

	svg.start .raindrop {
		animation-play-state: running;
	}

	@keyframes raindrop {
		to {
			transform: translateY(10px);
		}
	}
</style>
