// change width and height to change the dimensions of the raster image
const color = 'hsl(220, 100%, 8%)';
const size = 100;

// CANVAS
const canvas = document.createElement('canvas');
canvas.width = size;
canvas.height = size;

const article = document.createElement('article');
const heading = document.createElement('h2');
const paragraph = document.createElement('p');
heading.textContent = 'icon <canvas>';
paragraph.innerHTML = `width: ${size}<br/>height: ${size}<br/>color: ${color}`;

article.appendChild(heading);
article.appendChild(paragraph);
article.appendChild(canvas);
document.body.appendChild(article);

// recreate icon.svg
const context = canvas.getContext('2d');

context.translate(size / 2, size / 2);
context.rotate(Math.PI / 4);

context.strokeStyle = color;
context.lineWidth = 8;
context.lineCap = 'round';
context.lineJoin = 'round';

const rocket = new Path2D("M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52");
context.stroke(rocket);

context.lineWidth = 7;
const exhaustOne = new Path2D("M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21");
context.stroke(exhaustOne);
context.scale(-1, 1);
const exhaustTwo = new Path2D("M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21");
context.stroke(exhaustTwo);
context.scale(-1, 1);
const exhaustThree = new Path2D("M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5");
context.stroke(exhaustThree);

const rocketWindow = new Path2D("M 0 -11 a 9 9 0 0 1 0 18 9 9 0 0 1 0 -18");
context.stroke(rocketWindow);

// PNG IMAGE
const dataImage = canvas.toDataURL('image/png');

const a = document.createElement('a');
a.setAttribute('download', 'icon.png');
a.href = dataImage;
a.textContent = `Download icon.png`;

document.body.appendChild(a);
