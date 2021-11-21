---
title: Writing SVG
entry: 11
---

I find writing SVG to be exceedingly calming and beneficial. At the end of the weekend, however, the effort is also quite exhausting. Consider this icon, one of two I created for a small data visualization.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="200" height="200">
  <defs>
    <linearGradient id="gs" x1="-50" x2="50" y1="-50" y2="50">
      <stop stop-color="hsl(0, 0%, 0%)" offset="0" />
      <stop stop-color="hsl(0, 0%, 100%)" offset="1" />
    </linearGradient>
    <mask id="ms">
      <rect x="-50" y="-50" width="100" height="100" fill="url(#gs)" />
    </mask>
  </defs>

  <rect x="-30" y="-30" width="60" height="60" rx="5" fill="hsl(53, 97%, 53%)" />
  <rect x="-30" y="-30" width="60" height="60" rx="5" fill="hsl(45, 98%, 51%)" mask="url(#ms)" />
  <rect x="-30" y="-30" width="60" height="60" rx="5" transform="rotate(45)" fill="hsl(53, 97%, 53%)" />
  <rect x="-30" y="-30" width="60" height="60" rx="5" transform="rotate(45)" fill="hsl(45, 98%, 51%)" mask="url(#ms)" />
</svg>

To add more variety there is a bit more complexity than immediately apparent. Each rectangle has another shape right above it, with a darker color. This dark variant is however hidden with a mask, itself based on a gradient to that the shape is incrementally shown as the eye moves from the top left to the bottom right. I don't know if the description makes justice to the concept, but in my mind it's quite clear. Reading the SVG syntax makes the idea clear as well, but again, it might be because I'm the one implementing the solution.

Back to the topic at hand, I spent a considerable amount of time crafting the icon. Worth the effort? I doubt it. I was listening to a French podcast in the meantime, but I might be trying to pardon my own self. At the end of the day the extra effort means I don't have the mental energy to actually work on the visualization. On the other end, it might make for a more restful night.
