<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				message: error.message
			}
		};
	}
</script>

<script>
	import SteeringPoints from './steering/index.svelte';

	export let status;
	export let message;
</script>

<svelte:head>
	<title>borntofrappe | {status}</title>
	<meta name="description" content="" />
</svelte:head>

<main class="visually-hidden">
	<h1>Status code {status}</h1>
	<p>Here's the error message for context: <mark>{message}</mark></p>
</main>

<SteeringPoints text={status.toString()} />
