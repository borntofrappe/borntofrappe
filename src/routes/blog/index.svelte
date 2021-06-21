<script context="module">
  export async function load({ session }) {
    const { posts } = session;

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  export let posts = [];

  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  posts.forEach((post) => {
    const date = post.date;

    post.datetime = date;
    post.date = formatter.format(new Date(...date.split('-')));
  });
</script>

<main>
  <h1>Blog</h1>
  <p>
    Currently, this blog lacks substance. There are a few articles, but they
    work as a proof of concept to see how SvelteKit creates pages dynamically.
  </p>

  <p>The blog folder contains the, filler content:</p>

  <ul>
    {#each posts as { title, datetime, date, slug }}
      <li>
        <a href="/blog/{slug}">{title}</a>, dated <time {datetime}>{date}</time>
      </li>
    {/each}
  </ul>
</main>
