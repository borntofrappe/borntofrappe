const width = 100;
const height = 100;

const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

const article = document.createElement('article');
const heading = document.createElement('h2');
heading.textContent = 'Canvas';

article.appendChild(heading);
article.appendChild(canvas);
document.body.appendChild(article);

const context = canvas.getContext('2d');

/* recreate SVG syntax
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="100" height="100">
  <g transform="scale(1.85)" fill="none" stroke="hsl(220, 100%, 8%)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -10 -13 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
    <path d="M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
  </g>
</svg>
*/
context.translate(width / 2, height / 2);
context.scale(1.85 * (width / 100), 1.85 * (height / 100));

context.lineWidth = 8;
context.strokeStyle = 'hsl(220, 100%, 8%)';
context.lineCap = 'round';
context.lineJoin = 'round';

const accent = new Path2D('M -10 -13 q 0 -8 -8 -10');
context.setLineDash([14.01, 18.5]);
context.lineDashOffset = -4.5;
context.stroke(accent);

const b = new Path2D(
  'M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36'
);
context.setLineDash([114.2, 146.28]);
context.lineDashOffset = -9.145;
context.stroke(b);

// data for the png image
const data = canvas.toDataURL('image/png');

// add a link to download the data
const a = document.createElement('a');
a.setAttribute('download', `icon-${width}-${height}`);
a.href = data;
a.textContent = `Download icon-${width}-${height}`;

document.body.appendChild(a);
