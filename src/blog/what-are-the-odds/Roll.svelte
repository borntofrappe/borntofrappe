<script>
	import { onMount } from 'svelte';
	let animate = null;
	let value = `#dice-${Math.floor(Math.random() * 6) + 1}`;
	$: values = [
		...Array(28)
			.fill()
			.map((_, i) => `#roll-${i + 1}`),
		value
	].join(';');

	const handleRoll = () => {
		value = `#dice-${Math.floor(Math.random() * 6) + 1}`;
	};

	onMount(() => {
		animate.addEventListener('beginEvent', handleRoll);

		return () => {
			animate.removeEventListener('beginEvent', handleRoll);
		};
	});
</script>

<svg style="display: block;" viewBox="0 0 1 1">
	<use href="#roll-1" width="1" height="1">
		<animate
			bind:this={animate}
			begin="click"
			restart="whenNotActive"
			attributeName="href"
			{values}
			dur="1.8s"
			fill="freeze"
		/>
	</use>
</svg>
