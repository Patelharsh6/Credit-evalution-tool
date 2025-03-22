// script.js
function evaluateCredit() {
    const location = document.getElementById('location').value;
    const soilHealth = document.getElementById('soilHealth').value;
    const cropYield = document.getElementById('cropYield').value;
    const weatherForecast = document.getElementById('weatherForecast').value;
    
    if (!location || !cropYield || !weatherForecast) {
        alert("Please fill all fields");
        return;
    }
    
    const score = (Math.random() * 100).toFixed(2);
    document.getElementById('creditScore').innerText = `Credit Score: ${score}`;
}