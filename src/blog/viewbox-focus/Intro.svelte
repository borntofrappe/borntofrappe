<script>
  import svg from "./svg.js";
</script>

<div>
  <figure>
    {@html svg["microscope"]}
  </figure>

  <p>
    In <a href="/viewbox-origin">a previous article</a> we considered the
    <code>viewBox</code> attribute and tinkered with a couple of values. We changed
    the width of the SVG canvas to focus on a section of a line chart and modified
    the origin to scan the chart horizontally.
  </p>

  <p>
    It is however possible to explore the string further and consider the entire
    set of numbers, again with practical use cases. And assuredly for silly
    experiments.
  </p>
</div>

<style>
  figure {
    max-inline-size: 12rem;
  }

  div > p + p {
    margin-block-start: 1rem;
  }

  div > figure {
    float: left;
    inline-size: 100%;
    margin: 0 1rem 0.5rem 0;
  }

  @media screen and (max-width: 32rem) {
    div > figure {
      margin: initial;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    div > figure {
      margin-block-start: 1rem;
      order: 1;
      align-self: center;
      inline-size: 100%;
    }
  }
</style>
