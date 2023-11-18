<div class="layout">
	<figure>
		<div role="img" class="background-image" />
		<figcaption>red lime blue</figcaption>
	</figure>

	<figure>
		<div role="img" class="background-image" style="filter: invert(100%)" />
		<figcaption>cyan magenta yellow</figcaption>
	</figure>
</div>

<style>
	.layout {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	figure {
		padding: 0.5rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	figcaption {
		text-align: center;
	}

	.background-image {
		inline-size: 10rem;
		block-size: 10rem;
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.125 12 12">\
      <g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\
          <path style="color: red;" transform="translate(0 -3)" d="M -2.5 1.75 0 -2.25 2.5 1.75Z" />\
          <rect style="color: lime;" transform="translate(-3.5 3)" x="-2" y="-2" width="4" height="4" />\
          <circle style="color: blue;" transform="translate(3.5 3)" r="2" />\
      </g>\
  </svg>');
	}
</style>
