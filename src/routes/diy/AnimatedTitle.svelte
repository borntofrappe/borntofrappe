<script>
  /** @type {{ text?: string, fontSize?: number, fill?: string, stroke?: string, offset?: number, durationPerLetter?: number, begin?: string, end?: string, repeatCount?: string, delay?: number }}*/
  const {
    text = "Hello world",
    fontSize = 7,
    fill = "hsl(206 33% 96%)",
    stroke = "hsl(209 61% 16%)",
    offset = 1,
    durationPerLetter = 0.07,
    begin = "0s",
    end = "",
    repeatCount = "none",
    delay = 2,
  } = $props();

  let strokeWidth = $derived(fontSize * 0.2);
  let letterSpacing = $derived(fontSize * 0.1);
  let dy = $derived(fontSize * 0.3);

  const { length } = text;

  const dur = `${durationPerLetter * length + delay}s`;

  const base = Array(length).fill(0);
  const extra = Array(1 + Math.floor(delay * (1 / durationPerLetter)))
    .fill("")
    .map((_) => Array(length).fill(0));

  const values = [
    base,
    ...Array(length)
      .fill("")
      .map((_, i) =>
        Array(length)
          .fill("")
          .map((_, j) => {
            if (j === i) return offset * -1;
            if (j === i + 1) return offset;

            return 0;
          })
      ),
    ...extra,
  ].join(";");
</script>

<g
  font-family="sans-serif"
  font-weight="700"
  font-size={fontSize}
  {fill}
  {stroke}
  stroke-width={strokeWidth}
  letter-spacing={letterSpacing}
  paint-order="stroke"
  stroke-linejoin="round"
  stroke-linecap="round"
  transform="translate(0 {dy})"
>
  <text x="50%" y="50%" text-anchor="middle">
    <animate attributeName="dy" {dur} {values} {begin} {end} {repeatCount} />
    {text}
  </text>
</g>
