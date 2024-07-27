
const sliderLower = document.getElementById('slider-lower1');
const sliderUpper = document.getElementById('slider-upper1');
const valueLower = document.getElementById('value-lower1');
const valueUpper = document.getElementById('value-upper1');

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

    // Update track background
    const percentLower = ((lowerValue - parseFloat(sliderLower.min)) / (parseFloat(sliderLower.max) - parseFloat(sliderLower.min))) * 100;
    const percentUpper = ((upperValue - parseFloat(sliderUpper.min)) / (parseFloat(sliderUpper.max) - parseFloat(sliderUpper.min))) * 100;

    const sliderTrack = document.querySelector('.slider-track1');
    sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateValues(); // Initial call to display initial values when the DOM content is loaded
});

window.addEventListener('pageshow', (event) => {
    updateValues(); // Update values when the page is shown (including navigating back)
});

sliderLower.addEventListener('input', updateValues);
sliderUpper.addEventListener('input', updateValues);


