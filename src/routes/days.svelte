<svelte:head>
	<title>borntofrappe / days</title>
</svelte:head>

<article>
	<h2><time datetime="2021-10-22T23:26">Day 0</time> - A simple start</h2>
	<h3>
		<a href="https://kit.svelte.dev/docs#introduction-getting-started">Fresh install</a>
	</h3>

	<pre>
    <code>
npm init svelte@next
npm install 
npm run dev
    </code>
  </pre>

	<p>
		SvelteKit because Svelte. Svelte because HTML, CSS and JavaScript. HTML and friends because the
		web.
	</p>

	<h3>
		<a href="https://kit.svelte.dev/docs#layouts">Tentative layout</a>
	</h3>

	<pre>
    <code>
&#60;nav&#62;&#60;/nav&#62;
&#60;slot /&#62;
&#60;footer&#62;&#60;/footer&#62;
    </code>
  </pre>

	<h3>
		<a href="https://kit.svelte.dev/docs#adapters">Rapid deploy</a>
	</h3>

	<pre>
    <code>
npm i -D @sveltejs/adapter-netlify@next
    </code>
  </pre>

	<p>Netlify because serverless. And jam. Possibly jam.</p>

	<h3>Pesky error</h3>

	<pre>
    <code>
[functions]
  node_bundler = "esbuild"
    </code>
  </pre>

	<p>14.8.1 because that's the version I have locally.</p>
</article>
