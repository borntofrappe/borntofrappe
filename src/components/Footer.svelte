<style>
  footer {
    color: var(--grey-0);
    background: var(--primary-8);
    text-align: center;
    padding: 3rem 1rem 2rem;
    margin-top: auto;
    position: relative;
  }
  footer a {
    font-family: "Catamaran", sans-serif;
    font-weight: 500;
    letter-spacing: 0.02rem;
    color: inherit;
    text-decoration: none;
    border-bottom: 0.1rem solid var(--accent-4);
    transition: color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }
  footer a:hover,
  footer a:focus {
    color: var(--accent-4);
  }
  footer a:focus {
    outline-color: var(--accent-4);
  }

  footer svg {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    color: var(--primary-8);
    background: var(--grey-0);
    border: 0.4rem solid currentColor;
    border-radius: 50%;
    display: block;
    transition: color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }

  footer svg g {
    animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    animation: heart-beat var(--heart-animation-duration) var(--ease-in-out-sine) infinite;
    animation-play-state: paused;
  }

  @keyframes heart-beat {
    10%,
    30% {
      transform: scale(0.8);
    }
    0%,
    20%,
    40% {
      transform: scale(1);
    }
  }

  footer a:hover + svg,
  footer a:focus + svg {
    color: var(--accent-4);
  }
  footer a:hover + svg g,
  footer a:focus + svg g {
    animation-play-state: running;
  }

  @media (prefers-reduced-motion: reduce) {
    footer a:hover + svg g,
    footer a:focus + svg g,
    footer svg:hover g {
      animation-play-state: paused;
    }
  }

  footer svg:hover {
    color: var(--accent-4);
  }
</style>

<footer>
  <a href="https://twitter.com/borntofrappe">@borntofrappe</a>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="32" height="32">
    <g stroke-width="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="currentColor">
      <path transform="scale(0.8)" d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" />
    </g>
  </svg>
</footer>
