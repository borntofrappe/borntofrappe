<script context="module">
  export const prerender = true;

  export async function load({ page }) {
    const posts = Object.fromEntries(
      await Promise.all(
        Object.entries(import.meta.glob('/src/blog/*.svx')).map(
          async ([path, post]) => {
            const filename = path.split('/').pop();
            const slug = filename.slice(0, -4);

            return [slug, post];
          }
        )
      )
    );

    const post = posts[page.params.slug];
    if (post) {
      const { metadata, default: Module } = await post();

      return {
        props: {
          ...metadata,
          Module,
          slug: page.params.slug,
        },
      };
    }
    return {
      status: 404,
      error: 'Post not found',
    };
  }
</script>

<script>
	import Meta from '$lib/Meta.svelte';
	import icons from '$lib/_icons.js';

  export let Module;
  export let slug;
  export let title;
  export let description;
  export let tags;

  const meta = {
		title: `borntofrappe / blog / ${slug}`,
		description: description,
		url: `/blog/${slug}`,
		image: 'blog-post'
	}
</script>

<Meta {...meta} />

<header>
  <h1>{title}</h1>
  {#if tags}
    <h2 class="visually-hidden">Tags</h2>
    <ul>
      {#each tags as tag}
        <li>
          <span class="visually-hidden">{tag}</span>
          {@html icons[tag] || icons.bug}
        </li>
      {/each}
    </ul>
  {/if}
</header>

<main>
  <Module />
</main>

<style>
  header {
    text-align: center;
    padding: 5rem 1rem 4rem;
    color: hsl(215, 10%, 97%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    background-position: 0 100%;
    position: relative;
    line-height: initial;
  }

  header::before {
    line-height: 0;
    position: absolute;
    top: 0;
    width: 8rem;
    right: 50%;
    transform: translate(-50%, 0rem) rotate(180deg);
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -45 120 80"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="hsl(215, 10%25, 97%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  }

  header::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    height: 20px;
    transform: scaleY(-1);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
    mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
    -webkit-mask-size: 100px 40px;
    mask-size: 100px 40px;
    -webkit-mask-position: 50% 0;
    mask-position: 50% 0;
  }

  header h1 {
    color: inherit;
    max-width: 40rem;
    text-align: center;
    margin: 0 auto;
  }

  header ul {
    list-style: none;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    z-index: 5;
  }

  header ul li {
    flex-shrink: 0;
    padding: 10px;
    border-radius: 50%;
    margin: 0px 22.5px;
    width: 55px;
    height: 55px;
    color: hsl(215, 22%, 5%);
    color: var(--grey-0);
    background: hsl(215, 10%, 97%);
    background: var(--grey-10);
    border: 0.3rem solid currentColor;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }

  @supports (display: grid) {
    header ul {
      align-items: initial;
      display: grid;
      grid-auto-columns: 100px;
      justify-items: center;
      grid-auto-flow: column;
    }

    header ul li {
      flex-shrink: initial;
      margin: 0px;
    }
  }

  header ul li :global(svg) {
    height: 100%;
    width: auto;
  }

  header ul li:hover {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  header ul::-webkit-scrollbar {
    height: 0.3rem;
  }

  header ul::-webkit-scrollbar-track {
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
  }

  header ul::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: hsl(340, 90%, 55%);
    background: var(--primary-6);
  }

  main {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 40rem;
    margin: 3rem auto 5rem;
  }

  main > :global(* + *) {
    margin-top: 0.75em;
  }

  main :global(h2),
  main :global(h3) {
    margin-top: 1.25em;
  }

  main :global(p > code) {
    font-weight: 700;
    font-family: inherit;
    color: hsl(215, 10%, 98%);
    color: var(--frappe-grey-10);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    box-shadow: 0 0.2rem hsl(212, 12%, 45%);
    box-shadow: 0 0.2rem var(--frappe-grey-5);
    border-radius: 0.25rem;
    padding: 0.1em 0.25em;
    white-space: nowrap;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) main p > code) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] main p > code) {
    font-weight: 600;
  }

  main :global(.code) {
    line-height: initial;
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
    font-size: 0.83rem;
    font-size: var(--size-300);
    margin: 0;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    line-height: 2;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  @media (min-width: 45rem) {
    main :global(.code pre) {
      font-size: 1rem;
      font-size: var(--size-400);
    }
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

  main :global(h2),
  main :global(h3),
  main :global(h4) {
    display: flex;
    align-items: center;
  }

  main :global(h2 a),
  main :global(h3 a),
  main :global(h4 a) {
    opacity: 0.2;
    margin-left: 0.5rem;
    width: 1em;
    height: 1em;
    transition-property: opacity, color;
    transition-duration: 0.25s;
    transition-duration: var(--transition-duration);
    transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition-timing-function: var(--ease-in-out-sine);
  }

  main :global(h2 a:focus),
  main :global(h3 a:focus),
  main :global(h4 a:focus) {
    opacity: 1;
  }

  main :global(h2 a:hover),
  main :global(h3 a:hover),
  main :global(h4 a:hover) {
    opacity: 1;
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(h2 a svg),
  main :global(h3 a svg),
  main :global(h4 a svg) {
    width: 100%;
    height: auto;
  }

  main :global(ul),
  main :global(ol) {
    list-style-position: inside;
  }

  main :global(ul li::marker),
  main :global(ol li::marker) {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(ol li::marker) {
    font-weight: 700;
  }

  main :global(ul ul),
  main :global(ol ol) {
    margin-top: 0.6rem;
    margin-left: 1em;
  }

  main :global(ul > * + *),
  main :global(ol > * + *) {
    margin-top: 0.5em;
  }

  main :global(li) {
    line-height: 1.5;
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
      top: 0.85em;
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
      font-weight: 700;
      position: absolute;
      top: 0.85em;
      right: 100%;
      width: 1.5em;
      width: var(--badge-size);
      height: 1.5em;
      height: var(--badge-size);
      text-align: center;
      transform: translate(-0.25em, -50%) scale(0.8);
    }

    main :global(ol li::after) {
      content: '';
      position: absolute;
      top: 0.85em;
      right: 100%;
      width: 1.5em;
      width: var(--badge-size);
      height: 1.5em;
      height: var(--badge-size);
      background: hsl(340, 90%, 55%);
      background: var(--primary-6);
      transform: translate(-0.25em, -50%);
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M 0 -45 q -18 10 -36 10 v 55 c 8 15 20 20 36 25 c 15 -5 27 -10 36 -25 v -55 q -18 0 -36 -10z" /%3E%3C/g%3E%3C/svg%3E');
    }
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) main ol li::marker),
    :global(html:not([data-preference]) main ol li::before) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] main ol li::marker),
  :global(html[data-preference='dark'] main ol li::before) {
    font-weight: 600;
  }

  main :global(blockquote) {
    align-self: center;
    text-align: center;
    line-height: 2;
    padding: 0.75rem 2rem;
    border-radius: 0.4rem;
    background: hsl(335, 100%, 86%);
    background: var(--primary-9);
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
    font-size: 0.83rem;
    font-size: var(--size-300);
    font-weight: 600;
    padding: 0 1rem 0.7rem;
  }

  main :global(table tbody tr td) {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.83rem;
    font-size: var(--size-300);
    padding: 0.5rem 1rem;
  }

  @media (min-width: 45rem) {
    main :global(table thead tr th),
    main :global(table tbody tr td) {
      font-size: 1rem;
      font-size: var(--size-400);
    }
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