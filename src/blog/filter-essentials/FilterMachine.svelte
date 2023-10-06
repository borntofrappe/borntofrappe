<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const snippets = [
		``,
		`<filter id="banknote-filter">
    <!-- ...primitives -->
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap in="SourceGraphic" scale="5" />
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap in="SourceGraphic" scale="5" />
    <feDiffuseLighting>
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence result="noise" type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap in="SourceGraphic" scale="5" />
    <feDiffuseLighting in="noise">
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence result="noise" type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap in="SourceGraphic" scale="5" />
    <feDiffuseLighting in="noise">
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
    <feBlend mode="difference" />
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence result="noise" type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap result="displacement" in="SourceGraphic" scale="5" />
    <feDiffuseLighting in="noise">
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
    <feBlend in="displacement" mode="difference" />
</filter>
  `,
		`<filter id="banknote-filter">
    <feTurbulence result="noise" type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap result="displacement" in="SourceGraphic" scale="5" />
    <feDiffuseLighting in="noise">
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
    <feBlend in2="displacement" mode="difference" />
    <feComposite in2="displacement" operator="in" />
</filter>`,
		`<filter id="banknote-filter">
    <feTurbulence result="noise" type="fractalNoise" baseFrequency="0.1 0" numOctaves="2" />
    <feDisplacementMap result="displacement" in="SourceGraphic" scale="5" />
    <feDiffuseLighting in="noise">
        <feDistantLight azimuth="300" elevation="10" />
    </feDiffuseLighting>
    <feBlend in2="displacement" mode="difference" />
    <feComposite in2="displacement" operator="in" />
    <feConvolveMatrix bias="-0.15" preserveAlpha="true" kernelMatrix="0 0 1 0.5 1 -0.5 -1 0 0" />
</filter>`
	];

	let i = snippets.length - 1;
	$: snippet = snippets[i];
	$: code = highlight(snippet);

	onMount(() => {
		i = 0;
	});

	const highlight = (snippet) => {
		const lines = snippet
			.split('\n')
			.filter((d) => d)
			.map((d) => {
				return d.match('<!--')
					? d.replace(/<!--(.+)-\->/, (_, p) => `<span class="comment">&lt;!-- ${p}--&gt;</span>`)
					: d
							.replace('<', '&lt;')
							.replace('>', '&gt;')
							.replace(
								/([\w\d]+)="([\w\d \.-]+)"/gi,
								(_, p1, p2) =>
									`<span class="attr-name">${p1}</span><span class="punctuation">=</span><span class="punctuation">"</span><span class="attr-value">${p2}</span><span class="punctuation">"</span>`
							)
							.replace(
								/&lt;(\/?)(\w+)/,
								(_, p1, p2) =>
									`<span class="punctuation">&lt;</span>${
										p1 ? `<span class="punctuation">${p1}</span>` : ''
									}<span class="tag">${p2}</span>`
							)
							.replace(
								/(\/?)(&gt;)$/,
								(_, p1, p2) =>
									`${
										p1 ? `<span class="punctuation">${p1}</span>` : ''
									}<span class="punctuation">${p2}</span>`
							);
			});

		return lines;
	};
</script>

<article>
	<svg style="display: block;" viewBox="0 -2.5 100 60">
		<title>A crumbled piece of paper</title>
		<defs>
			{@html snippet}
		</defs>
		<g filter="url(#banknote-filter)">
			<rect fill="hsl(137 47% 97%)" width="100" height="55" />
			<g transform="translate(5 5)">
				<rect
					fill="hsl(147 66% 90%)"
					stroke="hsl(130 27% 64%)"
					stroke-width="3.5"
					width="90"
					height="45"
				/>
				<g fill="hsl(130 27% 64%)">
					<path id="banknote-arc" transform="translate(0 0)" d="M 0 0 L 12 0 A 12 12 0 0 1 0 12" />
					<use href="#banknote-arc" transform="translate(90 0) rotate(90)" />
					<use href="#banknote-arc" transform="translate(90 45) rotate(180)" />
					<use href="#banknote-arc" transform="translate(0 45) rotate(270)" />
				</g>
			</g>
			<g transform="translate(50 0)">
				<g fill="none" stroke="hsl(130 27% 64%)" stroke-width="2" stroke-linecap="round">
					<g transform="translate(0 12.5)">
						<path d="M -20 0 20 0" />
						<g fill="hsl(130 27% 64%)" stroke="hsl(130 27% 64%)">
							<g id="banknote-leaves" transform="translate(22.5 0) scale(0.3)">
								<path
									transform="translate(0 -2)"
									id="banknote-leaf"
									stroke-width="2"
									stroke-linejoin="round"
									stroke-linecap="round"
									d="M 0 0 c 0 -8 8 -8 10 -8 0 8 -8 8 -10 8z"
								/>
								<use transform="scale(1 -1)" href="#banknote-leaf" />
							</g>
							<use transform="scale(-1 1)" href="#banknote-leaves" />
						</g>
					</g>
					<path transform="translate(0 42.5)" d="M 5 0 20 0" />
					<path transform="translate(0 42.5)" d="M -5 0 -20 0" />
				</g>
				<ellipse fill="hsl(130 27% 64%)" cy="27.5" rx="9" ry="10" />
			</g>
		</g>
	</svg>
	<div>
		<button
			disabled={i === 0}
			on:click={() => {
				if (i === 0) return;
				i--;
			}}>Prev</button
		>
		<button
			disabled={i === snippets.length - 1}
			on:click={() => {
				if (i === snippets.length - 1) return;
				i++;
			}}>Next</button
		>
	</div>
	<pre><code
			>{#each code as line (line)}<span style="display: block;" transition:slide={{ duration: 400 }}
					>{@html line}</span
				>{/each}</code
		></pre>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	article > svg {
		display: block;
	}

	article > pre {
		overflow-x: auto;
	}

	article > div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	@supports (display: grid) {
		article {
			display: grid;
			grid-template: 'svg svg' auto 'snippet controls' auto / 1fr min-content;
			gap: 1rem;
		}

		article > svg {
			grid-area: svg;
		}

		article > pre {
			grid-area: snippet;
		}

		article > div {
			grid-area: controls;
			align-self: start;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	article {
		color: #e0def4;
		background: #393552;
		border-radius: 1rem;
		padding: 2rem;
	}

	button {
		color: #e0def4;
		background: #232136;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-family: inherit;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	pre {
		color: #e0def4;
		background: #232136;
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 0;
		font-weight: 700;
		line-height: 1.75;
	}

	pre::-webkit-scrollbar {
		block-size: 0.4rem;
	}

	pre::-webkit-scrollbar-thumb {
		border-radius: 0.2rem;
		background: currentColor;
	}

	code {
		background: none;
		padding: 0;
		font-size: 1rem;
	}

	code :global(.tag) {
		color: #9ccfd8;
	}

	code :global(.attr-name) {
		color: #c4a7e7;
		font-style: italic;
	}

	code :global(.attr-value) {
		color: #f6c177;
	}

	code :global(.punctuation) {
		color: #908caa;
	}

	code :global(.comment) {
		color: #6e6a86;
		font-style: italic;
	}
</style>
