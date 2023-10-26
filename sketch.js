let noiseTimeA = 0;
let noiseTamA = 10;
let noiseTimeB = 1000;
let noiseTamB = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255);
  // Primer Círculo
  let posX1 = map(noise(noiseTimeA), 0, 1, 0, windowWidth);
  // Let Variable = mapeo(ruido(ruido-lapsoA), 0, 1, representa el rango y se define el nuevo 0, wWidth{ancho}); )
  let posY1 = map(noise(noiseTimeA + 100), 0, 1, 0, windowHeight);
  let tam1 = map(noise(noiseTamA), 0, 1, 50, 5);
  let color1 = color(random(100, 255), random(0, 150), random(50, 200), 50);
  noiseTimeA += 0.005;
  noiseTamA += 0.05;

  // Segundo círculo Negativo
  let posX2 = windowWidth - posX1;
  let posY2 = windowHeight - posY1;
  let tam2 = map(noise(noiseTamB), 0, 1, 50, 5);
  let color2 = color(random(100, 255), random(0, 150), random(50, 200), 50);
  noiseTimeB += 0.005;
  noiseTamB += 0.05;

  noStroke();
  // definición de no bordes del circulo
  // Dibujado del primer circulo
  fill(color1);
  circle(posX1, posY1, tam1);

  // Dibujado del segundo circulo
  fill(color2);
  circle(posX2, posY2, tam2);
}
// CDN Conent Delivery Network Red de entrega de contenidos
