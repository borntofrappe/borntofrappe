<script>
  import { onMount } from "svelte";

  /** @type {HTMLDivElement} */
  let widget;

  onMount(() => {
    const lineWidth = 10;
    const width = 350;
    const height = 100;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const button = document.createElement("button");
    button.textContent = "Press to play sound";

    widget.appendChild(canvas);
    widget.appendChild(button);

    const context = canvas.getContext("2d");
    if (context === null) return;
    context.lineWidth = lineWidth;
    context.lineCap = "round";

    const audioContext = new AudioContext();

    /** @type Array<[number, number]> */
    let lines = [];
    /** @type {number | null} */
    let frame = null;
    let pressed = false;

    const x1 = width + lineWidth;
    let start = new Date().getTime();
    const delay = 200;
    const keys = [" ", "Enter"];

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.translate(0, height / 2);

      for (const line of lines) {
        context.beginPath();
        context.moveTo(line[0], 0);
        context.lineTo(line[1], 0);
        context.stroke();
        line[0] -= 1;
        line[1] -= 1;
      }

      context.setTransform(1, 0, 0, 1, 0, 0);

      if (lines[lines.length - 1][1] <= -lineWidth && frame) {
        cancelAnimationFrame(frame);
        frame = null;
      } else {
        if (pressed && new Date().getTime() - start > delay) {
          lines[lines.length - 1][1] = x1;
        }
        for (let i = 0; i < lines.length - 1; i++) {
          if (lines[i][1] <= -lineWidth) {
            lines = [...lines.slice(0, i), ...lines.slice(i + 1)];
          }
        }
        frame = requestAnimationFrame(draw);
      }
    };

    const handleStart = () => {
      pressed = true;

      button.style.color = "oklch(from currentColor calc(l * 0.85) c h)";
      context.strokeStyle = getComputedStyle(button).color;

      const oscillator = audioContext.createOscillator();
      oscillator.type = "triangle";
      const gain = audioContext.createGain();
      gain.gain.value = 0.05;
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      audioContext.resume();

      lines.push([x1, x1]);
      start = start = new Date().getTime();

      if (frame === null) frame = requestAnimationFrame(draw);
    };

    const handleEnd = () => {
      pressed = false;

      button.style.color = "inherit";
      audioContext.suspend();
    };

    /**
     * @param event {KeyboardEvent}
     */
    const handleKeydown = (event) => {
      if (!keys.includes(event.key)) return;

      handleStart();
    };
    /**
     * @param  event {KeyboardEvent}
     */
    const handleKeyup = (event) => {
      if (!keys.includes(event.key)) return;

      handleEnd();
    };

    button.addEventListener("pointerdown", handleStart);
    button.addEventListener("pointerup", handleEnd);
    button.addEventListener("pointerleave", handleEnd);
    button.addEventListener("keydown", handleKeydown);
    button.addEventListener("keyup", handleKeyup);
    button.addEventListener("blur", handleEnd);

    return () => {
      button.removeEventListener("pointerdown", handleStart);
      button.removeEventListener("pointerup", handleEnd);
      button.removeEventListener("pointerleave", handleEnd);
      button.removeEventListener("keydown", handleKeydown);
      button.removeEventListener("keyup", handleKeyup);
      button.removeEventListener("blur", handleEnd);
    };
  });
</script>

<div bind:this={widget}></div>

<style>
  div {
    --_color: var(--color-text, hsl(0 0% 30%));
    --_background: var(--color-background, hsl(0 0% 98%));
    --_border: var(--color-border, hsl(0 0% 85%));
    color: var(--_color);
    display: flex;
    justify-content: center;
    align-items: center;

    :global(canvas) {
      background: var(--_background);
      border: var(--border-size, 1px) solid var(--_border);
    }

    :global(button) {
      border: none;
      --button-size: 3rem;
      width: var(--button-size, 3rem);
      height: var(--button-size, 3rem);
      border-radius: 50%;
      margin-inline-start: calc(var(--button-size, 3rem) / 2 * -1);
      color: inherit;
      background: currentColor;
      border: none;
      font-size: 0.2rem;

      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 4px;
      }
    }
  }
</style>
