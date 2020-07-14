<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let size = 100;
  export let color;

  let canvas;

  $: if (canvas) {
    // without a timeout the paint operation would be overwritten by the change in size
    const timeout = setTimeout(() => {
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, size, size);
      context.save();
      context.translate(size / 2, size / 2);
      context.scale(size / 100, size / 100);
      context.rotate(Math.PI / 4);
      context.lineWidth = 8;
      context.strokeStyle = color;
      context.lineCap = 'round';
      context.lineJoin = 'round';

      const rocket = new Path2D(
        'M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52'
      );
      context.stroke(rocket);

      context.lineWidth = 7;
      const exhaustOne = new Path2D('M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21');
      context.stroke(exhaustOne);
      context.scale(-1, 1);
      const exhaustTwo = new Path2D('M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21');
      context.stroke(exhaustTwo);
      context.scale(-1, 1);
      const exhaustThree = new Path2D(
        'M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5'
      );
      context.stroke(exhaustThree);

      const rocketWindow = new Path2D(
        'M 0 -11 a 9 9 0 0 1 0 18 9 9 0 0 1 0 -18'
      );
      context.stroke(rocketWindow);

      context.restore();

      dispatch('draw', canvas.toDataURL('image/png'));

      clearTimeout(timeout);
    });
  }
</script>

<style>
  canvas {
    margin: 2rem;
  }
</style>

<canvas bind:this="{canvas}" width="{size}" height="{size}"></canvas>
