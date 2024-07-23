// cuadrado
const valueResult = document.getElementById('result');
const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare(){
    let inpuntSide = document.getElementById('inputSide');
    let value = Number(inpuntSide.value);

    const result = `El perimetro de Cuadrado es: ${perimSquare(value)} cm`;
    document.getElementById('result').innerText = result;
}
function calculateAreaSquare(){
    let inpuntSide = document.getElementById('inputSide');
    let value = Number(inpuntSide.value);

    const result = `El area de Cuadrado es: ${areaSquare(value)} cm^2`;
    document.getElementById('result').innerText = result;
}

