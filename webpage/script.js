const conversionRates = {
    ft: { in: 12, yd: 1 / 3, mi: 1 / 5280, cm: 30.48, m: 0.3048 },
    in: { ft: 1 / 12, yd: 1 / 36, mi: 1 / 63360, cm: 2.54, m: 0.0254 },
    yd: { ft: 3, in: 36, mi: 1 / 1760, cm: 91.44, m: 0.9144 },
    mi: { ft: 5280, in: 63360, yd: 1760, cm: 160934, m: 1609.34 },
    cm: { ft: 1 / 30.48, in: 1 / 2.54, yd: 1 / 91.44, mi: 1 / 160934, m: 0.01 },
    m: { ft: 3.28084, in: 39.3701, yd: 1.09361, mi: 1 / 1609.34, cm: 100 }
};

// Ambil nilai dari input
let inputValue = document.getElementById("inputValue").value;
let fromUnit = document.getElementById("fromUnit").value;
let toUnit = document.getElementById("toUnit").value;

console.log("Input Value:", inputValue);
console.log("From Unit:", fromUnit);
console.log("To Unit:", toUnit);

function convert() {
    window.location.href = "result.html"; // Ganti dengan halaman yang dituju
}

function reset(){
    window.location.href = "main.html";
}