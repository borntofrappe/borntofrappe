<script context="module">
	export async function load() {
		const components = await Promise.all(
			Object.entries(import.meta.glob('./_*.svelte')).map(async ([path, module]) => {
				const [, title] = path.match('_(.+).svelte');
				const { default: Function } = await module();

				return {
					title,
					Function
				};
			})
		);

		return {
			props: {
				components
			}
		};
	}
</script>

<script>
	export let components;

	let index = 0;
	$: component = components[index];
</script>

<svelte:head>
	<title>borntofrappe | Playground - {component.title}</title>
	<meta name="description" content="A cheerful corner on the web." />
	<link
		rel="icon"
		href="/icons/playground/{component.title.toLowerCase()}.svg"
		type="image/svg+xml"
	/>
</svelte:head>

<svelte:body
	on:click|self={() => {
		index = (index + 1) % components.length;
	}} />

<svelte:component this={component.Function} />

<style>
	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		background: hsl(41, 100%, 97%);
		color: hsl(44, 30%, 17%);
		display: grid;
		place-items: center;
	}

	:global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
