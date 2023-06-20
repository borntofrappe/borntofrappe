<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import { time } from '$lib/utils/stores.js';

	$: datetime = `${$time.getHours()}:${$time.getMinutes()}`;
</script>

<svelte:head>
	<title>Time | {title}</title>
	<meta name="description" content="Time of day with a twelve hour clock." />
</svelte:head>

<h1>What time it is?</h1>
<p><time {datetime}>{datetime}</time></p>
