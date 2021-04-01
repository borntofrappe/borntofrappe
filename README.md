# Hello World

This is my personal website, built with:

- [Svelte](https://github.com/sveltejs/svelte)

- [SvelteKit](https://github.com/sveltejs/kit)

## Helpful Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)

## Getting Started

```bash
npm init svelte@next
```

At the time of writing, the instruction is all that is necessary to set up the environment with [svelte kit](https://kit.svelte.dev/docs#introduction-getting-started)

Choices:

- Directory not empty. Continue? y

- Use TypeScript in components? N

- What do you want to use for writing Styles in Svelte components? CSS

- Add ESLint for code linting? y

- Add Prettier for code formatting? y

I'm unsure about the choice regarding ESLint _together_ with Prettier, as there might be some overlap, but to get started they seem to provide helpful safeguards.

```bash
npm install
```

I can't seem to install the dependencies with the current version of node.

```bash
npm ERR! notsup Required: {"node":"^10 || ^12 || >=14"}
npm ERR! notsup Actual:   {"npm":"6.13.7","node":"13.11.0"}
```

After updating node, however, it seems the instruction works fine.

```bash
npm run dev
```

`npm run dev` sets up the environment on `http://localhost:3000`, with a default page highlighting an uplifting message and a counter component. An optional flag forcedly opens the default browser in the prescribed location.

```bash
npm run dev -- --open
```
