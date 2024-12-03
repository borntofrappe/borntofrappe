<script>
  import svg from "./svg.js";
</script>

<div>
  <figure>
    {@html svg["fox"]}
  </figure>
  <p>
    Writing SVG syntax <em>"by hand"</em>, directly in a code editor, takes a
    lot of patience.
  </p>

  <pre><code
      ><span class="line"
        ><span class="token token-tag">&lt;</span><span
          class="token token-element">svg</span
        ><span class="token token-attribute"> viewBox</span><span
          class="token token-operator">=</span
        ><span class="token token-string">"-50 -50 100 100"</span><span
          class="token token-tag">&gt;</span
        ></span
      >
<span class="line"
        ><span class="token token-comment">  &lt;!-- ... --&gt;</span></span
      >
<span class="line"
        ><span class="token token-tag">&lt;/</span><span
          class="token token-element">svg</span
        ><span class="token token-tag">&gt;</span></span
      ></code
    ></pre>

  <p>
    You have full control over the appearance of the graphic, but it's up to you
    to fill the canvas with elements and attributes, one line after the other.
  </p>

  <p>
    Given enough time you may forgive the task, but if your intention is to show
    the result on the web, there are ways to ease the feat. With JavaScript
    specifically, you gain access to a host of methods, helping you compose the
    graphic and even create intriguing designs.
  </p>
</div>

<style>
  div > * + * {
    margin-block-start: 0.5rem;
  }

  div > figure {
    float: right;
    inline-size: 100%;
    max-inline-size: 10rem;
    margin-left: 0 0 0.5rem 0.5rem;
    rotate: 20deg;
    shape-outside: polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      30% 85%,
      10% 57.5%,
      0% 25%
    );
  }

  div > pre {
    clear: right;
    display: inline-block;
  }

  pre {
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    background: #fdf6e3;
    color: #5c6a72;
  }

  .token-tag,
  .token-string {
    color: #8da101;
  }

  .token-element {
    color: #f57d26;
  }

  .token-operator {
    color: #8da101;
  }

  .token-attribute {
    color: #dfa000;
  }

  .token-comment {
    font-style: italic;
    color: #939f91;
  }
</style>
