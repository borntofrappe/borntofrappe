<script>
  let text = $state("Filtered text");

  $effect(() => {
    if (text === "") {
      text = "quite rough";
    }
  });
</script>

<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px">
  <defs>
    <filter id="filter-black-stroke">
      <feFlood flood-color="black" result="fe-color" />
      <feMorphology
        in="SourceAlpha"
        operator="dilate"
        radius="2"
        result="fe-outline"
      />
      <feComposite
        in="fe-color"
        in2="fe-outline"
        operator="in"
        result="fe-color-outline"
      />
      <feMerge>
        <feMergeNode in="fe-color-outline" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
</svg>

<p contenteditable bind:textContent={text}></p>

<style>
  p {
    font-family: serif;
    font-size: 3.5rem;
    margin-block: 0;
    color: white;
    filter: url("#filter-black-stroke");
  }
</style>
