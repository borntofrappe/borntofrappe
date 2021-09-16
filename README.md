# borntofrappe

_What's this?_ my personal website! There's bound to be a homepage and, fingers crossed, a blog too. Past that, [I'm open to suggestions](https://github.com/borntofrappe/borntofrappe/issues/new?labels=suggestion).

<details open>
<summary>
<strong>Development notes</strong>

Following [the documentation](https://kit.svelte.dev/docs) with excessive detail.

</summary>

## Getting started

```bash
npm init svelte@next
```

Questions from the command line:

1. Directory not empty. Continue? **y**

2. Which Svelte app template? **Skeleton project**

3. Use TypeScript? **No**

4. Add ESLint for code linting? **Yes**

5. Add Prettier for code formatting? **Yes**

The command overrides this `README.md`, but the notes are one `ctrl+z` shortcut away.

A few passages from the markdown document are however worth remembering:

- the `@next` is temporary

- run

  ```bash
  npm run dev
  ```

- build

  1.  install an [adapter](https://kit.svelte.dev/docs#adapters)

  2.  build

      ```bash
      npm run build
      ```

  3.  preview local built

      ```bash
      npm run preview
      ```

First off, however, install the necessary packages.

```bash
npm install
```

The page runs on `http://localhost:3000`.

</details>
