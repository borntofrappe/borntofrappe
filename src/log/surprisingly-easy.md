---
title: Surprisingly easily
entry: 11
---

And suprisingly fun.

I whipped up a rather neat animation with vector graphics and I'd like to share the process. Who knows, it might make for the basis for something more elaborate, more refined.

## Preface

It's been almost a day since the Abu Dhabi Grand Prix wrapped up a long, exhausting F1 season. Let us not squabble over the end result and instead focus on track layout.

## Out-line

I took [wikipedia](https://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix) as a reference and recreated the outline with Inkscape. I was concerned with the bezier tool — one of the reasons I actually like to draw SVG by hand is I get to avoid nitpicking points and curves — but I ended up creating quite a convincing design.

<svg style="width: 100%; height: auto;" width="530" height="264" viewBox="-10 -10 285 152" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="#000" stroke-width="6"  d="m116 52 4.9 50s2.3 8.5 9.1 7.4 26-5.6 26-5.6 5.8-2.4 9.4-17c3.5-14 21-16 27-13 6.2 3.1 20 6.1 38 3.4 18-2.7 26-2.6 26-2.6s7.3-0.44 6.7-5.7-8.3-6.7-8.3-6.7l-158-62s-2.7-1.2-2.2 2.7c0.42 4 0.5 5.5 0.5 5.5s0.39 2.6-2.4 3.2c-2.8 0.54-14 2.4-20 5.7-5.9 3.3-9.1 4.6-18 14-8.7 9.8-19 23-19 23s-10 12-14 19c-4.2 7.3-13 24-14 28-1.2 4.4-5.7 13-5.7 13s-2.1 5.1 0.69 10 15 4.5 17 3.9c2.2-0.62 9.6-3 11-8.9 1-5.9 1.2-12 0.62-16-0.62-3.5-1.9-14-1.9-14s-1.7-5.7 3.3-12c5-6.8 7.3-11 7.3-11s1.9-3.8 6.3-3.7c4.4 0.15 11-2.2 11-2.2s3.7-1.8 4.9 1.7 1.6 13 1.6 13 0.054 4.2 3.7 4.3c3.7 0.027 13 0.054 13 0.054s2.7 0.19 3.4-3.3c0.63-3.5 1.2-8.4 0.9-11-0.33-2.3-3.2-30-3.2-30s-0.98-4.9 2.5-6.4c3.5-1.5 19-11 19-11s6.6-3.4 9.6-0.41c3.1 3 2.4 13 2.4 13z" />
</svg>

## Motion

The shape is but one `<path />` element describing the line through the `d` attribute. What can you do with the syntax? Beyond displaying the line as is, which is already pleasing, you can add a circle and have it follow the along.

<svg style="width: 100%; height: auto;" width="530" height="264" viewBox="-10 -10 285 152" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="track" d="m116 52 4.9 50s2.3 8.5 9.1 7.4 26-5.6 26-5.6 5.8-2.4 9.4-17c3.5-14 21-16 27-13 6.2 3.1 20 6.1 38 3.4 18-2.7 26-2.6 26-2.6s7.3-0.44 6.7-5.7-8.3-6.7-8.3-6.7l-158-62s-2.7-1.2-2.2 2.7c0.42 4 0.5 5.5 0.5 5.5s0.39 2.6-2.4 3.2c-2.8 0.54-14 2.4-20 5.7-5.9 3.3-9.1 4.6-18 14-8.7 9.8-19 23-19 23s-10 12-14 19c-4.2 7.3-13 24-14 28-1.2 4.4-5.7 13-5.7 13s-2.1 5.1 0.69 10 15 4.5 17 3.9c2.2-0.62 9.6-3 11-8.9 1-5.9 1.2-12 0.62-16-0.62-3.5-1.9-14-1.9-14s-1.7-5.7 3.3-12c5-6.8 7.3-11 7.3-11s1.9-3.8 6.3-3.7c4.4 0.15 11-2.2 11-2.2s3.7-1.8 4.9 1.7 1.6 13 1.6 13 0.054 4.2 3.7 4.3c3.7 0.027 13 0.054 13 0.054s2.7 0.19 3.4-3.3c0.63-3.5 1.2-8.4 0.9-11-0.33-2.3-3.2-30-3.2-30s-0.98-4.9 2.5-6.4c3.5-1.5 19-11 19-11s6.6-3.4 9.6-0.41c3.1 3 2.4 13 2.4 13z" />
  </defs>
  
  <use fill="none" stroke="#000" stroke-width="6" href="#track" />
  <circle fill="#00d2be" r="2">
    <animateMotion dur="20s" fill="freeze" begin="0s;click" repeatCount="2">
      <mpath href="#track" />
    </animateMotion>
  </circle>
</svg>

_Please note:_ if the circle is not moving it might be the animation it's already over. Try clicking on the admittedly small shape to start it anew.

## It's a race

Tweak the syntax of the `d` attribute, essentially creating a different reference, and the rest is a matter of imagination.

Here's the scenario: 5 laps remaining. Different tyres? Maybe. A different trajectory? Most assuredly. Who will triumph?

<svg style="width: 100%; height: auto;" width="530" height="264" viewBox="-10 -10 285 152" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="t1" d="m116 52 4.9 50s2.3 8.5 9.1 7.4 26-5.6 26-5.6 5.8-2.4 9.4-17c3.5-14 21-16 27-13 6.2 3.1 20 6.1 38 3.4 18-2.7 26-2.6 26-2.6s7.3-0.44 6.7-5.7-8.3-6.7-8.3-6.7l-158-62s-2.7-1.2-2.2 2.7c0.42 4 0.5 5.5 0.5 5.5s0.39 2.6-2.4 3.2c-2.8 0.54-14 2.4-20 5.7-5.9 3.3-9.1 4.6-18 14-8.7 9.8-19 23-19 23s-10 12-14 19c-4.2 7.3-13 24-14 28-1.2 4.4-5.7 13-5.7 13s-2.1 5.1 0.69 10 15 4.5 17 3.9c2.2-0.62 9.6-3 11-8.9 1-5.9 1.2-12 0.62-16-0.62-3.5-1.9-14-1.9-14s-1.7-5.7 3.3-12c5-6.8 7.3-11 7.3-11s1.9-3.8 6.3-3.7c4.4 0.15 11-2.2 11-2.2s3.7-1.8 4.9 1.7 1.6 13 1.6 13 0.054 4.2 3.7 4.3c3.7 0.027 13 0.054 13 0.054s2.7 0.19 3.4-3.3c0.63-3.5 1.2-8.4 0.9-11-0.33-2.3-3.2-30-3.2-30s-0.98-4.9 2.5-6.4c3.5-1.5 19-11 19-11s6.6-3.4 9.6-0.41c3.1 3 2.4 13 2.4 13z" />
    <path id="t2" d="m116 52 4.9 50s1.5 8.6 9.1 7.4c11-1.7 26-5.6 26-5.6s5-0.8 9.4-17c4.4-16 21-16 27-13 7.9 4.1 24 6.5 38 3.4 16-3.4 26-2.6 26-2.6s8.8-0.84 6.7-5.7c-1.9-4.5-9.4-7.5-9.4-7.5l-157-61s-2.9-0.45-2.5 2.7l0.69 6.2s0.39 1.7-2.7 2.8c-2.1 0.82-16 3.2-19 5.4-4.9 3.3-8.2 4.9-18 14-9.8 9.7-19 23-19 23s-11 14-14 20c-4.1 9.7-12 24-14 28-4.1 7-5.7 13-5.7 13s-1.5 7 0.69 10c4.6 6.9 15 5.1 17 4.5 2.2-0.62 10-2.8 10-9.4-0.08-9.7-0.25-13 0.52-16 0.33-4.9-1.9-14-1.9-14s-1.2-8.4 3.4-12c5.9-6.7 7.3-11 7.3-11s0.78-3.7 6.3-3.7c4.4 0.049 11-2.2 11-2.2s4-1.3 4.9 1.7c1.7 6 1.6 13 1.6 13s-0.69 4.6 3.7 4.3c3.7 0.027 13 0.054 13 0.054s1.8-0.1 3.4-3.3c1.5-3.1 1.5-7.6 0.9-11-0.93-4.7-3.2-30-3.2-30s-0.56-5 2.5-6.4c5.4-2.4 19-11 19-11s7.1-3.9 9.6-0.41c2.7 4.4 2.3 13 2.3 13z" />
  </defs>

  <use href="#t1" fill="none" stroke="#000" stroke-width="7" />

  <circle  r="2" fill="#dc0000">
	  <animateMotion dur="20s" begin="-2s;click" fill="freeze" repeatCount="5">
      <mpath href="#t2" />
    </animateMotion>
  </circle>

  <circle  r="2" fill="#00d2be">
	  <animateMotion dur="19s" begin="0s;click" fill="freeze" repeatCount="5">
      <mpath href="#t1" />
    </animateMotion>
  </circle>
</svg>
