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

<article style="height: {height}px" bind:this={article} on:click={handleSearch}>
	{#if isFound}
		<svg
			in:raise
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			style="position: absolute; left: {seal.column * resolution}px; top: {(seal.row - 1) *
				resolution}px"
			viewBox="0 -0.5 10 10"
			width={resolution}
			height={resolution}
			shape-rendering="crispEdges"
		>
			<g stroke="currentColor">
				<path
					class="c1"
					d="M4 0h4M2 1h2M8 1h1M1 2h1M9 2h1M1 3h1M9 3h1M0 4h1M9 4h1M0 5h1M3 5h1M8 5h2M0 6h1M8 6h2M0 7h2M6 7h3M1 8h7M2 9h4"
				/>
				<path
					class="c2"
					d="M4 1h1M6 1h2M6 2h3M2 3h2M5 3h1M8 3h1M4 4h1M7 4h1M1 5h1M5 5h1M7 5h1M1 6h1M5 6h1M7 6h1M2 7h2M5 7h1"
				/>
				<path
					class="c3"
					d="M5 1h1M2 2h4M4 3h1M6 3h2M1 4h3M5 4h2M8 4h1M2 5h1M4 5h1M6 5h1M2 6h3M6 6h1M4 7h1"
				/>
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
					width="1em"
					height="1em"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					shape-rendering="crispEdges"
				>
					<g stroke="currentColor">
						<g transform="translate(0 0.5)">
							<path
								class="c1"
								d="M0 0h2M5 0h6M14 0h4M21 0h6M30 0h2M0 1h1M2 1h4M10 1h4M15 1h2M18 1h4M26 1h4M31 1h1M0 2h1M4 2h1M11 2h1M15 2h6M27 2h1M31 2h1M1 3h3M12 3h1M14 3h1M17 3h1M19 3h1M28 3h1M30 3h1M1 4h1M3 4h2M11 4h3M17 4h1M19 4h2M27 4h3M1 5h1M3 5h1M5 5h6M12 5h1M17 5h1M19 5h1M21 5h6M28 5h1M1 6h1M3 6h1M6 6h1M9 6h1M12 6h1M17 6h1M19 6h2M22 6h1M25 6h1M28 6h1M1 7h1M3 7h1M6 7h1M9 7h1M12 7h1M16 7 h 1M20 7h1M22 7h1M25 7h1M28 7h1M0 8h2M3 8h2M8 8h7M16 8h5M26 8h2M0 9h1M4 9h2M8 9h1M14 9h1M16 9h1M19 9h3M24 9h7M0 10h4M8 10h1M14 10h1M17 10h2M19 10h1M24 10h1M30 10h1M0 11h1M3 11h4M8 11h2M13 11h2M18 11h5M24 11h1M30 11h1M1 12h2M4 12h1M9 12h2M12 12h2M18 12h1M20 12h1M24 12h2M29 12h2M2 13h1M4 13h1M10 13h3M18 13h1M20 13h1M25 13h2M28 13h2M2 14h6M11 14h1M19 14h2M24 14h5M3 15h1M8 15h4M20 15h4M28 15h1"
							/>
							<path
								class="c2"
								d="M1 1h1M6 1h4M14 1h1M17 1h1M22 1h4M30 1h1M1 2h3M5 2h1M10 2h1M12 2h3M21 2h1M26 2h1M28 2h3M4 3h1M11 3h1M13 3h1M18 3 h1M20 3h1M27 3h1M29 3h1M2 4h1M5 4h6M18 4h1M21 4h6M2 5h1M18 5h1M2 6h1M5 6h1M7 6h2M10 6h1M18 6h1M21 6h1M23 6h2M26 6h1M2 7h1M5 7h1M7 7h2M10 7h1M17 7h3M21 7h1M23 7h2M26 7h1M2 8h1M6 8h2M22 8h4M1 9h3M9 9h2M12 9h2M17 9h2M10 10h3M25 10h2M28 10h2M1 11h2M7 11h1M11 11h1M23 11h1M26 11h3M3 12h1M11 12h1M19 12h1M27 12h1M3 13h1M19 13h1M27 13h1M4 15h4M24 15h4"
							/>
							<path
								class="c3"
								d="M6 2h4M22 2h4M5 3h6M21 3h6M4 5h1M11 5h1M20 5h1M27 5h1M4 6h1M11 6h1M27 6h1M4 7h1M11 7h1M27 7h1M5 8h1M21 8h1M6 9h2M11 9h1M22 9h2M4 10h4M9 10h1M13 10h1M20 10h4M27 10h1M10 11h1M12 11h1M25 11h1M29 11h1M5 12h4M21 12h3M26 12h1M28 12h1M5 13h5M21 13h4M8 14h3M21 14h3"
							/>
						</g>
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
				<strong>Loto Seal</strong> is around here in a tile {resolution}
				pixels wide and tall. Feel free to look for the precious item, it might be just a click away.
			</p>
		{/if}
	</div>
</article>

<style>
	article {
		width: 100%;
		margin: 1rem auto;
		color: hsl(210, 24%, 16%);
		color: var(--cool-grey-900);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges"%3E%3Cpath stroke="hsl(210, 24%25, 16%25)" d="M0 0h1M6 0h1M9 0h2M15 0h1M0 1h16M3 2h1M8 2h1M12 2h2M0 3h16M0 4h2M5 4h1M10 4h1M0 5h16M2 6h2M8 6h1M13 6h2M0 7h16M0 8h1M6 8h1M9 8h2M15 8h1M0 9h16M3 10h1M8 10h1M12 10h2M0 11h16M0 12h2M5 12h1M10 12h1M0 13h16M2 14h2M8 14h1M13 14h2M0 15h16" /%3E%3Cpath stroke="hsl(209, 20%25, 25%25)" d="M1 0h1M5 0h1M7 0h2M11 0h1M14 0h1M2 2h1M4 2h1M7 2h1M9 2h1M11 2h1M14 2h1M2 4h1M4 4h1M6 4h1M9 4h1M11 4h1M15 4h1M1 6h1M4 6h1M7 6h1M9 6h1M12 6h1M15 6h1M1 8h1M5 8h1M7 8h2M11 8h1M14 8h1M2 10h1M4 10h1M7 10h1M9 10h1M11 10h1M14 10h1M2 12h1M4 12h1M6 12h1M9 12 h1M11 12h1M15 12h1M1 14h1M4 14h1M7 14h1M9 14h1M12 14h1M15 14h1" /%3E%3Cpath stroke="hsl(209, 18%25, 30%25)" d="M2 0h3M12 0h2M0 2h2M5 2h2M10 2h1M15 2h1M3 4h1M7 4h2M12 4h3M0 6h1M5 6h2M10 6h2M2 8h3M12 8h2M0 10h2M5 10h2M10 10h1M15 10h1M3 12h1M7 12h2M12 12h3M0 14h1M5 14h2M10 14h2" /%3E%3C/svg%3E');
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
			color: hsl(210, 58%, 9%);
			color: var(--blue-grey-900);
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 16 16" shape-rendering="crispEdges"%3E%3Cpath stroke="hsl(212, 39%25, 19%25)" d="M0 0h1M6 0h1M9 0h2M15 0h1M0 1h16M3 2h1M8 2h1M12 2h2M0 3h16M0 4h2M5 4h1M10 4h1M0 5h16M2 6h2M8 6h1M13 6h2M0 7h16M0 8h1M6 8h1M9 8h2M15 8h1M0 9h16M3 10h1M8 10h1M12 10h2M0 11h16M0 12h2M5 12h1M10 12h1M0 13h16M2 14h2M8 14h1M13 14h2M0 15h16" /%3E%3Cpath stroke="hsl(210, 34%25, 28%25)" d="M1 0h1M5 0h1M7 0h2M11 0h1M14 0h1M2 2h1M4 2h1M7 2h1M9 2h1M11 2h1M14 2h1M2 4h1M4 4h1M6 4h1M9 4h1M11 4h1M15 4h1M1 6h1M4 6h1M7 6h1M9 6h1M12 6h1M15 6h1M1 8h1M5 8h1M7 8h2M11 8h1M14 8h1M2 10h1M4 10h1M7 10h1M9 10h1M11 10h1M14 10h1M2 12h1M4 12h1M6 12h1M9 12 h1M11 12h1M15 12h1M1 14h1M4 14h1M7 14h1M9 14h1M12 14h1M15 14h1" /%3E%3Cpath stroke="hsl(210, 28%25, 37%25)" d="M2 0h3M12 0h2M0 2h2M5 2h2M10 2h1M15 2h1M3 4h1M7 4h2M12 4h3M0 6h1M5 6h2M10 6h2M2 8h3M12 8h2M0 10h2M5 10h2M10 10h1M15 10h1M3 12h1M7 12h2M12 12h3M0 14h1M5 14h2M10 14h2" /%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) article {
		color: hsl(210, 58%, 9%);
		color: var(--blue-grey-900);
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
		border-radius: 0.5rem;
		border: 0.2rem solid hsl(330, 79%, 56%);
		border: 0.2rem solid currentColor;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) p,
		:global(html:not([data-preference])) button {
			background: hsl(211, 36%, 95%);
			background: var(--blue-grey-000);
		}
	}

	:global(html[data-preference='dark']) p,
	:global(html[data-preference='dark']) button {
		background: hsl(211, 36%, 95%);
		background: var(--blue-grey-000);
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
		width: 48px;
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
