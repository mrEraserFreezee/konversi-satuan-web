// Konversi Unit
const conversionRates = {
    // Konversi Panjang
    ft: { in: 12, yd: 1 / 3, mi: 1 / 5280, cm: 30.48, m: 0.3048 },
    in: { ft: 1 / 12, yd: 1 / 36, mi: 1 / 63360, cm: 2.54, m: 0.0254 },
    yd: { ft: 3, in: 36, mi: 1 / 1760, cm: 91.44, m: 0.9144 },
    mi: { ft: 5280, in: 63360, yd: 1760, cm: 160934, m: 1609.34 },
    cm: { ft: 1 / 30.48, in: 1 / 2.54, yd: 1 / 91.44, mi: 1 / 160934, m: 0.01 },
    m: { ft: 3.28084, in: 39.3701, yd: 1.09361, mi: 1 / 1609.34, cm: 100 },

    // Konversi Berat
    kg: { g: 1000, oz: 35.274, lb: 2.20462, t: 0.001, kg: 1 },
    g: { kg: 0.001, oz: 0.035274, lb: 0.00220462, t: 1e-6, g: 1 },
    oz: { kg: 0.0283495, g: 28.3495, lb: 0.0625, t: 2.835e-5, oz: 1 },
    lb: { kg: 0.453592, g: 453.592, oz: 16, t: 4.53592e-5, lb: 1 },
    t: { kg: 1000, g: 1e6, oz: 35274, lb: 2204.62, t: 1 },

    // Konversi Suhu
    Celsius: { Fahrenheit: [9 / 5, 32], Kelvin: [1, 273.15], Celsius: 1 },
    Fahrenheit: { Celsius: [5 / 9, -32], Kelvin: [5 / 9, 459.67], Fahrenheit: 1 },
    Kelvin: { Celsius: [1, -273.15], Fahrenheit: [9 / 5, -459.67], Kelvin: 1 }
};

// Fungsi Konversi Panjang
function convertLength(inputValue, fromUnit, toUnit) {
    if (!conversionRates[fromUnit] || !conversionRates[fromUnit][toUnit]) {
        throw new Error("Konversi tidak ditemukan");
    }
    const conversionRate = conversionRates[fromUnit][toUnit];
    return inputValue * conversionRate;
}

// Fungsi Konversi Berat
function convertWeight(inputValue, fromUnit, toUnit) {
    if (!conversionRates[fromUnit] || !conversionRates[fromUnit][toUnit]) {
        throw new Error("Konversi tidak ditemukan");
    }
    const conversionRate = conversionRates[fromUnit][toUnit];
    return inputValue * conversionRate;
}

// Fungsi Konversi Suhu
function convertTemperature(inputValue, fromUnit, toUnit) {
    if (!conversionRates[fromUnit] || !conversionRates[fromUnit][toUnit]) {
        throw new Error("Konversi tidak ditemukan");
    }
    const [multiplier, offset] = conversionRates[fromUnit][toUnit];
    return (inputValue + offset) * multiplier;
}

// Fungsi untuk mengambil nilai input, mengonversi, dan mengalihkan ke halaman hasil
function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    // Menentukan jenis konversi berdasarkan unit yang dipilih
    if (['ft', 'in', 'yd', 'mi', 'cm', 'm'].includes(fromUnit) && ['ft', 'in', 'yd', 'mi', 'cm', 'm'].includes(toUnit)) {
        result = convertLength(inputValue, fromUnit, toUnit);
    } else if (['kg', 'g', 'oz', 'lb', 't'].includes(fromUnit) && ['kg', 'g', 'oz', 'lb', 't'].includes(toUnit)) {
        result = convertWeight(inputValue, fromUnit, toUnit);
    } else if (['Celsius', 'Fahrenheit', 'Kelvin'].includes(fromUnit) && ['Celsius', 'Fahrenheit', 'Kelvin'].includes(toUnit)) {
        result = convertTemperature(inputValue, fromUnit, toUnit);
    } else {
        throw new Error("Jenis konversi tidak valid");
    }

    // Menyimpan hasil konversi ke localStorage
    localStorage.setItem("conversionResult", result);

    // Mengalihkan ke halaman hasil
    window.location.href = "result.html";
}

// Fungsi untuk mereset form dan kembali ke halaman utama
function reset() {
    window.location.href = "main.html"; // Halaman utama
}

// Ambil hasil konversi dari localStorage dan tampilkan di halaman hasil
window.onload = function () {
    const result = localStorage.getItem("conversionResult");

    if (result !== null) {
        document.getElementById("result").innerText = `Hasil Konversi: ${result}`;
    } else {
        document.getElementById("result").innerText = "Tidak ada hasil konversi.";
    }
}
