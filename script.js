document.getElementById('matrix-form').addEventListener('submit', function (e) {
    e.preventDefault();
    createMatrixInputs();
});

function createMatrixInputs() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const matrixInput = document.getElementById('matrix-input');
    matrixInput.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        for (let j = 0; j < columns; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-cell';
            input.dataset.row = i;
            input.dataset.column = j;
            rowDiv.appendChild(input);
        }
        matrixInput.appendChild(rowDiv);
    }

    document.getElementById('submit-matrix').style.display = 'block';
}

document.getElementById('submit-matrix').addEventListener('click', function () {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            const cellValue = document.querySelector(`input[data-row="${i}"][data-column="${j}"]`).value;
            row.push(cellValue);
        }
        matrix.push(row);
    }

    displayMatrix(matrix);
});

function displayMatrix(matrix) {
    const result = document.getElementById('result');
    result.innerHTML = '<h2>Matrix:</h2>';
    matrix.forEach(row => {
        result.innerHTML += `<div>${row.join(' ')}</div>`;
    });
}
