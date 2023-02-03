<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let svg;
	let w, h;

	const angle = spring(0);

	onMount(() => {
		handleSize();
	});

	const handleSize = () => {
		const { width, height } = svg.getBoundingClientRect();
		w = width;
		h = height;
	};

	const handleMove = (e) => {
		const { offsetX, offsetY } = e;
		const x = offsetX / w - 0.5;
		const y = offsetY / h - 0.5;

		const theta = Math.atan2(y, x);
		const degrees = (tetha * 180) / Math.PI + 90;

		angle.set(degrees);
	};
</script>

<svelte:window on:resize={handleSize} />

<svg viewBox="-50 -50 100 100" bind:this={svg} on:mousemove={handleMove}>
	<defs>
		<marker id="ladybird-m" viewBox="-1 -1 2 2">
			<circle r="1" fill="#38311e" />
		</marker>
	</defs>
	<g transform="rotate({$angle})">
		<g transform="translate(0 -20)">
			<g fill="none" stroke="#38311e" stroke-width="1.5" marker-end="url(#ladybird-m)">
				<path d="M 0 0 l 12 -14" />
				<path d="M 0 0 l -12 -14" />
			</g>
			<circle fill="#38311e" r="14" />
		</g>

		<g>
			<circle fill="#ff6c6c" r="25" />
			<g fill="#38311e">
				<g id="ladybird-dots">
					<circle cx="4" cy="-18" r="2" />
					<circle cx="8" cy="-8" r="4" />
					<circle cx="18" cy="-1" r="3" />
					<circle cx="6" cy="5" r="3" />
					<circle cx="14" cy="12" r="2" />
					<circle cx="4" cy="18" r="2" />
				</g>
				<use href="#ladybird-dots" transform="scale(-1 1)" />
			</g>
		</g>
	</g>
</svg>
