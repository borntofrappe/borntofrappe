<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['fox']}
	</figure>
	<p>Writing SVG syntax "by hand", directly in a code editor, takes a lot of patience.</p>

	<pre class="language-html"><code class="language-html"
			><span class="token tag"
				><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span
					class="token attr-name">viewBox</span
				><span class="token attr-value"
					><span class="token punctuation attr-equals">=</span><span class="token punctuation"
						>"</span
					>-50 -50 100 100<span class="token punctuation">"</span></span
				><span class="token punctuation">&gt;</span></span
			>
	<span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"
				><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span
					class="token punctuation">&gt;</span
				></span
			></code
		></pre>

	<p>
		You have full control over the appearance of the graphic, but it's up to you to fill the canvas
		with elements and attributes, one line after the other.
	</p>

	<p>
		Given enough time you may forgive the task, but if your intention is to show the result on the
		web, there are ways to ease the feat. With JavaScript specifically, you gain access to a host of
		methods, helping you compose the graphic and even create intriguing designs.
	</p>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	div > figure {
		float: right;
		inline-size: 100%;
		max-inline-size: 10rem;
		margin-left: 0 0 0.5rem 0.5rem;
		rotate: 20deg;
		shape-outside: polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 30% 85%, 10% 57.5%, 0% 25%);
	}

	div > pre {
		clear: right;
	}
</style>
