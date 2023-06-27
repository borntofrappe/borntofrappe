<script>
	import { spring } from 'svelte/motion';

	const scale = spring(0, {
		stiffness: 0.2,
		damping: 0.5
	});

	const handleStart = () => {
		scale.set(1);
	};

	const handleEnd = () => {
		scale.set(0);
	};
</script>

<svg
	viewBox="-50 -50 100 100"
	on:mouseenter={handleStart}
	on:mouseleave={handleEnd}
	role="presentation"
>
	<defs>
		<circle id="serene-c" r="11" />
		<mask id="serene-mask">
			<use href="#serene-c" fill="white" />
			<use href="#serene-c" y="-2" fill="black" />
		</mask>
		<g id="serene-cc">
			<use href="#serene-c" />
			<use href="#serene-c" mask="url(#serene-mask)" fill="black" opacity="0.1" />
		</g>
	</defs>

	<g fill="#ebf3f5">
		<use href="#serene-c" />
		<use href="#serene-c" transform="translate(-12.5 -5)" />
		<use href="#serene-c" transform="translate(12.5 -5)" />
		<use href="#serene-c" transform="translate(0 -10)" />
		<use href="#serene-cc" transform="translate(-20 0)" />
		<use href="#serene-cc" transform="translate(20 0)" />
		<use href="#serene-cc" transform="translate(-15 10)" />
		<use href="#serene-cc" transform="translate(15 10)" />
		<use href="#serene-cc" transform="translate(0 15)" />
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
			<circle r="2.5" />
		</g>
		<g transform="translate(-10 -2.5)">
			<circle r="2.5" />
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
			<path d="M -2 0 h 4" />
			<g transform="scale({$scale})">
				<path d="M -2 0 v 2 a 2 2 0 0 0 4 0 v -2z" />
			</g>
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
