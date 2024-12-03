<script>
  import { onMount } from "svelte";

  /** @type { SVGSVGElement } */
  let element;
  let animate = $state(false);
  onMount(() => {
    /**
     * @param { IntersectionObserverEntry[] } entries
     */
    const observation = (entries) => {
      if (entries[0].isIntersecting) {
        animate = true;
      } else {
        animate = false;
      }
    };

    const observer = new IntersectionObserver(observation);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  });
</script>

<svg
  bind:this={element}
  class:animate
  style="display: block;"
  viewBox="-47 -22 94 124"
>
  <title>Shimmering Christmas tree</title>
  <defs>
    <g id="tree-lights">
      <g fill="currentColor" stroke="none">
        <circle cx="27.74" cy="98.84" r="1.08" />
        <circle cx="7.32" cy="97.94" r="1.07" />
        <circle cx="-14.34" cy="97.13" r="1.06" />
        <circle cx="-32.53" cy="96.39" r="1.06" />
        <circle cx="-43.37" cy="95.71" r="1.05" />
        <circle cx="-44.65" cy="95.05" r="1.04" />
        <circle cx="-36.25" cy="94.38" r="1.03" />
        <circle cx="-20.16" cy="93.66" r="1.03" />
        <circle cx="0" cy="92.86" r="1.02" />
        <circle cx="19.79" cy="91.99" r="1.01" />
        <circle cx="34.94" cy="91.04" r="1" />
        <circle cx="42.27" cy="90.05" r="0.99" />
        <circle cx="40.32" cy="89.05" r="0.98" />
        <circle cx="29.69" cy="88.08" r="0.96" />
        <circle cx="12.85" cy="87.17" r="0.95" />
        <circle cx="-6.45" cy="86.32" r="0.95" />
        <circle cx="-23.99" cy="85.55" r="0.94" />
        <circle cx="-36" cy="84.84" r="0.93" />
        <circle cx="-40" cy="84.16" r="0.92" />
        <circle cx="-35.29" cy="83.48" r="0.91" />
        <circle cx="-23.05" cy="82.76" r="0.91" />
        <circle cx="-6.07" cy="81.98" r="0.9" />
        <circle cx="11.86" cy="81.13" r="0.89" />
        <circle cx="26.87" cy="80.22" r="0.88" />
        <circle cx="35.75" cy="79.26" r="0.87" />
        <circle cx="36.74" cy="78.28" r="0.86" />
        <circle cx="29.77" cy="77.31" r="0.85" />
        <circle cx="16.52" cy="76.39" r="0.84" />
        <circle cx="-0.01" cy="75.53" r="0.83" />
        <circle cx="-16.17" cy="74.73" r="0.82" />
        <circle cx="-28.48" cy="73.99" r="0.81" />
        <circle cx="-34.38" cy="73.28" r="0.8" />
        <circle cx="-32.72" cy="72.58" r="0.79" />
        <circle cx="-24.05" cy="71.86" r="0.79" />
        <circle cx="-10.39" cy="71.09" r="0.78" />
        <circle cx="5.19" cy="70.27" r="0.77" />
        <circle cx="19.27" cy="69.38" r="0.76" />
        <circle cx="28.86" cy="68.45" r="0.75" />
        <circle cx="31.99" cy="67.5" r="0.74" />
        <circle cx="28.15" cy="66.54" r="0.73" />
        <circle cx="18.33" cy="65.62" r="0.72" />
        <circle cx="4.81" cy="64.74" r="0.71" />
        <circle cx="-9.4" cy="63.92" r="0.7" />
        <circle cx="-21.22" cy="63.15" r="0.69" />
        <circle cx="-28.16" cy="62.42" r="0.68" />
        <circle cx="-28.85" cy="61.7" r="0.67" />
        <circle cx="-23.3" cy="60.97" r="0.67" />
        <circle cx="-12.9" cy="60.21" r="0.66" />
        <circle cx="-0.01" cy="59.4" r="0.65" />
        <circle cx="12.53" cy="58.53" r="0.64" />
        <circle cx="22" cy="57.63" r="0.63" />
        <circle cx="26.47" cy="56.7" r="0.62" />
        <circle cx="25.1" cy="55.76" r="0.61" />
        <circle cx="18.38" cy="54.84" r="0.6" />
        <circle cx="7.91" cy="53.96" r="0.59" />
        <circle cx="-3.95" cy="53.12" r="0.58" />
        <circle cx="-14.58" cy="52.33" r="0.57" />
        <circle cx="-21.75" cy="51.57" r="0.56" />
        <circle cx="-24" cy="50.83" r="0.56" />
        <circle cx="-21.03" cy="50.08" r="0.55" />
        <circle cx="-13.64" cy="49.32" r="0.54" />
        <circle cx="-3.57" cy="48.52" r="0.53" />
        <circle cx="6.92" cy="47.67" r="0.52" />
        <circle cx="15.55" cy="46.79" r="0.51" />
        <circle cx="20.54" cy="45.88" r="0.5" />
        <circle cx="20.93" cy="44.97" r="0.49" />
        <circle cx="16.82" cy="44.06" r="0.48" />
        <circle cx="9.26" cy="43.18" r="0.47" />
        <circle cx="-0.01" cy="42.33" r="0.46" />
        <circle cx="-8.9" cy="41.52" r="0.45" />
        <circle cx="-15.54" cy="40.73" r="0.44" />
        <circle cx="-18.57" cy="39.97" r="0.44" />
        <circle cx="-17.5" cy="39.21" r="0.43" />
        <circle cx="-12.73" cy="38.43" r="0.42" />
        <circle cx="-5.44" cy="37.63" r="0.41" />
        <circle cx="2.69" cy="36.8" r="0.4" />
        <circle cx="9.87" cy="35.94" r="0.39" />
        <circle cx="14.61" cy="35.06" r="0.38" />
        <circle cx="15.99" cy="34.16" r="0.37" />
        <circle cx="13.89" cy="33.27" r="0.36" />
        <circle cx="8.93" cy="32.39" r="0.35" />
        <circle cx="2.31" cy="31.54" r="0.34" />
        <circle cx="-4.45" cy="30.71" r="0.33" />
        <circle cx="-9.9" cy="29.91" r="0.33" />
        <circle cx="-12.94" cy="29.13" r="0.32" />
        <circle cx="-13.04" cy="28.35" r="0.31" />
        <circle cx="-10.36" cy="27.56" r="0.3" />
        <circle cx="-5.63" cy="26.75" r="0.29" />
        <circle cx="0" cy="25.93" r="0.28" />
        <circle cx="5.26" cy="25.08" r="0.27" />
        <circle cx="9.06" cy="24.22" r="0.26" />
        <circle cx="10.66" cy="23.34" r="0.25" />
        <circle cx="9.89" cy="22.47" r="0.24" />
        <circle cx="7.07" cy="21.6" r="0.23" />
        <circle cx="2.96" cy="20.75" r="0.22" />
        <circle cx="-1.44" cy="19.92" r="0.22" />
        <circle cx="-5.18" cy="19.1" r="0.21" />
        <circle cx="-7.49" cy="18.3" r="0.2" />
        <circle cx="-8" cy="17.5" r="0.19" />
        <circle cx="-6.78" cy="16.69" r="0.18" />
        <circle cx="-4.24" cy="15.88" r="0.17" />
        <circle cx="-1.07" cy="15.05" r="0.16" />
        <circle cx="1.97" cy="14.21" r="0.15" />
        <circle cx="4.24" cy="13.36" r="0.14" />
        <circle cx="5.32" cy="12.51" r="0.13" />
        <circle cx="5.13" cy="11.65" r="0.12" />
        <circle cx="3.88" cy="10.8" r="0.11" />
        <circle cx="1.99" cy="9.96" r="0.11" />
        <circle cx="-0.01" cy="9.13" r="0.1" />
        <circle cx="-1.64" cy="8.3" r="0.09" />
        <circle cx="-2.59" cy="7.48" r="0.08" />
        <circle cx="-2.77" cy="6.66" r="0.07" />
        <circle cx="-2.29" cy="5.83" r="0.06" />
        <circle cx="-1.42" cy="5.01" r="0.05" />
        <circle cx="-0.5" cy="4.17" r="0.04" />
        <circle cx="0.18" cy="3.34" r="0.03" />
        <circle cx="0.47" cy="2.5" r="0.02" />
        <circle cx="0.35" cy="1.66" r="0.01" />
        <circle cx="0" cy="0.83" r="0.01" />
      </g>
      <path
        transform="translate(0 -7)"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        pathLength="1"
        stroke-dasharray="0 0.05"
        d="M 0 8 C -9.41 12.94 -9.41 12.94 -7.61 2.47 C -15.22 -4.95 -15.22 -4.95 -4.71 -6.48 C -0.01 -16 -0.01 -16 4.7 -6.48 C 15.21 -4.95 15.21 -4.95 7.6 2.47 C 9.4 12.94 9.4 12.94 0 8 Z"
      />
    </g>
  </defs>
  <use opacity="0.7" href="#tree-lights" />
  <use class="fade" style="color: hsl(44 93% 57%);" href="#tree-lights" />
</svg>

<style>
  .fade {
    animation: fade 12s infinite linear paused;
  }

  svg.animate .fade {
    animation-play-state: running;
  }

  @keyframes fade {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
    }
    40%,
    60% {
      opacity: 1;
    }
  }
</style>
