
// Function to rotate the cube
// Ensure container variable is not redeclared
const container = document.getElementById('container') || document.createElement('div');

function rotateCube() {
    const cubeChars = [
        '   +------+',
        '  /      /|',
        ' /      / |',
        '+------+  +',
        '|      | /',
        '|      |/',
        '+------+'
    ];

    cubeChars.unshift(cubeChars.pop());

    container.innerText = cubeChars.join('\n');
}

setInterval(rotateCube, 100);


