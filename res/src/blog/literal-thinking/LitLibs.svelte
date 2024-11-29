<script>
	import LiteralText from './LiteralText.svelte';

	const markup = (strings, ...expressions) => {
		return strings
			.map((s, i, { length }) => (i < length - 1 ? `${s} <mark>${expressions[i]}</mark>` : s))
			.join('');
	};

	let tool = 'lit';
	let action = 'build';
	let project = 'web components';
</script>

<div>
	<h2>
		<LiteralText validName="lit-libs" />
	</h2>

	<fieldset>
		<legend class="visually-hidden">Choose a...</legend>
		<label>
			<span>Tool</span>
			<input type="text" bind:value={tool} />
		</label>
		<label>
			<span>Action</span>
			<input type="text" bind:value={action} />
		</label>
		<label>
			<span>Project</span>
			<input type="text" bind:value={project} />
		</label>
	</fieldset>

	<p>
		Thinly-veiled hint:
		<output>
			{@html markup`I'm considering using ${tool}. It's not the only option to ${action} something, but for ${project} I think it's a great choice.`}
		</output>
	</p>
</div>

<style>
	.visually-hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		inline-size: 1px;
		block-size: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}

	div {
		--main-color: hsl(210 10% 23%);
		--main-background: hsl(210 16% 93%);
		--input-background: hsl(210 16% 87%);
		--highlight-color: hsl(0 0% 100%);
		--highlight-background: hsl(210 100% 40%);
		--outline-color: hsl(210 50% 70%);
	}

	h2 {
		--text-color: var(--highlight-color);
		--text-background: var(--highlight-background);
		--mark-color: var(--outline-color);
		--hyphen-color: var(--outline-color);
	}

	div {
		box-sizing: border-box;
		max-inline-size: 50ch;
		margin-inline: auto;
		padding: 1rem;
		color: var(--main-color);
		background: var(--main-background);
	}

	div > * + * {
		margin-block-start: 0.5rem;
	}

	p {
		margin-block-start: 1.5rem;
	}

	h2 {
		margin: 0;
		max-inline-size: 16rem;
		margin-inline: auto;
	}

	fieldset {
		padding: 0;
		margin-inline: 0;
		border: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	label > span {
		font-size: 0.85em;
	}

	input {
		font: inherit;
		color: inherit;
		border: none;
		padding: 0.4rem 0.5rem;
		background: var(--input-background);
	}

	input:focus-visible {
		outline: 2px solid var(--outline-color, currentColor);
		outline-offset: 2px;
	}

	output > :global(mark) {
		font-weight: 700;
		color: var(--highlight-color);
		background: var(--highlight-background);
	}
</style>
