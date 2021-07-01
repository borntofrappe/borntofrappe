<script context="module">
  export async function load({ page, session }) {
    const { slug } = page.params;
    const { posts } = session;

    const match = posts.find((post) => post.slug === slug);

    if (match) {
      const posts = import.meta.glob('/src/blog/*.{md,svx}');
      const post = await posts[match.path]();

      const { default: Md, metadata } = post;
      const { title, keywords } = metadata;

      return {
        props: {
          title,
          keywords,
          Md,
        },
      };
    }
    return {
      status: 404,
      error: `Not found: blog/${slug}`,
    };
  }
</script>

<script>
  import Header from '$lib/components/blog/post/Header.svelte';

  export let title;
  export let keywords;
  export let Md;
</script>

<svelte:head>
  <meta
    name="description"
    content="{title}, a blog post from borntofrappe described by the following keywords: {keywords.join(
      ', '
    )}."
  />
</svelte:head>

<Header {title} {keywords} />

<main id="content" class="max-width-container">
  <svelte:component this={Md} />
</main>

<style>
  #content {
    z-index: 0;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  main > :global(* + *) {
    margin-top: 0.75em;
  }

  main > :global(*:first-child) {
    margin-top: 0;
  }

  main :global(h2),
  main :global(h3) {
    margin-top: 1em;
  }

  main :global(h2),
  main:global(h3),
  main:global(h4) {
    display: flex;
    align-items: center;
  }

  main :global(h2 a),
  main:global(h3 a),
  main:global(h4 a) {
    opacity: 0.2;
    margin-left: 0.5rem;
    width: 0.5em;
    height: 0.5em;
    transition-property: opacity, color;
    transition-duration: 0.25s;
    transition-duration: var(--transition-duration);
    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition-timing-function: var(--ease-in-out-sine);
    background: currentColor;
    border-radius: 50%;
  }

  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {
    main :global(h2 a),
    main:global(h3 a),
    main:global(h4 a) {
      border-radius: initial;
      background: initial;
      position: relative;
      width: 1em;
      height: 1em;
      z-index: 0;
    }

    main :global(h2 a::before),
    main:global(h3 a::before),
    main:global(h4 a::before) {
      z-index: -5;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: currentColor;
      mask-image: url('data:image/svg+xml,%3Csvg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    }
  }
  main :global(h2 a:focus),
  main:global(h3 a:focus),
  main:global(h4 a:focus) {
    opacity: 1;
  }

  main :global(h2 a:hover),
  main:global(h3 a:hover),
  main:global(h4 a:hover) {
    opacity: 1;
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(p > code) {
    color: hsl(350, 100%, 8%);
    color: var(--primary-0);
    background: hsl(330, 100%, 92%);
    background: var(--primary-10);
  }

  main :global(.code > span),
  main :global(.code pre) {
    border-radius: 0.4rem;
    padding: 0.8rem 1rem;
  }

  main :global(.code > span) {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    color: hsl(215, 10%, 98%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
    display: flex;
    align-items: center;
  }

  main :global(.code > span svg) {
    width: 1.25em;
    height: auto;
    margin-right: 0.5rem;
  }

  main :global(.code:hover > span) {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(.code pre) {
    margin: 0;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    line-height: 2;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  main :global(.code pre) {
    overflow-x: auto;
  }

  main :global(.code pre::-webkit-scrollbar) {
    height: 0.4rem;
  }

  main :global(.code pre::-webkit-scrollbar-track) {
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
  }

  main :global(.code pre::-webkit-scrollbar-thumb) {
    background: hsl(340, 90%, 55%);
    background: var(--primary-6);
    border-radius: 0.2rem;
  }

  main :global(ul),
  main :global(ol) {
    line-height: 1.5;
    list-style-position: inside;
  }

  main :global(ul li::marker),
  main :global(ol li::marker) {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(ol li::marker) {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 700;
  }

  main :global(ul ul),
  main :global(ol ol) {
    margin-top: 0.6em;
    margin-left: 0.6em;
  }

  main :global(ul > * + *),
  main :global(ol > * + *) {
    margin-top: 1em;
  }

  main :global(ul li > * + *),
  main :global(ol li > * + *) {
    margin-top: 0.5em;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) #content ol li::marker) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] #content ol li::marker) {
    font-weight: 600;
  }

  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {
    main :global(ul) {
      --badge-size: 1.5em;
      list-style: none;
      margin-left: 1.5em;
      margin-left: var(--badge-size);
    }

    main :global(ul li) {
      position: relative;
    }

    main :global(ul li::before) {
      content: '';
      position: absolute;
      top: 1em;
      right: 100%;
      width: 1.5em;
      width: var(--badge-size);
      height: 1.5em;
      height: var(--badge-size);
      transform: translate(-0.25em, -50%);
      background: hsl(340, 90%, 55%);
      background: var(--primary-6);
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="10" d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3Cpath stroke-width="8" d="M -17 -0 l 12 12 21 -21" /%3E%3C/g%3E%3C/svg%3E');
    }

    main :global(ol) {
      --badge-size: 1.5em;
      list-style: none;
      margin-left: 1.5em;
      margin-left: var(--badge-size);
      counter-reset: custom-counter;
    }

    main :global(ol li) {
      position: relative;
    }

    main :global(ol li::before) {
      content: counter(custom-counter);
      counter-increment: custom-counter;
      color: hsl(340, 90%, 55%);
      color: var(--primary-6);
      font-family: 'Maven Pro', sans-serif;
      font-weight: 700;
      position: absolute;
      right: 100%;
      width: 1.5em;
      width: var(--badge-size);
      height: 1.5em;
      height: var(--badge-size);
      text-align: center;
      transform: scale(0.8);
    }

    main :global(ol li::after) {
      content: '';
      position: absolute;
      top: 0.05em;
      right: 100%;
      width: 1.5em;
      width: var(--badge-size);
      height: 1.5em;
      height: var(--badge-size);
      background: hsl(340, 90%, 55%);
      background: var(--primary-6);
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
    }

    @media (prefers-color-scheme: dark) {
      body:not([data-preference]) main :global(ol li::before) {
        font-weight: 600;
      }
    }

    body[data-preference='dark'] main :global(ol li::before) {
      font-weight: 600;
    }
  }

  main :global(blockquote) {
    align-self: center;
    text-align: center;
    line-height: 2;
    padding: 0.75rem 2rem;
    border-radius: 0.4rem;
    background: hsl(330, 100%, 92%);
    background: var(--primary-10);
    color: hsl(350, 100%, 8%);
    color: var(--primary-0);
    position: relative;
  }

  main :global(blockquote::before),
  main :global(blockquote::after) {
    content: '';
    position: absolute;
    top: 50%;
    left: 0%;
    width: 3em;
    height: 3em;
    transform: translate(-50%, -50%);
    background: hsl(340, 90%, 55%);
    background: var(--primary-6);
    -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
    mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" /%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-20 -20) scale(0.9)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(20 -25) scale(0.5)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(15 25) scale(0.8)"/%3E%3Cpath d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" transform="translate(-15 20) scale(0.4)"/%3E%3C/g%3E%3C/svg%3E');
  }

  main :global(blockquote::after) {
    left: 100%;
    transform: translate(-50%, -50%) scaleX(-1);
  }

  main :global(table) {
    padding-top: 0.7rem;
    line-height: 2;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.4rem;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    font-feature-settings: 'tnum';
    position: relative;
  }

  main :global(table::before) {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0%;
    width: 100%;
    height: 0.7rem;
    border-radius: 0.4rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    background-position: 0 100%;
  }

  main :global(table thead tr) {
    text-align: left;
  }

  main :global(table thead tr th) {
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }

  main :global(table thead tr th:hover) {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(table thead tr) {
    color: hsl(215, 10%, 97%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
  }

  main :global(table thead tr th) {
    font-family: 'Maven Pro', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0 1rem 0.7rem;
  }

  main :global(table tbody tr td) {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }

  main :global(table tbody tr:nth-last-of-type(even) td) {
    background: hsl(210, 20%, 12%);
    background: var(--frappe-grey-1);
  }

  main :global(table [align='right']) {
    text-align: right;
  }

  main :global(table [align='center']) {
    text-align: center;
  }
</style>
