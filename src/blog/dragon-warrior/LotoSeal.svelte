<script>
	import { fly } from 'svelte/transition';
	import { quadOut as easing } from 'svelte/easing';
	const columns = 10;
	const rows = 7;

	let column = Math.floor(Math.random() * columns);
	let row = Math.floor(Math.random() * (rows - 1)) + 1;

	let element = null;

	let state = 'wait';
	let feedback = null;

	const handleClick = (e) => {
		if (state === 'find') return;

		if (state === 'wait') state = 'play';

		const { clientX, clientY } = e;
		const { top, left, width, height } = element.getBoundingClientRect();

		const c = Math.floor(((clientX - left) / width) * columns);
		const r = Math.floor(((clientY - top) / height) * rows);

		if (c === column && r === row) {
			state = 'find';
		} else {
			let f = 'Try';
			const oc = column - c;
			const or = row - r;
			const ac = Math.abs(oc);
			const ar = Math.abs(or);
			const tc = ac === 1 ? 'tile' : 'tiles';
			const tr = ar === 1 ? 'tile' : 'tiles';
			if (oc < 0) {
				f += ` <strong>${ac}</strong> ${tc} left`;
			} else if (oc > 0) {
				f += ` <strong>${ac}</strong> ${tc} right`;
			}
			if (or !== 0) {
				if (oc !== 0) {
					f += ',';
				}
				if (or < 0) {
					f += ` <strong>${ar}</strong> ${tr} up.`;
				} else {
					f += ` <strong>${ar}</strong> ${tr} down.`;
				}
			} else {
				f += '.';
			}
			feedback = f;
		}
	};

	const handleReset = (e) => {
		column = Math.floor(Math.random() * columns);
		row = Math.floor(Math.random() * (rows - 1)) + 1;
		state = 'wait';
		handleClick(e);
	};
</script>

<svg
	aria-hidden="true"
	style:width="0"
	style:height="0"
	style:position="absolute"
	shape-rendering="crispEdges"
>
	<defs>
		<symbol id="dragon-warrior-hero-1" viewBox="0 0 16 16">
			<g fill="hsl(0, 0%, 13%)">
				<rect width="1" height="3" />
				<rect x="1" width="1" height="1" />
				<rect x="5" width="6" height="1" />
				<rect x="14" width="1" height="1" />
				<rect x="15" width="1" height="3" />
				<rect x="2" y="1" width="4" height="1" />
				<rect x="10" y="1" width="4" height="1" />
				<rect x="4" y="2" width="1" height="1" />
				<rect x="11" y="2" width="1" height="1" />
				<rect x="1" y="3" width="3" height="1" />
				<rect x="12" y="3" width="1" height="1" />
				<rect x="14" y="3" width="1" height="1" />
				<rect x="1" y="4" width="1" height="4" />
				<rect x="3" y="4" width="2" height="1" />
				<rect x="11" y="4" width="3" height="1" />
				<rect x="3" y="5" width="1" height="4" />
				<rect x="5" y="5" width="6" height="1" />
				<rect x="12" y="5" width="1" height="3" />
				<rect x="6" y="6" width="1" height="2" />
				<rect x="9" y="6" width="1" height="2" />
				<rect y="8" width="2" height="1" />
				<rect x="4" y="8" width="1" height="1" />
				<rect x="8" y="8" width="7" height="1" />
				<rect y="9" width="1" height="3" />
				<rect x="4" y="9" width="2" height="1" />
				<rect x="8" y="9" width="1" height="1" />
				<rect x="14" y="9" width="1" height="2" />
				<rect x="1" y="10" width="3" height="1" />
				<rect x="8" y="10" width="1" height="1" />
				<rect x="3" y="11" width="4" height="1" />
				<rect x="8" y="11" width="2" height="1" />
				<rect x="13" y="11" width="2" height="1" />
				<rect x="1" y="12" width="2" height="1" />
				<rect x="4" y="12" width="1" height="2" />
				<rect x="9" y="12" width="2" height="1" />
				<rect x="12" y="12" width="2" height="1" />
				<rect y="13" width="1" height="1" />
				<rect x="2" y="13" width="1" height="1" />
				<rect x="10" y="13" width="3" height="1" />
				<rect x="14" y="13" width="1" height="1" />
				<rect x="3" y="14" width="5" height="1" />
				<rect x="11" y="14" width="1" height="1" />
				<rect x="3" y="15" width="1" height="1" />
				<rect x="8" y="15" width="4" height="1" />
			</g>
			<g fill="hsl(22, 92%, 76%)">
				<rect x="1" y="1" width="1" height="2" />
				<rect x="6" y="1" width="4" height="1" />
				<rect x="14" y="1" width="1" height="2" />
				<rect x="2" y="2" width="2" height="1" />
				<rect x="5" y="2" width="1" height="1" />
				<rect x="10" y="2" width="1" height="1" />
				<rect x="12" y="2" width="2" height="1" />
				<rect x="4" y="3" width="1" height="1" />
				<rect x="11" y="3" width="1" height="1" />
				<rect x="13" y="3" width="1" height="1" />
				<rect x="2" y="4" width="1" height="5" />
				<rect x="5" y="4" width="6" height="1" />
				<rect x="5" y="6" width="1" height="2" />
				<rect x="7" y="6" width="2" height="2" />
				<rect x="10" y="6" width="1" height="2" />
				<rect x="6" y="8" width="2" height="1" />
				<rect x="1" y="9" width="3" height="1" />
				<rect x="9" y="9" width="2" height="1" />
				<rect x="12" y="9" width="2" height="1" />
				<rect x="10" y="10" width="3" height="1" />
				<rect x="1" y="11" width="2" height="1" />
				<rect x="7" y="11" width="1" height="1" />
				<rect x="11" y="11" width="1" height="2" />
				<rect x="3" y="12" width="1" height="2" />
				<rect x="1" y="13" width="1" height="1" />
				<rect x="13" y="13" width="1" height="1" />
				<rect y="14" width="3" height="1" />
				<rect x="12" y="14" width="3" height="1" />
				<rect x="4" y="15" width="4" height="1" />
			</g>
			<g fill="hsl(215, 96%, 32%)">
				<rect x="6" y="2" width="4" height="1" />
				<rect x="5" y="3" width="6" height="1" />
				<rect x="4" y="5" width="1" height="3" />
				<rect x="11" y="5" width="1" height="3" />
				<rect x="5" y="8" width="1" height="1" />
				<rect x="6" y="9" width="2" height="1" />
				<rect x="11" y="9" width="1" height="1" />
				<rect x="4" y="10" width="4" height="1" />
				<rect x="9" y="10" width="1" height="1" />
				<rect x="13" y="10" width="1" height="1" />
				<rect x="10" y="11" width="1" height="1" />
				<rect x="12" y="11" width="1" height="1" />
				<rect x="5" y="12" width="4" height="1" />
				<rect x="5" y="13" width="5" height="1" />
				<rect x="8" y="14" width="3" height="1" />
			</g>
		</symbol>
		<symbol id="dragon-warrior-hero-2" viewBox="0 0 16 16">
			<g fill="hsl(0, 0%, 13%)">
				<rect width="1" height="3" />
				<rect x="1" width="1" height="1" />
				<rect x="5" width="6" height="1" />
				<rect x="14" width="1" height="1" />
				<rect x="15" width="1" height="3" />
				<rect x="2" y="1" width="4" height="1" />
				<rect x="10" y="1" width="4" height="1" />
				<rect x="1" y="2" width="1" height="1" />
				<rect x="4" y="2" width="1" height="1" />
				<rect x="11" y="2" width="1" height="1" />
				<rect x="1" y="3" width="3" height="1" />
				<rect x="12" y="3" width="1" height="1" />
				<rect x="14" y="3" width="1" height="1" />
				<rect x="1" y="4" width="1" height="3" />
				<rect x="3" y="4" width="2" height="1" />
				<rect x="11" y="4" width="3" height="1" />
				<rect x="3" y="5" width="1" height="2" />
				<rect x="5" y="5" width="6" height="1" />
				<rect x="12" y="5" width="1" height="3" />
				<rect x="4" y="6" width="1" height="2" />
				<rect x="6" y="6" width="1" height="2" />
				<rect x="9" y="6" width="1" height="2" />
				<rect y="7" width="1" height="1" />
				<rect y="8" width="5" height="1" />
				<rect x="10" y="8" width="2" height="1" />
				<rect y="9" width="1" height="1" />
				<rect x="3" y="9" width="3" height="1" />
				<rect x="8" y="9" width="7" height="1" />
				<rect x="1" y="10" width="1" height="1" />
				<rect x="3" y="10" width="1" height="1" />
				<rect x="8" y="10" width="1" height="1" />
				<rect x="14" y="10" width="1" height="1" />
				<rect x="2" y="11" width="5" height="1" />
				<rect x="8" y="11" width="1" height="1" />
				<rect x="14" y="11" width="1" height="1" />
				<rect x="1" y="12" width="1" height="2" />
				<rect x="4" y="12" width="1" height="3" />
				<rect x="8" y="12" width="2" height="1" />
				<rect x="13" y="12" width="3" height="1" />
				<rect x="9" y="13" width="2" height="1" />
				<rect x="12" y="13" width="2" height="1" />
				<rect y="14" width="1" height="1" />
				<rect x="8" y="14" width="6" height="1" />
				<rect x="4" y="15" width="4" height="1" />
				<rect x="12" y="15" width="1" height="1" />
			</g>
			<g fill="hsl(22, 92%, 76%)">
				<rect x="1" y="1" width="1" height="1" />
				<rect x="6" y="1" width="4" height="1" />
				<rect x="14" y="1" width="1" height="2" />
				<rect x="2" y="2" width="2" height="1" />
				<rect x="5" y="2" width="1" height="1" />
				<rect x="10" y="2" width="1" height="1" />
				<rect x="12" y="2" width="2" height="1" />
				<rect x="4" y="3" width="1" height="1" />
				<rect x="11" y="3" width="1" height="1" />
				<rect x="13" y="3" width="1" height="1" />
				<rect x="2" y="4" width="1" height="3" />
				<rect x="5" y="4" width="6" height="1" />
				<rect x="5" y="6" width="1" height="2" />
				<rect x="7" y="6" width="2" height="2" />
				<rect x="10" y="6" width="1" height="2" />
				<rect x="1" y="7" width="3" height="1" />
				<rect x="6" y="8" width="4" height="1" />
				<rect x="1" y="9" width="2" height="1" />
				<rect x="9" y="10" width="2" height="1" />
				<rect x="2" y="10" width="1" height="1" />
				<rect x="12" y="10" width="2" height="1" />
				<rect x="10" y="11" width="3" height="1" />
				<rect x="7" y="11" width="1" height="1" />
				<rect x="2" y="12" width="2" height="2" />
				<rect x="11" y="12" width="1" height="2" />
				<rect x="14" y="13" width="2" height="1" />
				<rect x="1" y="14" width="3" height="1" />
				<rect x="14" y="14" width="1" height="1" />
				<rect x="8" y="15" width="4" height="1" />
			</g>
			<g fill="hsl(215, 96%, 32%)">
				<rect x="6" y="2" width="4" height="1" />
				<rect x="5" y="3" width="6" height="1" />
				<rect x="4" y="5" width="1" height="1" />
				<rect x="11" y="5" width="1" height="3" />
				<rect x="5" y="8" width="1" height="1" />
				<rect x="6" y="9" width="2" height="1" />
				<rect x="11" y="10" width="1" height="1" />
				<rect x="4" y="10" width="4" height="1" />
				<rect x="9" y="11" width="1" height="1" />
				<rect x="13" y="11" width="1" height="1" />
				<rect x="5" y="12" width="3" height="1" />
				<rect x="10" y="12" width="1" height="1" />
				<rect x="12" y="12" width="1" height="1" />
				<rect x="5" y="13" width="4" height="1" />
				<rect x="5" y="14" width="3" height="1" />
			</g>
		</symbol>
	</defs>
</svg>

<article>
	{#if state === 'wait'}
		<p style:pointer-events="none">
			<strong>Loto Seal</strong> is around here. <br /> It might be just a tile distant.
		</p>
	{/if}
	<svg
		on:click={handleClick}
		bind:this={element}
		viewBox="0 0 {columns} {rows}"
		shape-rendering="crispEdges"
	>
		<defs>
			<symbol id="dragon-warrior-swamp" viewBox="0 0 16 8">
				<g fill="hsl(0, 0%, 23%)">
					<rect y="1" width="16" height="1" />
					<rect y="3" width="16" height="1" />
					<rect y="5" width="16" height="1" />
					<rect y="7" width="16" height="1" />
					<rect width="1" height="1" />
					<rect x="6" width="1" height="1" />
					<rect x="9" width="2" height="1" />
					<rect x="15" width="1" height="1" />
					<rect y="8" width="1" height="1" />
					<rect x="3" y="2" width="1" height="1" />
					<rect x="8" y="2" width="1" height="1" />
					<rect x="12" y="2" width="2" height="1" />
					<rect y="4" width="2" height="1" />
					<rect x="5" y="4" width="1" height="1" />
					<rect x="10" y="4" width="1" height="1" />
					<rect y="12" width="2" height="1" />
					<rect x="2" y="6" width="2" height="1" />
					<rect x="8" y="6" width="1" height="1" />
					<rect x="13" y="6" width="2" height="1" />
				</g>
				<g fill="hsl(336, 67%, 32%)">
					<rect x="1" width="1" height="1" />
					<rect x="5" width="1" height="1" />
					<rect x="7" width="2" height="1" />
					<rect x="11" width="1" height="1" />
					<rect x="14" width="1" height="1" />
					<rect x="2" y="2" width="1" height="1" />
					<rect x="4" y="2" width="1" height="1" />
					<rect x="7" y="2" width="1" height="1" />
					<rect x="9" y="2" width="1" height="1" />
					<rect x="11" y="2" width="1" height="1" />
					<rect x="14" y="2" width="1" height="1" />
					<rect x="2" y="4" width="1" height="1" />
					<rect x="4" y="4" width="1" height="1" />
					<rect x="6" y="4" width="1" height="1" />
					<rect x="9" y="4" width="1" height="1" />
					<rect x="11" y="4" width="1" height="1" />
					<rect x="15" y="4" width="1" height="1" />
					<rect x="1" y="6" width="1" height="1" />
					<rect x="4" y="6" width="1" height="1" />
					<rect x="7" y="6" width="1" height="1" />
					<rect x="9" y="6" width="1" height="1" />
					<rect x="12" y="6" width="1" height="1" />
					<rect x="15" y="6" width="1" height="1" />
				</g>
				<g fill="hsl(5, 78%, 56%)">
					<rect x="2" width="3" height="1" />
					<rect x="12" width="2" height="1" />
					<rect y="2" width="2" height="1" />
					<rect x="5" y="2" width="2" height="1" />
					<rect x="10" y="2" width="1" height="1" />
					<rect x="15" y="2" width="1" height="1" />
					<rect x="3" y="4" width="1" height="1" />
					<rect x="7" y="4" width="2" height="1" />
					<rect x="12" y="4" width="3" height="1" />
					<rect y="6" width="1" height="1" />
					<rect x="5" y="6" width="2" height="1" />
					<rect x="10" y="6" width="2" height="1" />
				</g>
			</symbol>

			<symbol id="dragon-warrior-loto-seal" viewBox="0 0 10 10">
				<g fill="hsl(0, 0%, 13%)">
					<rect x="4" width="4" height="1" />
					<rect x="2" y="1" width="2" height="1" />
					<rect x="8" y="1" width="1" height="1" />
					<rect x="1" y="2" width="1" height="2" />
					<rect x="9" y="2" width="1" height="5" />
					<rect y="4" width="1" height="4" />
					<rect x="3" y="5" width="1" height="1" />
					<rect x="8" y="5" width="1" height="2" />
					<rect x="1" y="7" width="1" height="1" />
					<rect x="6" y="7" width="3" height="1" />
					<rect x="1" y="8" width="7" height="1" />
					<rect x="2" y="9" width="4" height="1" />
				</g>
				<g fill="hsl(42, 87%, 55%)">
					<rect x="4" y="1" width="1" height="1" />
					<rect x="6" y="1" width="2" height="1" />
					<rect x="6" y="2" width="3" height="1" />
					<rect x="2" y="3" width="2" height="1" />
					<rect x="5" y="3" width="1" height="1" />
					<rect x="8" y="3" width="1" height="1" />
					<rect x="4" y="4" width="1" height="1" />
					<rect x="7" y="4" width="1" height="3" />
					<rect x="1" y="5" width="1" height="2" />
					<rect x="5" y="5" width="1" height="3" />
					<rect x="2" y="7" width="2" height="1" />
				</g>
				<g fill="hsl(48, 94%, 68%)">
					<rect x="5" y="1" width="1" height="1" />
					<rect x="2" y="2" width="4" height="1" />
					<rect x="4" y="3" width="1" height="1" />
					<rect x="6" y="3" width="2" height="1" />
					<rect x="1" y="4" width="3" height="1" />
					<rect x="5" y="4" width="2" height="1" />
					<rect x="8" y="4" width="1" height="1" />
					<rect x="2" y="5" width="1" height="1" />
					<rect x="4" y="5" width="1" height="1" />
					<rect x="6" y="5" width="1" height="1" />
					<rect x="2" y="6" width="3" height="1" />
					<rect x="6" y="6" width="1" height="1" />
					<rect x="4" y="7" width="1" height="1" />
				</g>
			</symbol>

			<pattern
				id="dragon-warrior-pattern-swamp"
				viewBox="0 0 16 16"
				patternUnits="userSpaceOnUse"
				width="1"
				height="1"
			>
				<svg width="16" height="8">
					<use href="#dragon-warrior-swamp" />
				</svg>
				<svg y="8" width="16" height="8">
					<use href="#dragon-warrior-swamp" />
				</svg>
			</pattern>
		</defs>

		<rect
			style:cursor={state === 'find' ? 'initial' : 'zoom-in'}
			width={columns}
			height={rows}
			fill="url(#dragon-warrior-pattern-swamp)"
		/>

		{#if state === 'find'}
			<g transform="translate({column} {row})">
				<g in:fly={{ y: 1, delay: 200, easing }}>
					<svg y="-1" width="1" height="1">
						<use href="#dragon-warrior-loto-seal" />
					</svg>
				</g>
			</g>
		{/if}
	</svg>

	{#if state === 'play'}
		{#key feedback}
			<p in:fly={{ duration: 750, delay: 200, easing }} style:pointer-events="none">
				{@html feedback}
			</p>
		{/key}
	{:else if state === 'find'}
		<div in:fly={{ duration: 750, delay: 2000, easing }}>
			<p>
				You found <strong>Loto Seal</strong>. Congratulations!
			</p>
			<button on:click={handleReset}>
				Play again?
				<svg width="1em" height="1em" viewBox="0 0 16 16">
					<g>
						<use href="#dragon-warrior-hero-1" />
						<use x="-16" href="#dragon-warrior-hero-2" />
					</g>
				</svg>
			</button>
		</div>
	{/if}
</article>

<style>
	article {
		position: relative;
	}

	article > svg {
		display: block;
	}

	article > p,
	article > div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: hsl(0, 0%, 13%);
		background: hsl(0, 0%, 97%);
		padding: 0.35rem 0.75rem;
		border-radius: 0.35rem;
		border: 0.2rem solid currentColor;
	}

	article > div > * + * {
		margin-top: 0.75em;
	}

	button {
		cursor: pointer;
		color: inherit;
		font-family: inherit;
		padding: 0;
		border: none;
		background: none;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	button > svg {
		width: 32px;
		height: auto;
	}

	button:hover > svg > g {
		animation: step 0.4s step-end infinite;
	}

	@keyframes step {
		50% {
			transform: translateX(16px);
		}
	}
</style>
