<script>
  import { onMount } from "svelte";

  /** @type {{ color: string, background: string }}*/
  let { color = "#70747d", background = "#111827" } = $props();
  /** @type { HTMLCanvasElement }*/
  let canvas;
  onMount(() => {
    document.body.style.zIndex = "0";
    canvas.style.zIndex = "-1";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";

    const context = /** @type { CanvasRenderingContext2D }*/ (
      canvas.getContext("2d")
    );
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let { width: w, height: h } = canvas;
    let y0 = -1;
    let y1 = h + 1;

    const getR = () => 2 + Math.floor(Math.random() * 20) / 20;

    /** @type Array<{x: number, y: number, r: number}> */
    let flakes = [];
    for (let i = 0; i < Math.floor((w ** 2 + h ** 2) ** 0.5 / 9); i++) {
      flakes.push({
        x: Math.floor(Math.random() * w),
        y: Math.floor(Math.random() * h),
        r: getR(),
      });
    }

    const startAngle = 0;
    const endAngle = Math.PI * 2;

    const draw = () => {
      context.clearRect(0, 0, w, h);
      context.fillStyle = background;
      context.fillRect(0, 0, w, h);
      context.fillStyle = color;
      for (const flake of flakes) {
        context.beginPath();
        context.arc(flake.x, flake.y, flake.r, startAngle, endAngle);
        context.fill();
        context.closePath();
      }
    };

    const dy = [0.3, 0.4, 0.6];
    const { length: ldy } = dy;
    const tcx = [135, 150, 110];
    const { length: ltcx } = tcx;
    const cx = [0, tcx[1], 0];
    const { length: lcx } = cx;

    /** @type number */
    let frame;
    const animate = () => {
      for (let i = 0; i < lcx; i += 1) {
        cx[i] += 1 % tcx[i];
      }
      for (let i = flakes.length - 1; i >= 0; i -= 1) {
        flakes[i].y += dy[i % ldy];
        flakes[i].x += Math.sin(cx[i % lcx] / tcx[i % ltcx]) / 5;
        if (flakes[i].y > y1) {
          flakes = [...flakes.slice(0, i), ...flakes.slice(i + 1)];
          flakes.push({
            x: Math.floor(Math.random() * w),
            y: y0,
            r: getR(),
          });
        }
      }

      draw();
      frame = requestAnimationFrame(animate);
    };

    draw();
    frame = requestAnimationFrame(animate);

    const update = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      w = canvas.width;
      h = canvas.height;
      y1 = h + 1;
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas bind:this={canvas}></canvas>
