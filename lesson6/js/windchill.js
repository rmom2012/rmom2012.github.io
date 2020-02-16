temp = parseFloat(document.getElementById('temp').textContent);
wind = parseFloat(document.getElementById('wind').textContent);

if ((temp <= 50) && (wind > 4.8)) {
    ans = 35.74 + (0.6215*temp) - (35.75*(wind**0.16)) + (0.4275*temp*(wind**0.16));
}
else {
    ans = "N/A";
}

document.getElementById('windChill').innerHTML = ans.toFixed(0);