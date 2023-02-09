<script>
	export let x = 0;
	export let y = 0;
	export let width = 10;
	export let height = 10;
	export let patternWidth = 1;
	export let patternHeight = 1;
	export let commands = 'M 2 2 h 6 v 6 h -6 z';
	export let accentColor = 'hsl(328, 85%, 46%)';

	$: viewBox = `${x} ${y} ${width} ${height}`;

	let value = 0;
	$: steps = commands.match(/[a-zA-Z]([^a-zA-Z]+)?/g);
	$: d = steps.slice(0, value).join('');
</script>

<svg {viewBox}>
	<defs>
		<pattern
			id="commands-pattern-grid"
			viewBox="0 0 1 1"
			width={patternWidth}
			height={patternHeight}
			patternUnits="userSpaceOnUse"
		>
			<g
				fill="none"
				stroke="currentColor"
				stroke-width={Math.min(patternWidth, patternHeight) / 30}
			>
				<rect width="1" height="1" />
			</g>
		</pattern>

		<marker id="marker-dot" viewBox="-1 -1 2 2">
			<circle fill={accentColor} r="1" />
		</marker>
	</defs>
	<rect fill="url(#commands-pattern-grid)" {x} {y} {width} {height} />

	<g fill="none" stroke="currentColor">
		<path d={commands} stroke-width={Math.min(width, height) / 60} />
		<path
			stroke-width={Math.min(width, height) / 50}
			stroke={accentColor}
			{d}
			marker-start="url(#marker-dot)"
			marker-mid="url(#marker-dot)"
			marker-end="url(#marker-dot)"
		/>
	</g>
</svg>

<form on:submit|preventDefault>
	<label>
		<span class="visually-hidden">Drag to draw the path in {steps.length} steps.</span>
		<input
			style:accent-color={accentColor}
			type="range"
			min={0}
			max={steps.length}
			step={1}
			bind:value
		/>
	</label>
</form>

<p>
	d: <strong style:border-bottom="0.2rem solid {accentColor}">{d}</strong>
</p>

<style>
	svg {
		display: block;
	}

	input {
		margin: 0.75em 0;
		inline-size: 100%;
	}
</style>
