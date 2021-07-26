<script>
  export let title;
  export let body;
  export let illustration = `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -90 140 140"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`;
</script>

<header>
  <h1>{title}</h1>
  <p style="--illustration: {illustration}">{body}</p>
</header>

<style>
  :global(body) {
    overflow-x: hidden;
  }

  header {
    width: 90vw;
    width: var(--width);
    max-width: 40rem;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 3rem 0;
    color: hsl(215, 10%, 97%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    position: relative;
    z-index: 0;
  }

  header > * + * {
    margin-top: 0.75em;
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
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    background-position: 0 100%;
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

  header p::after {
    content: var(--illustration);
    position: absolute;
    top: 100%;
    right: 0%;
    width: 7.5rem;
    height: 7.5rem;
  }

  @supports (disply: grid) {
    :global(body) {
      overflow-x: initial;
    }

    header {
      width: 100%;
      max-width: initial;
      margin-left: initial;
      margin-right: initial;
      display: grid;
      grid-template-columns: 1fr minmax(auto, 40rem) 1fr;
      grid-template-columns: 1fr minmax(auto, var(--max-width)) 1fr;
      gap: 0 5vw;
      background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
      background-size: 20px;
      background-position: 0 100%;
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
</style>
