<script>
	export let x = 0;
	export let y = 0;
	export let width = 10;
	export let height = 10;
	export let patternWidth = 1;
	export let patternHeight = 1;
	export let commands = 'M 2 2 h 6 v 6 h -6 z';
	export let accentColor = 'hotpink';

	$: viewBox = `${x} ${y} ${width} ${height}`;

	let value = 0;
	$: steps = commands.match(/[a-zA-Z]([^a-zA-Z]+)?/g);
	$: d = steps.slice(0, value).join('');
</script>

<div>
	<form on:submit|preventDefault>
		<label>
			Drag the handle to draw the <code>&lt;path&gt;</code> element in {steps.length}
			steps.

			<input type="range" min={0} max={steps.length} step={1} bind:value />
		</label>
	</form>

	<p><code>d="<span style:border-block-end="0.2rem solid {accentColor}">{d}</span>"</code></p>

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
</div>

<style>
	div * {
		padding: 0;
		margin: 0;
	}

	div > * + * {
		margin-block-start: 0.75em;
	}

	label input {
		margin-block-start: 0.5em;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
