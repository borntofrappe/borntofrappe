<script>
	const frames = 6;
	const pixelsPerFrame = 60;
	let y = 0;
	$: x = Math.floor(y / pixelsPerFrame) % frames;
</script>

<svelte:window bind:scrollY={y} />

<svg style="display: block;" viewBox="0 0 1 1" shape-rendering="crispEdges">
	<defs>
		<symbol id="slime-1" viewBox="0 -0.5 15 15">
			<path
				stroke="hsl(246 24% 16%)"
				d="M 7 0 h 1 M 6 1 h 1 M 8 1 h 1 M 6 2 h 1 M 8 2 h 1 M 6 3 h 1 M 8 3 h 1 M 5 4 h 1 M 9 4 h 1 M 3 5 h 2 M 10 5 h 2 M 2 6 h 1 M 12 6 h 1 M 1 7 h 1 M 13 7 h 1 M 0 8 h 1 M 14 8 h 1 M 0 9 h 1 M 5 9 h 1 M 9 9 h 1 M 14 9 h 1 M 0 10 h 1 M 14 10 h 1 M 0 11 h 1 M 14 11 h 1 M 1 12 h 1 M 13 12 h 1 M 2 13 h 2 M 11 13 h 2 M 4 14 h 7"
			/>
			<path
				stroke="hsl(190 71% 63%)"
				d="M 7 1 h 1 M 7 2 h 1 M 7 3 h 1 M 6 4 h 1 M 8 4 h 1 M 9 5 h 1 M 10 6 h 2 M 12 7 h 1 M 1 8 h 2 M 1 9 h 2 M 1 10 h 1 M 1 11 h 1 M 2 12 h 1"
			/>
			<path
				stroke="hsl(218 100% 69%)"
				d="M 7 4 h 1 M 7 5 h 2 M 6 6 h 4 M 4 7 h 8 M 3 8 h 2 M 6 8 h 3 M 10 8 h 4 M 3 9 h 1 M 7 9 h 1 M 11 9 h 3 M 2 10 h 3 M 6 10 h 3 M 10 10 h 4 M 2 11 h 2 M 5 11 h 5 M 11 11 h 3 M 3 12 h 2 M 10 12 h 3 M 4 13 h 7"
			/>
			<path
				stroke="hsl(0 0% 100%)"
				d="M 5 5 h 2 M 3 6 h 3 M 2 7 h 2 M 5 8 h 1 M 9 8 h 1 M 4 9 h 1 M 6 9 h 1 M 8 9 h 1 M 10 9 h 1 M 5 10 h 1 M 9 10 h 1"
			/>
			<path stroke="hsl(0 55% 44%)" d="M 4 11 h 1 M 10 11 h 1 M 5 12 h 5" />
		</symbol>
		<symbol id="slime-2" viewBox="0 -0.5 15 15">
			<path
				stroke="hsl(246 24% 16%)"
				d="M 7 1 h 1 M 6 2 h 1 M 8 2 h 1 M 6 3 h 1 M 8 3 h 1 M 6 4 h 1 M 8 4 h 1 M 5 5 h 1 M 9 5 h 1 M 3 6 h 2 M 10 6 h 2 M 2 7 h 1 M 12 7 h 1 M 1 8 h 1 M 13 8 h 1 M 0 9 h 1 M 5 9 h 1 M 9 9 h 1 M 14 9 h 1 M 0 10 h 1 M 14 10 h 1 M 0 11 h 1 M 14 11 h 1 M 0 12 h 2 M 13 12 h 2 M 2 13 h 2 M 11 13 h 2 M 4 14 h 7"
			/>
			<path
				stroke="hsl(190 71% 63%)"
				d="M 7 2 h 1 M 7 3 h 1 M 7 4 h 1 M 6 5 h 1 M 8 5 h 1 M 9 6 h 1 M 10 7 h 2 M 12 8 h 1 M 1 9 h 2 M 1 10 h 2 M 1 11 h 1 M 2 12 h 1"
			/>
			<path
				stroke="hsl(218 100% 69%)"
				d="M 7 5 h 1 M 7 6 h 2 M 5 7 h 5 M 3 8 h 2 M 6 8 h 3 M 10 8 h 2 M 3 9 h 1 M 7 9 h 1 M 11 9 h 3 M 3 10 h 2 M 6 10 h 3 M 10 10 h 4 M 2 11 h 2 M 5 11 h 5 M 11 11 h 3 M 3 12 h 2 M 10 12 h 3 M 4 13 h 7"
			/>
			<path
				stroke="hsl(0 0% 100%)"
				d="M 5 6 h 2 M 3 7 h 2 M 2 8 h 1 M 5 8 h 1 M 9 8 h 1 M 4 9 h 1 M 6 9 h 1 M 8 9 h 1 M 10 9 h 1 M 5 10 h 1 M 9 10 h 1"
			/>
			<path stroke="hsl(0 55% 44%)" d="M 4 11 h 1 M 10 11 h 1 M 5 12 h 5" />
		</symbol>
		<symbol id="slime-3" viewBox="0 -0.5 15 15">
			<path
				stroke="hsl(246 24% 16%)"
				d="M 7 3 h 1 M 6 4 h 1 M 8 4 h 1 M 6 5 h 1 M 8 5 h 1 M 5 6 h 1 M 9 6 h 1 M 3 7 h 2 M 10 7 h 2 M 2 8 h 1 M 12 8 h 1 M 1 9 h 1 M 13 9 h 1 M 0 10 h 1 M 5 10 h 1 M 9 10 h 1 M 14 10 h 1 M 0 11 h 1 M 14 11 h 1 M 0 12 h 2 M 13 12 h 2 M 1 13 h 3 M 11 13 h 3 M 4 14 h 7"
			/>
			<path
				stroke="hsl(190 71% 63%)"
				d="M 7 4 h 1 M 7 5 h 1 M 6 6 h 1 M 8 6 h 1 M 9 7 h 1 M 10 8 h 2 M 12 9 h 1 M 1 10 h 2 M 1 11 h 1 M 2 12 h 1"
			/>
			<path
				stroke="hsl(218 100% 69%)"
				d="M 7 6 h 1 M 6 7 h 3 M 4 8 h 6 M 3 9 h 2 M 6 9 h 3 M 10 9 h 2 M 3 10 h 1 M 7 10 h 1 M 11 10 h 3 M 2 11 h 3 M 6 11 h 3 M 10 11 h 4 M 3 12 h 2 M 10 12 h 3 M 4 13 h 7"
			/>
			<path
				stroke="hsl(0 0% 100%)"
				d="M 5 7 h 1 M 3 8 h 1 M 2 9 h 1 M 5 9 h 1 M 9 9 h 1 M 4 10 h 1 M 6 10 h 1 M 8 10 h 1 M 10 10 h 1 M 5 11 h 1 M 9 11 h 1"
			/>
			<path stroke="hsl(0 55% 44%)" d="M 5 12 h 5" />
		</symbol>
	</defs>
	<g transform="translate({x} 0)">
		<use href="#slime-1" />
		<use x="-1" href="#slime-2" />
		<use x="-2" href="#slime-3" />
		<use x="-3" href="#slime-3" />
		<use x="-4" href="#slime-2" />
		<use x="-5" href="#slime-1" />
	</g>
</svg>

<style>
	svg {
		display: block;
		inline-size: 4rem;
		block-size: auto;
		position: fixed;
		inset-block-end: 1rem;
		inset-inline-start: 50%;
		translate: -50% 0%;
	}
</style>
