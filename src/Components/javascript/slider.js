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

sliderLower.addEventListener('input', updateValues);
sliderUpper.addEventListener('input', updateValues);

updateValues(); // Initial call to display initial values
