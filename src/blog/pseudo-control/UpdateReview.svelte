<script>
  import "./update-review.js";
</script>

<update-review class="update" stars="4">
  <h2 slot="title">quick-review</h2>
  <p slot="description">
    New and improved web component, with style and a cool dark theme.
  </p>
</update-review>

<style>
  update-review:not(:defined) {
    display: none;
  }

  ::part(stars) {
    color: hsl(45 97% 54%);
  }
</style>
