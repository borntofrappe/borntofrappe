<script>
	export let code = `<math>
    <mi>C</mi>
    <mo>=</mo>
    <mn>2</mn>
    <mi>&pi;</mi>
    <mi>r</mi>
</math>`;

	let panels = ['output', 'input'];
	let [panel] = panels;

	const togglePanel = () => {
		panel = panel === panels[0] ? panels[1] : panels[0];
	};
</script>

<div class="repl">
	<svg viewBox="-1.75 -1.75 15.5 3.5" preserveAspectRatio="xMinYMid">
		<circle fill="hsl(3 100% 68%)" r="1.75" />
		<circle fill="hsl(41 99% 60%)" cx="5.75" r="1.75" />
		<circle fill="hsl(129 62% 49%)" cx="11.5" r="1.75" />
	</svg>
	<div data-panel={panel}>
		<pre><code>{code}</code></pre>
		<div>{@html code}</div>
	</div>
	<button on:click={togglePanel} aria-pressed={panel === panels[1]}>
		<svg width="1em" height="1em" viewBox="-2.5 -2.5 5 5">
			<g fill="none" stroke="currentColor">
				<rect stroke-width="0.75" x="-2" y="-2" width="4" height="4" rx="0.5" />
				<path
					stroke-width="0.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M -0.75 -0.75 0 0 -0.75 0.75"
				/>
			</g>
		</svg>
		<span>Show code</span>
	</button>
</div>

<style>
	[data-panel] {
		position: relative;
	}

	[data-panel] > div {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-start: 50%;
		translate: -50% -50%;
	}

	[data-panel='input'] > pre {
		visibility: visible;
		opacity: 1;
		overflow-x: auto;
		transition: opacity 0.25s;
	}

	[data-panel='input'] > div {
		visibility: hidden;
		opacity: 0;
	}

	[data-panel='output'] > pre {
		visibility: hidden;
		opacity: 0;
	}

	[data-panel='output'] > div {
		visibility: visible;
		opacity: 1;
		transition: opacity 0.25s;
	}

	.repl {
		color: hsl(0 0% 90%);
		background: hsl(249 11% 12%);
		max-inline-size: 50ch;
		margin-inline: auto;
		border-radius: 1rem;
	}

	.repl > svg {
		box-sizing: border-box;
		display: block;
		block-size: 2.4rem;
		inline-size: 100%;
		background: hsl(249 8% 17%);
		padding: 0.75rem;
		border-radius: inherit;
		border-end-end-radius: 0;
		border-end-start-radius: 0;
	}

	[data-panel] {
		font-size: 1.1rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
	}

	pre {
		margin: 0;
	}

	code {
		font-family: monospace;
		color: inherit;
		background: none;
	}

	button {
		cursor: pointer;
		font-family: monospace;
		font-size: 0.9rem;
		font-weight: 700;
		color: inherit;
		background: inherit;
		padding: 0.4rem 0.8rem;
		border: none;
		border-radius: inherit;
		border-end-start-radius: 0;
		border-start-end-radius: 0;
		display: block;
		margin-inline-start: auto;
		transition: all 0.25s;
	}

	button > svg {
		position: relative;
		inset-block-start: 0.1rem;
		inline-size: 1rem;
		block-size: 1rem;
	}

	button[aria-pressed='true'] {
		color: hsl(249 11% 12%);
		background: hsl(0 0% 94%);
	}

	button::focus-visible {
		outline: 2px solid hsl(0 0% 94%);
		outline-offset: 2px;
	}
</style>
