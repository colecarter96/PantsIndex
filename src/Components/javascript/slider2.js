const sliderLower2 = document.getElementById('slider-lower2');
const sliderUpper2 = document.getElementById('slider-upper2');
const valueLower2 = document.getElementById('value-lower2');
const valueUpper2 = document.getElementById('value-upper2');

function updateValues2() {
    let lowerValue2 = parseFloat(sliderLower2.value);
    let upperValue2 = parseFloat(sliderUpper2.value);

    if (lowerValue2 >= upperValue2) {
        lowerValue2 = upperValue2 - 0.5;
        sliderLower2.value = lowerValue2;
    }

    if (upperValue2 <= lowerValue2) {
        upperValue2 = lowerValue2 + 0.5;
        sliderUpper2.value = upperValue2;
    }

    valueLower2.textContent = lowerValue2.toFixed(1);
    valueUpper2.textContent = upperValue2.toFixed(1);

    // Update track background
    const percentLower2 = ((lowerValue2 - parseFloat(sliderLower2.min)) / (parseFloat(sliderLower2.max) - parseFloat(sliderLower2.min))) * 100;
    const percentUpper2 = ((upperValue2 - parseFloat(sliderUpper2.min)) / (parseFloat(sliderUpper2.max) - parseFloat(sliderUpper2.min))) * 100;

    const sliderTrack2 = document.querySelector('.slider-track2');
    sliderTrack2.style.background = `linear-gradient(to right, #ddd ${percentLower2}%, #565657 ${percentLower2}%, #ff73c5 ${percentUpper2}%, #ddd ${percentUpper2}%)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateValues2(); // Initial call to display initial values when the DOM content is loaded
});

window.addEventListener('pageshow', (event) => {
    updateValues2(); // Update values when the page is shown (including navigating back)
});

sliderLower2.addEventListener('input', updateValues2);
sliderUpper2.addEventListener('input', updateValues2);