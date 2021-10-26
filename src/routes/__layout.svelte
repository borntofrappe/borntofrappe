<script>
	import '../app.css';
</script>

<div>
	<slot />
	<footer>
		<time datetime="2021-10-26T23:32">October 26, 2021</time>
	</footer>
</div>

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		max-width: 42rem;
		margin: 0rem auto;
		padding: 1rem;
	}

	footer {
		margin-top: auto;
		text-align: right;
	}
</style>
