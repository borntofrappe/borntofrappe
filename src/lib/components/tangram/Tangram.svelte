<script>
  import shapes from "./shapes.js";
  /** @typedef {import('./shapes.js').Key} Key */

  const keys = /** @type {Array<Key>}*/ (Object.keys(shapes));
  const i = Math.floor(Math.random() * keys.length);

  /** @type {{ key?: Key, padding?: number }} */
  let { key = keys[i], padding = shapes[keys[i]].padding } = $props();

  const pieces = [
    { d: "M 0 0 l 2 2 l 2 -2", fill: "#71c49a" },
    { d: "M 0 0 l 2 2 l -2 2", fill: "#f6e48e" },
    { d: "M 0 0 l 1 -1 l 0 2", fill: "#ef847a" },
    { d: "M 0 0 l 1 -1 l 1 1", fill: "#ef847a" },
    { d: "M 0 0 l 2 -2 l 0 2", fill: "#abdcc7" },
    { d: "M 0 0 l 1 -1 l 1 1 l -1 1", fill: "#71c49a" },
    { d: "M 0 0 l 1 -1 l 2 0 l -1 1", fill: "#f6e48e" },
  ];

  let paths = $derived(
    pieces.map((piece, i) => ({
      ...piece,
      style: shapes[key].styles[i],
    }))
  );
</script>

<svg
  style="display: block;"
  viewBox="{padding * -1} {padding * -1} {4 + padding * 2} {4 + padding * 2}"
>
  {#each paths as { d, fill, style }}
    <path {d} {fill} {style} />
  {/each}
</svg>
