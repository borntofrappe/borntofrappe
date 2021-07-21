<script>
  import Meta from '$lib/components/Meta.svelte';
  import Hero from '$lib/components/homepage/Hero.svelte';
  import Content from '$lib/components/homepage/Content.svelte';

  const title = 'Hello, World!';
  const body = 'I enjoy writing code.';

  const links = [
    {
      name: 'codepen',
      href: 'https://codepen.io/borntofrappe',
      desc: 'Marvel at the numerous demos I created to master HTML, CSS, JS, SVG, React and much more.',
    },
    {
      name: 'freecodecamp',
      href: 'https://www.freecodecamp.org/borntofrappe',
      desc: 'Admire the certifications I earned in the freeCodeCamp curriculum.',
    },
    {
      name: 'github',
      href: 'https://github.com/borntofrappe',
      desc: 'Review, fork, and improve the code I publish on Github.',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/borntofrappe',
      desc: 'Remember to follow me @borntofrappe.',
    },
  ];
</script>

<Meta
  description="Personal website of one Gabriele Corti, coding online @borntofrappe."
  image="borntofrappe"
/>

<Hero {title} {body} {links} />
<Content />
