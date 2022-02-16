<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const resolution = 48;
	const rows = 10;
	const height = resolution * rows;

	let article;
	let seal;
	let pointer;

	$: isFound = seal && pointer && seal.column === pointer.column && seal.row === pointer.row;

	function raise(_, { delay = 0, duration = 1000 }) {
		return {
			delay,
			duration,
			css: (t) => `transform: translateY(${resolution * (1 - t)}px)`
		};
	}

	function getCoords() {
		const { width } = article.getBoundingClientRect();
		const columns = Math.floor(width / resolution);

		const column = Math.floor(Math.random() * columns);
		const row = Math.floor(Math.random() * (rows - 1) + 1);

		return { column, row };
	}

	function handleSearch({ pageX: x, pageY: y }) {
		if (isFound) return;

		const { top, left } = article.getBoundingClientRect();

		const column = Math.floor((x - left) / resolution);
		const row = Math.floor((y - top - scrollY) / resolution);

		pointer = { column, row };
	}

	function handleNew() {
		isFound = false;
		pointer = null;
		seal = getCoords();
	}

	onMount(() => {
		seal = getCoords();

		window.addEventListener('resize', handleNew);
		return () => window.removeEventListener('resize', handleNew);
	});
</script>

<article
	class="bleed"
	style="height: {height}px; margin-top: {resolution}px"
	bind:this={article}
	on:click={handleSearch}
>
	{#if isFound}
		<svg
			in:raise
			style="position: absolute; left: {seal.column * resolution}px; top: {(seal.row - 1) *
				resolution}px"
			xmlns="http://www.w3.org/2000/svg"
			shape-rendering="crispEdges"
			viewBox="0 0 10 10"
			width={resolution}
			height={resolution}
		>
			<g fill="currentColor">
				<g class="c1"
					><path
						d="M4 0h4v1H4zM2 1h7v1H2zM1 2h9v2H1zM0 4h10v3H0zM0 7h9v1H0zM1 8h7v1H1zM2 9h5v1H2z"
					/></g
				><g class="c2"
					><path
						d="M4 1h4v1H4zM2 2h7v2H2zM1 4h8v1H1zM1 5h2v1H1zM4 5h4v1H4zM1 6h7v1H1zM2 7h4v1H2z"
					/></g
				><g class="c3"
					><path
						d="M5 1h1v1H5zM2 2h4v1H2zM4 3h1v1H4zM6 3h2v1H6zM1 4h3v1H1zM5 4h2v1H5zM8 4h1v1H8zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM2 6h3v1H2zM6 6h1v1H6zM4 7h1v1H4z"
					/></g
				>
			</g>
		</svg>
	{/if}

	<div>
		{#if isFound}
			<p in:fade>
				You found <strong>Loto Seal</strong>. Congratulations!
			</p>
			<button in:fade={{ delay: 3000 }} on:click|stopPropagation={handleNew}>
				Search again?
				<svg
					xmlns="http://www.w3.org/2000/svg"
					shape-rendering="crispEdges"
					viewBox="0 0 16 16"
					width="1em"
					height="1em"
				>
					<g fill="currentColor">
						<g class="c1"
							><path
								d="M0 0h2v1H0zM5 0h6v1H5zM14 0h2v1h-2zM0 1h16v2H0zM1 3h14v1H1zM1 4h13v1H1zM1 5h12v3H1zM0 8h15v4H0zM1 12h13v1H1zM2 13h11v1H2zM2 14h10v1H2zM3 15h9v1H3z"
							/></g
						><g class="c2"
							><path
								d="M1 1h1v1H1zM6 1h4v1H6zM14 1h1v1h-1zM1 2h3v1H1zM5 2h1v1H5zM10 2h1v1h-1zM12 2h3v1h-3zM4 3h1v1H4zM11 3h1v1h-1zM13 3h1v1h-1zM2 4h1v1H2zM5 4h6v1H5zM2 5h1v1H2zM2 6h1v1H2zM5 6h1v1H5zM7 6h2v1H7zM10 6h1v1h-1zM2 7h1v1H2zM5 7h1v1H5zM7 7h2v1H7zM10 7h1v1h-1zM2 8h1v1H2zM6 8h2v1H6zM1 9h3v1H1zM9 9h2v1H9zM12 9h2v1h-2zM10 10h3v1h-3zM1 11h2v1H1zM7 11h1v1H7zM11 11h1v1h-1zM3 12h1v1H3zM11 12h1v1h-1zM3 13h1v1H3zM4 15h4v1H4z"
							/></g
						><g class="c3"
							><path
								d="M6 2h4v1H6zM5 3h6v1H5zM4 5h1v1H4zM11 5h1v1h-1zM4 6h1v1H4zM11 6h1v1h-1zM4 7h1v1H4zM11 7h1v1h-1zM5 8h1v1H5zM6 9h2v1H6zM11 9h1v1h-1zM4 10h4v1H4zM9 10h1v1H9zM13 10h1v1h-1zM10 11h1v1h-1zM12 11h1v1h-1zM5 12h4v1H5zM5 13h5v1H5zM8 14h3v1H8z"
							/></g
						><g class="c1"
							><path
								d="M16 0h2v1h-2zM21 0h6v1h-6zM30 0h2v1h-2zM16 1h16v2H16zM17 3h14v1H17zM17 4h13v1H17zM17 5h12v2H17zM16 7h13v1H16zM16 8h12v1H16zM16 9h15v1H16zM17 10h14v1H17zM18 11h13v2H18zM18 13h12v1H18zM19 14h10v1H19zM20 15h9v1h-9z"
							/></g
						><g class="c2"
							><path
								d="M17 1h1v1h-1zM22 1h4v1h-4zM30 1h1v1h-1zM21 2h1v1h-1zM26 2h1v1h-1zM28 2h3v1h-3zM18 3h1v1h-1zM20 3h1v1h-1zM27 3h1v1h-1zM29 3h1v1h-1zM18 4h1v1h-1zM21 4h6v1h-6zM18 5h1v1h-1zM18 6h1v1h-1zM21 6h1v1h-1zM23 6h2v1h-2zM26 6h1v1h-1zM17 7h3v1h-3zM21 7h1v1h-1zM23 7h2v1h-2zM26 7h1v1h-1zM22 8h4v1h-4zM17 9h2v1h-2zM25 10h2v1h-2zM28 10h2v1h-2zM23 11h1v1h-1zM26 11h3v1h-3zM27 12h1v1h-1zM19 12h1v1h-1zM27 13h1v1h-1zM19 13h1v1h-1zM24 15h4v1h-4z"
							/></g
						><g class="c3"
							><path
								d="M22 2h4v1h-4zM21 3h6v1h-6zM20 5h1v1h-1zM27 5h1v1h-1zM27 6h1v1h-1zM27 7h1v1h-1zM21 8h1v1h-1zM22 9h2v1h-2zM20 10h4v1h-4zM27 10h1v1h-1zM25 11h1v1h-1zM29 11h1v1h-1zM21 12h3v1h-3zM26 12h1v1h-1zM28 12h1v1h-1zM21 13h4v1h-4zM21 14h3v1h-3z"
							/></g
						>
					</g>
				</svg>
			</button>
		{:else if pointer}
			<p in:fade>
				Try {Math.abs(seal.row - pointer.row)} to the {seal.row - pointer.row > 0
					? 'south'
					: 'north'} and {Math.abs(seal.column - pointer.column)} to the {seal.column -
					pointer.column >
				0
					? 'east'
					: 'west'}
			</p>
		{:else}
			<p in:fade>
				<strong>Loto Seal</strong> is around here in a tile {resolution} pixels wide and tall. Feel free
				to look for the precious item, it might be just a click away.
			</p>
		{/if}
	</div>
</article>

<style>
	article {
		width: 100%;
		max-width: 1440px;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" viewBox="0 0 16 16" width="1em" height="1em"%3E%3Cpath d="M0 0h16v16H0z" fill="hsl(210, 24%25, 16%25)"/%3E%3Cg fill="hsl(209, 18%25, 30%25)"%3E%3Cpath d="M1 0h1v1H1zM5 0h1v1H5zM11 0h1v1h-1zM14 0h1v1h-1zM2 2h1v1H2zM4 2h1v1H4zM7 2h1v1H7zM9 2h1v1H9zM11 2h1v1h-1zM14 2h1v1h-1zM2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1h-1zM15 4h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM12 6h1v1h-1zM15 6h1v1h-1zM1 8h1v1H1zM5 8h1v1H5zM11 8h1v1h-1zM14 8h1v1h-1zM2 10h1v1H2zM4 10h1v1H4zM7 10h1v1H7zM9 10h1v1H9zM11 10h1v1h-1zM14 10h1v1h-1zM2 12h1v1H2zM4 12h1v1H4zM6 12h1v1H6zM9 12h1v1H9zM11 12h1v1h-1zM15 12h1v1h-1zM1 14h1v1H1zM4 14h1v1H4zM7 14h1v1H7zM9 14h1v1H9zM12 14h1v1h-1zM15 14h1v1h-1z"/%3E%3C/g%3E%3Cg fill="hsl(211, 12%25, 43%25)"%3E%3Cpath d="M2 0h3v1H2zM7 0h2v1H7zM12 0h2v1h-2zM0 2h2v1H0zM5 2h2v1H5zM10 2h1v1h-1zM15 2h1v1h-1zM3 4h1v1H3zM7 4h2v1H7zM12 4h3v1h-3zM0 6h1v1H0zM5 6h2v1H5zM10 6h2v1h-2zM2 8h3v1H2zM7 8h2v1H7zM12 8h2v1h-2zM0 10h2v1H0zM5 10h2v1H5zM10 10h1v1h-1zM15 10h1v1h-1zM3 12h1v1H3zM7 12h2v1H7zM12 12h3v1h-3zM0 14h1v1H0zM5 14h2v1H5zM10 14h2v1h-2z"/%3E%3C/g%3E%3C/svg%3E');
		background-size: 48px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem 0;
		z-index: 0;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) article {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges"%3E%3Cpath stroke="hsl(212, 39%25, 19%25)" d="M0 0h1M6 0h1M9 0h2M15 0h1M0 1h16M3 2h1M8 2h1M12 2h2M0 3h16M0 4h2M5 4h1M10 4h1M0 5h16M2 6h2M8 6h1M13 6h2M0 7h16M0 8h1M6 8h1M9 8h2M15 8h1M0 9h16M3 10h1M8 10h1M12 10h2M0 11h16M0 12h2M5 12h1M10 12h1M0 13h16M2 14h2M8 14h1M13 14h2M0 15h16" /%3E%3Cpath stroke="hsl(210, 34%25, 28%25)" d="M1 0h1M5 0h1M7 0h2M11 0h1M14 0h1M2 2h1M4 2h1M7 2h1M9 2h1M11 2h1M14 2h1M2 4h1M4 4h1M6 4h1M9 4h1M11 4h1M15 4h1M1 6h1M4 6h1M7 6h1M9 6h1M12 6h1M15 6h1M1 8h1M5 8h1M7 8h2M11 8h1M14 8h1M2 10h1M4 10h1M7 10h1M9 10h1M11 10h1M14 10h1M2 12h1M4 12h1M6 12h1M9 12 h1M11 12h1M15 12h1M1 14h1M4 14h1M7 14h1M9 14h1M12 14h1M15 14h1" /%3E%3Cpath stroke="hsl(210, 28%25, 37%25)" d="M2 0h3M12 0h2M0 2h2M5 2h2M10 2h1M15 2h1M3 4h1M7 4h2M12 4h3M0 6h1M5 6h2M10 6h2M2 8h3M12 8h2M0 10h2M5 10h2M10 10h1M15 10h1M3 12h1M7 12h2M12 12h3M0 14h1M5 14h2M10 14h2" /%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) article {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges"%3E%3Cpath stroke="hsl(212, 39%25, 19%25)" d="M0 0h1M6 0h1M9 0h2M15 0h1M0 1h16M3 2h1M8 2h1M12 2h2M0 3h16M0 4h2M5 4h1M10 4h1M0 5h16M2 6h2M8 6h1M13 6h2M0 7h16M0 8h1M6 8h1M9 8h2M15 8h1M0 9h16M3 10h1M8 10h1M12 10h2M0 11h16M0 12h2M5 12h1M10 12h1M0 13h16M2 14h2M8 14h1M13 14h2M0 15h16" /%3E%3Cpath stroke="hsl(210, 34%25, 28%25)" d="M1 0h1M5 0h1M7 0h2M11 0h1M14 0h1M2 2h1M4 2h1M7 2h1M9 2h1M11 2h1M14 2h1M2 4h1M4 4h1M6 4h1M9 4h1M11 4h1M15 4h1M1 6h1M4 6h1M7 6h1M9 6h1M12 6h1M15 6h1M1 8h1M5 8h1M7 8h2M11 8h1M14 8h1M2 10h1M4 10h1M7 10h1M9 10h1M11 10h1M14 10h1M2 12h1M4 12h1M6 12h1M9 12 h1M11 12h1M15 12h1M1 14h1M4 14h1M7 14h1M9 14h1M12 14h1M15 14h1" /%3E%3Cpath stroke="hsl(210, 28%25, 37%25)" d="M2 0h3M12 0h2M0 2h2M5 2h2M10 2h1M15 2h1M3 4h1M7 4h2M12 4h3M0 6h1M5 6h2M10 6h2M2 8h3M12 8h2M0 10h2M5 10h2M10 10h1M15 10h1M3 12h1M7 12h2M12 12h3M0 14h1M5 14h2M10 14h2" /%3E%3C/svg%3E');
	}

	article > svg {
		z-index: 5;
		pointer-events: none;
	}

	div {
		max-width: 40ch;
		width: 90%;
	}

	div > * + * {
		margin-top: 1em;
	}

	p,
	button {
		background: hsl(216, 33%, 97%);
		background: var(--cool-grey-000);
		color: hsl(210, 24%, 16%);
		color: var(--cool-grey-900);
		border-radius: 0.5rem;
		border: 0.2rem solid currentColor;
	}

	p {
		line-height: 1.5;
		padding: 1rem;
	}

	strong {
		color: hsl(330, 79%, 56%);
		color: var(--accent-color);
	}

	button {
		color: inherit;
		display: flex;
		align-items: center;
		padding: 0.5rem 0.75rem;
		gap: 0 0.5rem;
		cursor: pointer;
	}

	button svg {
		width: 3em;
		height: auto;
	}

	button:hover svg > g {
		animation: step 0.5s infinite steps(2);
	}
	@keyframes step {
		to {
			transform: translate(-32px);
		}
	}
</style>
