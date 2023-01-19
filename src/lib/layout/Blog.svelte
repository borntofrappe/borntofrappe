<script>
	export let title;
	export let description;
</script>

<svelte:head>
	<title>
		borntofrappe | {title}
	</title>
	<meta name="description" content={description} />
</svelte:head>

<header>
	<h1>{title}</h1>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 3rem 1rem;
		text-align: center;
	}

	main {
		max-width: 60ch;
		margin-inline: auto;
		padding: 1rem;
	}

	main > :global(* + *) {
		margin-block-start: 1em;
		margin-block-start: var(--vertical-rhythm, 1em);
	}

	main :global(ul > * + *),
	main :global(ol > * + *) {
		margin-block-start: 0.75em;
	}

	main :global(h2),
	main :global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	main :global(h2 + *),
	main :global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	main :global(blockquote),
	main :global(blockquote + *),
	main :global(figure),
	main :global(figure + *) {
		--vertical-rhythm: var(--size-700);
	}

	main :global(table),
	main :global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	main :global(pre),
	main :global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}

	main :global(a) {
		color: inherit;
		transition: color 0.25s cubic-bezier(0.37, 0, 0.63, 1);
	}

	main :global(a:hover) {
		color: var(--accent);
	}

	main :global(blockquote) {
		max-width: 50ch;
		margin-inline: auto;
		font-style: italic;
		font-weight: 700;
		line-height: 2;
		padding: 0.75rem 1.25rem;
		background: var(--shadow);
		border-radius: 0.5rem;
	}

	main :global(p > code) {
		margin-block: 0.2rem;
		border-block-end: 0.2rem solid var(--accent);
	}

	main :global(.code) {
		display: flex;
		flex-direction: column;
	}

	main :global(.code pre) {
		margin-block-start: 0;
		padding: 1.25rem;
		border-radius: 1rem;
		line-height: 1.75;
		tab-size: 2;
	}

	main :global(.code > span) {
		align-self: flex-end;
		display: inline-flex;
		align-items: center;
		gap: 0 0.5rem;
		transform: translateX(-1.5rem);
		border-start-start-radius: 0.5rem;
		border-start-end-radius: 0.5rem;
		padding: 0.4rem 1rem;
		color: var(--theme-color, #e0def4);
		background: var(--theme-background, #232136);
		font-weight: 700;
	}

	main :global(.code > span > svg) {
		display: block;
		width: 1em;
		height: auto;
	}

	main :global(.code pre) {
		color: var(--theme-color, #e0def4);
		background: var(--theme-background, #232136);
		overflow-x: auto;
	}

	main :global(.code pre::-webkit-scrollbar) {
		height: 0.4rem;
	}

	main :global(.code pre::-webkit-scrollbar-thumb) {
		background: var(--accent);
		border-radius: 0.2rem;
	}

	main :global(:is(h2, h3, h4)[id]) {
		display: flex;
		align-items: center;
		gap: 0 0.5rem;
	}

	main :global(:is(h2, h3, h4)[id] a) {
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		opacity: 0.3;
		background: currentColor;
		transition-duration: 0.25s;
		transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
		transition-property: opacity, color;
	}

	main :global(:is(h2, h3, h4)[id] a:focus) {
		opacity: 1;
	}

	main :global(:is(h2, h3, h4)[id] a:hover) {
		color: var(--accent);
		opacity: 1;
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main :global(blockquote) {
			padding-block: 1em;
		}

		main :global(blockquote::before) {
			content: '';
			width: 2em;
			height: 2em;
			background: var(--accent);
			float: left;
			margin-inline-end: 0.4rem;
			mask-image: url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
          <defs>\
            <path id="star" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />\
          </defs>\
          <g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">\
            <use href="%23star" />\
            <use href="%23star" transform="translate(-20 -20) scale(0.9)"/>\
            <use href="%23star" transform="translate(20 -25) scale(0.5)"/>\
            <use href="%23star" transform="translate(15 25) scale(0.8)"/>\
            <use href="%23star" transform="translate(-15 20) scale(0.4)"/>\
          </g>\
        </svg>');
			-webkit-mask-image: url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
          <defs>\
            <path id="star" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />\
          </defs>\
          <g fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">\
            <use href="%23star" />\
            <use href="%23star" transform="translate(-20 -20) scale(0.9)"/>\
            <use href="%23star" transform="translate(20 -25) scale(0.5)"/>\
            <use href="%23star" transform="translate(15 25) scale(0.8)"/>\
            <use href="%23star" transform="translate(-15 20) scale(0.4)"/>\
          </g>\
        </svg>');
		}

		main :global(:is(h2, h3, h4)[id] a) {
			width: 0.9em;
			height: 0.9em;
			border-radius: initial;
			position: relative;
			-webkit-mask-image: url('data:image/svg+xml,\
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
				<g transform="rotate(-45)">\
				<g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">\
					<path id="link" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />\
					<use href="%23link" transform="scale(-1 -1)" />\
				</g>\
				</g>\
			</svg>');
			mask-image: url('data:image/svg+xml,\
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">\
				<g transform="rotate(-45)">\
				<g fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">\
					<path id="link" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />\
					<use href="%23link" transform="scale(-1 -1)" />\
				</g>\
				</g>\
			</svg>');
		}
	}
</style>
