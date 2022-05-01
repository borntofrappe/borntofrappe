<script context="module">
	export async function load() {
		const components = await Promise.all(
			Object.values(import.meta.glob('./_*.svelte')).map(async (module) => {
				const { metatada, default: component } = await module();
				console.log(metatada);
				return component;
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
</script>

<svelte:head>
	<title>borntofrappe | Playground</title>
	<meta name="description" content="A cheerful corner on the web." />
</svelte:head>

<svelte:body
	on:click|self={() => {
		index = (index + 1) % components.length;
	}} />

<svelte:component this={components[index]} />

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
