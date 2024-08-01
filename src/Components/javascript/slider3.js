const sliderLower3 = document.getElementById('slider-lower3');
const sliderUpper3 = document.getElementById('slider-upper3');
const valueLower3 = document.getElementById('value-lower3');
const valueUpper3 = document.getElementById('value-upper3');

function updateValues3() {
    let lowerValue3 = parseFloat(sliderLower3.value);
    let upperValue3 = parseFloat(sliderUpper3.value);

    if (lowerValue3 >= upperValue3) {
        lowerValue3 = upperValue3 - 0.5;
        sliderLower3.value = lowerValue3;
    }

    if (upperValue3 <= lowerValue3) {
        upperValue3 = lowerValue3 + 0.5;
        sliderUpper3.value = upperValue3;
    }

    valueLower3.textContent = lowerValue3.toFixed(1);
    valueUpper3.textContent = upperValue3.toFixed(1);

    // Update track background
    const percentLower3 = ((lowerValue3 - parseFloat(sliderLower3.min)) / (parseFloat(sliderLower3.max) - parseFloat(sliderLower3.min))) * 100;
    const percentUpper3 = ((upperValue3 - parseFloat(sliderUpper3.min)) / (parseFloat(sliderUpper3.max) - parseFloat(sliderUpper3.min))) * 100;

    const sliderTrack3 = document.querySelector('.slider-track3');
    sliderTrack3.style.background = `linear-gradient(to right, #ddd ${percentLower3}%, #565657 ${percentLower3}%, #ff73c5 ${percentUpper3}%, #ddd ${percentUpper3}%)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateValues3(); // Initial call to display initial values when the DOM content is loaded
});

window.addEventListener('pageshow', (event) => {
    updateValues3(); // Update values when the page is shown (including navigating back)
});

sliderLower3.addEventListener('input', updateValues3);
sliderUpper3.addEventListener('input', updateValues3);
