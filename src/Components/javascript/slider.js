// const sliderLower = document.getElementById('slider-lower-TH');
// const sliderUpper = document.getElementById('slider-upper-TH');
// const valueLower = document.getElementById('value-lower-TH');
// const valueUpper = document.getElementById('value-upper-TH');

// function updateValues() {
//     let lowerValue = parseFloat(sliderLower.value);
//     let upperValue = parseFloat(sliderUpper.value);

//     if (lowerValue >= upperValue) {
//         lowerValue = upperValue - 0.5;
//         sliderLower.value = lowerValue;
//     }

//     if (upperValue <= lowerValue) {
//         upperValue = lowerValue + 0.5;
//         sliderUpper.value = upperValue;
//     }

//     valueLower.textContent = lowerValue.toFixed(1);
//     valueUpper.textContent = upperValue.toFixed(1);
// }

// sliderLower.addEventListener('input', updateValues);
// sliderUpper.addEventListener('input', updateValues);

// updateValues();


// const sliderLower = document.getElementById('slider-lower-TH');
// const sliderUpper = document.getElementById('slider-upper-TH');
// const valueLower = document.getElementById('value-lower-TH');
// const valueUpper = document.getElementById('value-upper-TH');

// function updateValues() {
//     let lowerValue = parseFloat(sliderLower.value);
//     let upperValue = parseFloat(sliderUpper.value);

//     if (lowerValue >= upperValue) {
//         lowerValue = upperValue - 0.5;
//         sliderLower.value = lowerValue;
//     }

//     if (upperValue <= lowerValue) {
//         upperValue = lowerValue + 0.5;
//         sliderUpper.value = upperValue;
//     }

//     valueLower.textContent = lowerValue.toFixed(1);
//     valueUpper.textContent = upperValue.toFixed(1);

//     // Update track background
//     const percentLower = ((lowerValue - parseFloat(sliderLower.min)) / (parseFloat(sliderLower.max) - parseFloat(sliderLower.min))) * 100;
//     const percentUpper = ((upperValue - parseFloat(sliderUpper.min)) / (parseFloat(sliderUpper.max) - parseFloat(sliderUpper.min))) * 100;

//     const sliderTrack = document.querySelector('.slider-track');
//     sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
// }

// sliderLower.addEventListener('input', updateValues);
// sliderUpper.addEventListener('input', updateValues);

// updateValues(); // Initial call to display initial values
// const sliderLower = document.getElementById('slider-lower');
// const sliderUpper = document.getElementById('slider-upper');
// const valueLower = document.getElementById('value-lower');
// const valueUpper = document.getElementById('value-upper');

// function updateValues() {
//     let lowerValue = parseFloat(sliderLower.value);
//     let upperValue = parseFloat(sliderUpper.value);

//     if (lowerValue >= upperValue) {
//         lowerValue = upperValue - 0.5;
//         sliderLower.value = lowerValue;
//     }

//     if (upperValue <= lowerValue) {
//         upperValue = lowerValue + 0.5;
//         sliderUpper.value = upperValue;
//     }

//     valueLower.textContent = lowerValue.toFixed(1);
//     valueUpper.textContent = upperValue.toFixed(1);

//     // Update track background
//     const percentLower = ((lowerValue - parseFloat(sliderLower.min)) / (parseFloat(sliderLower.max) - parseFloat(sliderLower.min))) * 100;
//     const percentUpper = ((upperValue - parseFloat(sliderUpper.min)) / (parseFloat(sliderUpper.max) - parseFloat(sliderUpper.min))) * 100;

//     const sliderTrack = document.querySelector('.slider-track');
//     sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
// }

// sliderLower.addEventListener('input', updateValues);
// sliderUpper.addEventListener('input', updateValues);

// updateValues(); // Initial call to display initial values


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

    // Update track background
    const percentLower = ((lowerValue - parseFloat(sliderLower.min)) / (parseFloat(sliderLower.max) - parseFloat(sliderLower.min))) * 100;
    const percentUpper = ((upperValue - parseFloat(sliderUpper.min)) / (parseFloat(sliderUpper.max) - parseFloat(sliderUpper.min))) * 100;

    const sliderTrack = document.querySelector('.slider-track');
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

//This is where next starts
const sliderLowerLO = document.getElementById('slider-lower-LO');
const sliderUpperLO = document.getElementById('slider-upper-LO');
const valueLowerLO = document.getElementById('value-lower-LO');
const valueUpperLO = document.getElementById('value-upper-LO');

function updateValuesLO() {
    let lowerValueLO = parseFloat(sliderLowerLO.value);
    let upperValueLO = parseFloat(sliderUpperLO.value);

    if (lowerValueLO >= upperValueLO) {
        lowerValueLO = upperValueLO - 0.5;
        sliderLowerLO.value = lowerValueLO;
    }

    if (upperValueLO <= lowerValueLO) {
        upperValueLO = lowerValueLO + 0.5;
        sliderUpperLO.value = upperValueLO;
    }

    valueLowerLO.textContent = lowerValueLO.toFixed(1);
    valueUpperLO.textContent = upperValueLO.toFixed(1);

    // Update track background
    const percentLowerLO = ((lowerValueLO - parseFloat(sliderLowerLO.min)) / (parseFloat(sliderLowerLO.max) - parseFloat(sliderLowerLO.min))) * 100;
    const percentUpperLO = ((upperValueLO - parseFloat(sliderUpperLO.min)) / (parseFloat(sliderUpperLO.max) - parseFloat(sliderUpperLO.min))) * 100;

    const sliderTrackLO = document.querySelector('.slider-track-LO');
    sliderTrackLO.style.background = `linear-gradient(to right, #ddd ${percentLowerLO}%, #565657 ${percentLowerLO}%, #ff73c5 ${percentUpperLO}%, #ddd ${percentUpperLO}%)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateValuesLO(); // Initial call to display initial values when the DOM content is loaded
});

window.addEventListener('pageshow', (event) => {
    updateValuesLO(); // Update values when the page is shown (including navigating back)
});

sliderLowerLO.addEventListener('input', updateValuesLO);
sliderUpperLO.addEventListener('input', updateValuesLO);
