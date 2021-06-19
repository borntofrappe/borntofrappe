<footer>
  <a href="https://twitter.com/borntofrappe">borntofrappe</a>
</footer>

<style>
  footer {
    --animation-duration: 2s;
    --animation-timing-function: var(--ease-in-out-sine);
    text-align: center;
    padding: 2.25rem 1rem 2rem;
    color: hsl(215, 10%, 98%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    position: relative;
  }

  footer::before {
    content: '';
    position: absolute;
    left: 0%;
    bottom: 100%;
    width: 100%;
    height: 20px;
    background: inherit;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
    mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
    -webkit-mask-size: 100px 40px;
    mask-size: 100px 40px;
    -webkit-mask-position: 50% 0;
    mask-position: 50% 0;
  }

  footer a {
    padding: 0.2rem 0;
    border: initial;
    text-decoration: none;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 600;
    border-bottom: 0.1rem solid hsl(340, 90%, 55%);
    border-bottom: 0.1rem solid var(--primary-6);
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color 0.25s var(--ease-in-out-sine);
  }

  footer a:hover,
  footer a:focus {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  footer a:focus {
    outline: none;
  }

  footer a::before,
  footer a::after {
    content: '';
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -8px;
  }

  footer a::before {
    width: 64px;
    height: 64px;
    color: hsl(215, 22%, 5%);
    color: var(--grey-0);
    background: hsl(215, 10%, 98%);
    background: var(--grey-10);
    border: 0.4rem solid currentColor;
    border-radius: 50%;
    transition: color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }

  footer a::after {
    transform: translate(-50%, -50%) scale(1);
    width: 28px;
    height: 28px;
    background: hsl(215, 22%, 5%);
    background: var(--grey-0);
    border-radius: 50%;
    transition: background 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: background var(--transition-duration) var(--ease-in-out-sine);
  }

  @supports ((mask-image: url()) or (-webkit-mask-image: url())) {
    footer a::after {
      border-radius: initial;
      mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E');
      -webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" /%3E%3C/g%3E%3C/svg%3E');
    }
  }

  footer a::after {
    animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
      paused;
    animation: heart-beat var(--animation-duration)
      var(--animation-timing-function) infinite paused;
  }

  @keyframes heart-beat {
    10%,
    30% {
      transform: translate(-50%, -50%) scale(0.7);
    }

    0%,
    20%,
    40% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  footer a:hover::before,
  footer a:focus::before {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  footer a:hover::after,
  footer a:focus::after {
    background: currentColor;
  }

  @media (prefers-reduced-motion: no-preference) {
    footer a:hover::after,
    footer a:focus::after {
      animation-play-state: running;
    }
  }
</style>
