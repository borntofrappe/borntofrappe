<script>
  import icons from '$lib/icons';

  export let title;
  export let keywords;
</script>

<header>
  <h1>{title}</h1>
  {#if keywords}
    <h2 class="visually-hidden">Keywords</h2>
    <ul>
      {#each keywords as keyword}
        <li>
          <span class="visually-hidden">{keyword}</span>
          {@html icons[keyword] || icons.bug}
        </li>
      {/each}
    </ul>
  {/if}
</header>

<style>
  header {
    text-align: center;
    padding: 3rem 0;
    padding: calc(3rem + 1em + 0.125em) 0;
    margin-bottom: 20px;
    color: hsl(215, 10%, 97%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    background-position: 0 100%;
    position: relative;
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
</style>
