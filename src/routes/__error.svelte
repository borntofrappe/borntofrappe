<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script>
  export let error;
  export let status;
</script>

<h1>{status}</h1>

<p>Something bad happened. Here's the error message for context.</p>

<pre>
  <code>{error.message}</code>
</pre>

<p>
  If you think this is a mistake I could fix, please consider filing an issue <a
    href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&labels=bug"
    >on github</a
  >
</p>

<p>
  If you need some guidance, <a href="/">home</a> is always a good place to start
</p>
