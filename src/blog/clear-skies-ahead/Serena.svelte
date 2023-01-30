<script>
	import { tweened, spring } from 'svelte/motion';
	import { elasticOut as easing } from 'svelte/easing';

	const scale = spring(0, {
		stiffness: 0.2,
		damping: 0.5
	});

	const bounce = tweened(1, {
		duration: 1000,
		easing
	});

	const handleStart = () => {
		scale.set(1);
		bounce.set(1.1);
	};

	const handleEnd = () => {
		scale.set(0);
		bounce.set(1);
	};
</script>

<svg
	viewBox="-40 -25 80 55"
	on:mouseenter={handleStart}
	on:mouseleave={handleEnd}
	on:touchstart|preventDefault={handleStart}
	on:touchend|preventDefault={handleEnd}
>
	<defs>
		<circle id="c" r="11" />
		<mask id="mask">
			<use fill="white" href="#c" />
			<use fill="black" y="-2" href="#c" />
		</mask>
		<g id="cc">
			<use href="#c" />
			<use href="#c" mask="url(#mask)" fill="black" opacity="0.1" />
		</g>
	</defs>

	<g transform="scale({$bounce})">
		<g fill="#ebf3f5">
			<use href="#c" />
			<use transform="translate(-12.5 -5)" href="#c" />
			<use transform="translate(12.5 -5)" href="#c" />
			<use transform="translate(0 -10)" href="#c" />
			<use transform="translate(-20 0)" href="#cc" />
			<use transform="translate(20 0)" href="#cc" />
			<use transform="translate(-15 10)" href="#cc" />
			<use transform="translate(15 10)" href="#cc" />
			<use transform="translate(0 15)" href="#cc" />
		</g>

		<g fill="#f9a3c6">
			<g transform="translate(10 2.5)">
				<g transform="scale({$scale})">
					<ellipse rx="2.5" ry="1.4" />
				</g>
			</g>
			<g transform="translate(-10 2.5)">
				<g transform="scale({$scale})">
					<ellipse rx="2.5" ry="1.4" />
				</g>
			</g>
		</g>

		<g fill="#acacfa">
			<g transform="translate(10 -2.5)">
				<g transform="scale({$bounce})">
					<circle r="2.5" />
				</g>
			</g>
			<g transform="translate(-10 -2.5)">
				<g transform="scale({$bounce})">
					<circle r="2.5" />
				</g>
			</g>
		</g>

		<g
			fill="#acacfa"
			stroke="#acacfa"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(0 8)">
				<path d="M -2 0 h 4" />
				<g transform="scale({$bounce})">
					<path d="M -2 0 h 4" />
					<g transform="scale({$scale})">
						<path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
