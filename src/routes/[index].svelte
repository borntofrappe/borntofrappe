<script context="module">
	export async function load({ params }) {
		const { index } = params;

		const modules = import.meta.glob('./../blog/**/*.{md,svx}');

		for (const path in modules) {
			const [slug] = path.split('/').pop().split('.');

			if (index === slug) {
				const { default: Component } = await modules[path]();
				return {
					props: { Component }
				};
			}
		}

		return {
			status: 404,
			error: `'/${params}' page does not exist.`
		};
	}
</script>

<script>
	export let Component;
</script>

<svelte:component this={Component} />
