
// Get the container element
const container = document.getElementById('container');

// Define the ASCII characters for the cube
const cubeChars = [
  '   +------+',
  '  /      /|',
  ' /      / |',
  '+------+  +',
  '|      | /',
  '|      |/',
  '+------+'
];

// Function to rotate the cube
function rotateCube() {

  cubeChars.unshift(cubeChars.pop());

  container.innerText = cubeChars.join('\n');
}

// Call the rotateCube function every 100 milliseconds
setInterval(rotateCube, 100);
