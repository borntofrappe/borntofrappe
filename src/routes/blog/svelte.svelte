<script>
	let counter = 0;
</script>

<p>
	This is a `.svelte` document, created directly in the blog folder:
	`src/routes/blog/svelte.svelte`.
</p>

<p>Here's a nice button, incrementing the value <strong>{counter}</strong></p>

<button
	on:click={() => {
		counter = counter + 1;
	}}
>
	Increment
</button>

<style>
	button {
		padding: 0.25rem 0.5rem;
		border: 1px solid currentColor;
		border-radius: 10px;
		background: none;
	}
</style>
