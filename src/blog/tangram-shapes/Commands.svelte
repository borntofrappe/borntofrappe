<script>
	export let viewBox = '-1 -1 12 12';
	export let commands = 'M 0 0 l 0 10 l 10 0 l 0 -10 z';

	export let patternWidth = 1;
	export let patternHeight = 1;
	export let strokeWidth = 0.5;

	export let accentColor = 'gold';

	let value = 0;
	$: [x, y, width, height] = viewBox.match(/[-\d+.]+/g).map((d) => parseFloat(d));
	$: steps = commands.match(/[a-zA-Z]([^a-zA-Z]+)?/g);
	$: d = steps.slice(0, value).join('');
</script>

<div>
	<label>
		Drag the handle to draw the <code>&lt;path&gt;</code> element in {steps.length}
		steps.
		<input
			style:accent-color={accentColor}
			type="range"
			min={0}
			max={steps.length}
			step={1}
			bind:value
		/>
	</label>

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
				<g fill="none" stroke="currentColor" stroke-width="0.01">
					<rect width="1" height="1" />
				</g>
			</pattern>

			<marker id="marker-dot" viewBox="-0.5 -0.5 1 1">
				<circle fill={accentColor} r="0.5" />
			</marker>
		</defs>
		<rect fill="url(#commands-pattern-grid)" {x} {y} {width} {height} />

		<g fill="none" stroke="currentColor">
			<path d={commands} stroke-width={strokeWidth / 2} />
			<path
				stroke-width={strokeWidth}
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
	div > * + * {
		margin-block-start: 0.5rem;
	}

	label {
		display: block;
	}

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
