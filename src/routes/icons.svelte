<script>
	export const prerender = true;

  import Meta from '$lib/Meta.svelte';
	import icons from '$lib/_icons.js';

  const meta = {
		title: 'icons',
		description: 'Custom icons @borntofrappe.',
		url: '',
		image: 'borntofrappe'
	};
</script>

<Meta {...meta} />

<header>
	<h1>SVG Syntax by Hand</h1>
	<p>A few icons for your consideration</p>
</header>

<main id="content">
  <ul>
    {#each Object.entries(icons) as [icon, syntax]}
      <li>
        <a href="data:image/svg+xml,utf8,{syntax}" download="{icon}.svg">
          {@html syntax}
          <span>{icon}</span>
        </a>
      </li>  
    {/each}
  </ul>
</main>

<style>
  	header {
		max-width: 40rem;
		width: 90vw;
		margin: 0rem auto;
		padding: 3rem 0 3.5rem;
		line-height: 1.75;
		color: hsl(215, 10%, 97%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
		z-index: 5;
	}

	header > * + * {
		margin-top: 1em;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: inherit;
		z-index: -5;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100vw;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
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
		z-index: -5;
	}

	header h1 {
		color: inherit;
	}

	header p {
		position: relative;
	}

	@supports (display: grid) {
		:global(body) {
			overflow-x: initial;
		}

		header {
			width: 100%;
			max-width: initial;
			margin: initial;
			display: grid;
			grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
			grid-column-gap: 5vw;
		}

		header > * {
			grid-column: 2;
		}

		header::before {
			display: none;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}
      main {
        width: 90vw;
        max-width: 40rem;
        margin: 2rem auto;
      }

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
      }

      a > :global(* + *) {
        margin-top: 0.4em;
      }

      
      a :global(svg) {
        width: 2.5rem;
        height: auto;
      }

      @supports (display: grid) {
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, 5rem);
          gap: 0.5rem;
          justify-content: center;
        }
      }
</style>