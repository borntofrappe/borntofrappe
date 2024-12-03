<script>
  import { onMount } from "svelte";

  /** @type { HTMLDivElement }*/
  let element;

  onMount(() => {
    const template = /** @type { HTMLTemplateElement }*/ (
      element.querySelector("template")
    );
    const clone = template.content.cloneNode(true);
    element.appendChild(clone);
  });
</script>

<div bind:this={element}>
  <template>
    <h2>Title</h2>
    <svg style="display: block" width="5em" height="1em" viewBox="0 0 5 1">
      <defs>
        <symbol
          id="icon-star"
          viewBox="-24.373531341552734 -25.53499984741211 48.74706268310547 46.54783630371094"
        >
          <path
            transform="scale(0.83)"
            fill="currentColor"
            d="M 0 15 C -17.64 24.27 -17.64 24.27 -14.27 4.63 -28.54 -9.28 -28.54 -9.28 -8.82 -12.14 0 -30 0 -30 8.82 -12.14 28.54 -9.28 28.54 -9.28 14.27 4.63 17.64 24.27 17.64 24.27 0 15"
          />
        </symbol>
      </defs>
      <use width="1" height="1" href="#icon-star" />
      <use x="1" width="1" height="1" href="#icon-star" />
      <use x="2" width="1" height="1" href="#icon-star" />
      <use x="3" width="1" height="1" href="#icon-star" />
      <use x="4" width="1" height="1" href="#icon-star" />
    </svg>
    <p>A short description</p>
  </template>
</div>
