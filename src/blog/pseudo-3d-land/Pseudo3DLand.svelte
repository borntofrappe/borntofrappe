<script>
  import svg from "./svg.js";
  import Pseudo3D from "./Pseudo3D.svelte";
</script>

<div>
  <figure>
    {@html svg["2d"]}
  </figure>

  <figure>
    <Pseudo3D />
  </figure>
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  div > figure {
    flex-basis: 300px;
  }
</style>
