document.getElementById('calcG').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1G').value);
    let num2 = parseFloat(document.getElementById('num2G').value);
    let num3 = parseFloat(document.getElementById('num3G').value);
    let result = (7 * num1 + 2 * num2 + 1 * num3)/10;
    
    document.getElementById('result').textContent = result;
});

document.getElementById('calcExame').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1E').value);
    let num2 = parseFloat(document.getElementById('num2E').value);
    let result = (num1 + num2)/2;
    
    document.getElementById('result1').textContent = result;
});

document.getElementById('calcBL').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1BL').value);
    let num2 = parseFloat(document.getElementById('num2BL').value);
    let result = (9 * num1 + 1 * num2)/10;
    
    document.getElementById('result2').textContent = result;
});

document.getElementById('calcF').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1F').value);
    let num2 = parseFloat(document.getElementById('num2F').value);
    let result = (9 * num1 + 1 * num2)/10;
    
    document.getElementById('result2').textContent = result;
});