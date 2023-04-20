<script>
	let x = 0.5;
</script>

<label>
	<span>Drag the handle to move the second card horizontally.</span>
	<input type="range" min="0" max="1" step="0.05" bind:value={x} />
</label>

<div class="[ code ]">
	<pre><code
			>&lt;use href="#card" width="1" height="1"/ &gt;
&lt;use <span style="font-weight: 700;">x="{x}"</span> href="#card" width="1" height="1"/ &gt;</code
		></pre>
</div>

<svg viewBox="0 0 2 1">
	<use href="#deck-card-back" width="1" height="1" />
	<use {x} href="#deck-card-back" width="1" height="1" />
</svg>

<style>
	label {
		display: block;
	}

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
