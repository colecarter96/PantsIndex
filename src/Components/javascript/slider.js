const sliderLower = document.getElementById('slider-lower');
const sliderUpper = document.getElementById('slider-upper');
const valueLower = document.getElementById('value-lower');
const valueUpper = document.getElementById('value-upper');

function updateValues() {
    let lowerValue = parseFloat(sliderLower.value);
    let upperValue = parseFloat(sliderUpper.value);

    if (lowerValue >= upperValue) {
        lowerValue = upperValue - 0.5;
        sliderLower.value = lowerValue;
    }

    if (upperValue <= lowerValue) {
        upperValue = lowerValue + 0.5;
        sliderUpper.value = upperValue;
    }

    valueLower.textContent = lowerValue.toFixed(1);
    valueUpper.textContent = upperValue.toFixed(1);
}

sliderLower.addEventListener('input', updateValues);
sliderUpper.addEventListener('input', updateValues);

updateValues();

