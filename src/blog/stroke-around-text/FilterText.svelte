<script>
  let text = $state("Filtered text");

  $effect(() => {
    if (text === "") {
      text = "quite rough";
    }
  });
</script>

<div>
  <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px">
    <defs>
      <filter id="filter-black-stroke">
        <feFlood flood-color="black" result="fe-color" />
        <feMorphology in="SourceAlpha" operator="dilate" radius="2" />
        <feComposite in="fe-color" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>

  <p contenteditable bind:textContent={text}></p>
</div>

<style>
  p {
    font-family: serif;
    font-size: 3.5rem;
    margin-block: 0;
    color: white;
    filter: url("#filter-black-stroke");
  }
</style>
