
// const sliderLower = document.getElementById('slider-lower1');
// const sliderUpper = document.getElementById('slider-upper1');
// const valueLower = document.getElementById('value-lower1');
// const valueUpper = document.getElementById('value-upper1');

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

//     const sliderTrack = document.querySelector('.slider-track1');
//     sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     updateValues(); // Initial call to display initial values when the DOM content is loaded
// });

// window.addEventListener('pageshow', (event) => {
//     updateValues(); // Update values when the page is shown (including navigating back)
// });

// sliderLower.addEventListener('input', updateValues);
// sliderUpper.addEventListener('input', updateValues);



// //second slider


// const sliderLower2 = document.getElementById('slider-lower2');
// const sliderUpper2 = document.getElementById('slider-upper2');
// const valueLower2 = document.getElementById('value-lower2');
// const valueUpper2 = document.getElementById('value-upper2');

// function updateValues2() {
//     let lowerValue2 = parseFloat(sliderLower2.value);
//     let upperValue2 = parseFloat(sliderUpper2.value);

//     if (lowerValue2 >= upperValue2) {
//         lowerValue2 = upperValue2 - 0.5;
//         sliderLower2.value = lowerValue2;
//     }

//     if (upperValue2 <= lowerValue2) {
//         upperValue2 = lowerValue2 + 0.5;
//         sliderUpper2.value = upperValue2;
//     }

//     valueLower2.textContent = lowerValue2.toFixed(1);
//     valueUpper2.textContent = upperValue2.toFixed(1);

//     // Update track background
//     const percentLower2 = ((lowerValue2 - parseFloat(sliderLower2.min)) / (parseFloat(sliderLower2.max) - parseFloat(sliderLower2.min))) * 100;
//     const percentUpper2 = ((upperValue2 - parseFloat(sliderUpper2.min)) / (parseFloat(sliderUpper2.max) - parseFloat(sliderUpper2.min))) * 100;

//     const sliderTrack2 = document.querySelector('.slider-track2');
//     sliderTrack2.style.background = `linear-gradient(to right, #ddd ${percentLower2}%, #565657 ${percentLower2}%, #ff73c5 ${percentUpper2}%, #ddd ${percentUpper2}%)`;
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     updateValues2(); // Initial call to display initial values when the DOM content is loaded
// });

// window.addEventListener('pageshow', (event) => {
//     updateValues2(); // Update values when the page is shown (including navigating back)
// });

// sliderLower2.addEventListener('input', updateValues2);
// sliderUpper2.addEventListener('input', updateValues2);



// //third slider



// const sliderLower3 = document.getElementById('slider-lower3');
// const sliderUpper3 = document.getElementById('slider-upper3');
// const valueLower3 = document.getElementById('value-lower3');
// const valueUpper3 = document.getElementById('value-upper3');

// function updateValues3() {
//     let lowerValue3 = parseFloat(sliderLower3.value);
//     let upperValue3 = parseFloat(sliderUpper3.value);

//     if (lowerValue3 >= upperValue3) {
//         lowerValue3 = upperValue3 - 0.5;
//         sliderLower3.value = lowerValue3;
//     }

//     if (upperValue3 <= lowerValue3) {
//         upperValue3 = lowerValue3 + 0.5;
//         sliderUpper3.value = upperValue3;
//     }

//     valueLower3.textContent = lowerValue3.toFixed(1);
//     valueUpper3.textContent = upperValue3.toFixed(1);

//     // Update track background
//     const percentLower3 = ((lowerValue3 - parseFloat(sliderLower3.min)) / (parseFloat(sliderLower3.max) - parseFloat(sliderLower3.min))) * 100;
//     const percentUpper3 = ((upperValue3 - parseFloat(sliderUpper3.min)) / (parseFloat(sliderUpper3.max) - parseFloat(sliderUpper3.min))) * 100;

//     const sliderTrack3 = document.querySelector('.slider-track3');
//     sliderTrack3.style.background = `linear-gradient(to right, #ddd ${percentLower3}%, #565657 ${percentLower3}%, #ff73c5 ${percentUpper3}%, #ddd ${percentUpper3}%)`;
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     updateValues3(); // Initial call to display initial values when the DOM content is loaded
// });

// window.addEventListener('pageshow', (event) => {
//     updateValues3(); // Update values when the page is shown (including navigating back)
// });

// sliderLower3.addEventListener('input', updateValues3);
// sliderUpper3.addEventListener('input', updateValues3);

//RIGHT HERE
//RIGHT HERE


// // First slider
// const sliderLower1 = document.getElementById('slider-lower1');
// const sliderUpper1 = document.getElementById('slider-upper1');
// const valueLower1 = document.getElementById('value-lower1');
// const valueUpper1 = document.getElementById('value-upper1');

// // Second slider
// const sliderLower2 = document.getElementById('slider-lower2');
// const sliderUpper2 = document.getElementById('slider-upper2');
// const valueLower2 = document.getElementById('value-lower2');
// const valueUpper2 = document.getElementById('value-upper2');

// // Third slider
// const sliderLower3 = document.getElementById('slider-lower3');
// const sliderUpper3 = document.getElementById('slider-upper3');
// const valueLower3 = document.getElementById('value-lower3');
// const valueUpper3 = document.getElementById('value-upper3');

// function updateValues1() {
//     let lowerValue1 = parseFloat(sliderLower1.value);
//     let upperValue1 = parseFloat(sliderUpper1.value);

//     if (lowerValue1 >= upperValue1) {
//         lowerValue1 = upperValue1 - 0.5;
//         sliderLower1.value = lowerValue1;
//     }

//     if (upperValue1 <= lowerValue1) {
//         upperValue1 = lowerValue1 + 0.5;
//         sliderUpper1.value = upperValue1;
//     }

//     valueLower1.textContent = lowerValue1.toFixed(1);
//     valueUpper1.textContent = upperValue1.toFixed(1);

//     // Update track background
//     const percentLower1 = ((lowerValue1 - parseFloat(sliderLower1.min)) / (parseFloat(sliderLower1.max) - parseFloat(sliderLower1.min))) * 100;
//     const percentUpper1 = ((upperValue1 - parseFloat(sliderUpper1.min)) / (parseFloat(sliderUpper1.max) - parseFloat(sliderUpper1.min))) * 100;

//     const sliderTrack1 = document.querySelector('.slider-track1');
//     sliderTrack1.style.background = `linear-gradient(to right, #ddd ${percentLower1}%, #565657 ${percentLower1}%, #ff73c5 ${percentUpper1}%, #ddd ${percentUpper1}%)`;

//     filterPants();
// }

// function updateValues2() {
//     let lowerValue2 = parseFloat(sliderLower2.value);
//     let upperValue2 = parseFloat(sliderUpper2.value);

//     if (lowerValue2 >= upperValue2) {
//         lowerValue2 = upperValue2 - 0.5;
//         sliderLower2.value = lowerValue2;
//     }

//     if (upperValue2 <= lowerValue2) {
//         upperValue2 = lowerValue2 + 0.5;
//         sliderUpper2.value = upperValue2;
//     }

//     valueLower2.textContent = lowerValue2.toFixed(1);
//     valueUpper2.textContent = upperValue2.toFixed(1);

//     // Update track background
//     const percentLower2 = ((lowerValue2 - parseFloat(sliderLower2.min)) / (parseFloat(sliderLower2.max) - parseFloat(sliderLower2.min))) * 100;
//     const percentUpper2 = ((upperValue2 - parseFloat(sliderUpper2.min)) / (parseFloat(sliderUpper2.max) - parseFloat(sliderUpper2.min))) * 100;

//     const sliderTrack2 = document.querySelector('.slider-track2');
//     sliderTrack2.style.background = `linear-gradient(to right, #ddd ${percentLower2}%, #565657 ${percentLower2}%, #ff73c5 ${percentUpper2}%, #ddd ${percentUpper2}%)`;

//     filterPants();
// }

// function updateValues3() {
//     let lowerValue3 = parseFloat(sliderLower3.value);
//     let upperValue3 = parseFloat(sliderUpper3.value);

//     if (lowerValue3 >= upperValue3) {
//         lowerValue3 = upperValue3 - 0.5;
//         sliderLower3.value = lowerValue3;
//     }

//     if (upperValue3 <= lowerValue3) {
//         upperValue3 = lowerValue3 + 0.5;
//         sliderUpper3.value = upperValue3;
//     }

//     valueLower3.textContent = lowerValue3.toFixed(1);
//     valueUpper3.textContent = upperValue3.toFixed(1);

//     // Update track background
//     const percentLower3 = ((lowerValue3 - parseFloat(sliderLower3.min)) / (parseFloat(sliderLower3.max) - parseFloat(sliderLower3.min))) * 100;
//     const percentUpper3 = ((upperValue3 - parseFloat(sliderUpper3.min)) / (parseFloat(sliderUpper3.max) - parseFloat(sliderUpper3.min))) * 100;

//     const sliderTrack3 = document.querySelector('.slider-track3');
//     sliderTrack3.style.background = `linear-gradient(to right, #ddd ${percentLower3}%, #565657 ${percentLower3}%, #ff73c5 ${percentUpper3}%, #ddd ${percentUpper3}%)`;

//     filterPants();
// }

// function filterPants() {
//     const lowerValue1 = parseFloat(sliderLower1.value);
//     const upperValue1 = parseFloat(sliderUpper1.value);
//     const lowerValue2 = parseFloat(sliderLower2.value);
//     const upperValue2 = parseFloat(sliderUpper2.value);
//     const lowerValue3 = parseFloat(sliderLower3.value);
//     const upperValue3 = parseFloat(sliderUpper3.value);
//     const pantsCards = document.querySelectorAll('.pantsCard');

//     pantsCards.forEach(card => {
//         const thighValue = parseFloat(card.getAttribute('thigh'));
//         const legOpeningValue = parseFloat(card.getAttribute('leg-opening'));
//         const riseValue = parseFloat(card.getAttribute('rise'));

//         if (
//             thighValue >= lowerValue1 && thighValue <= upperValue1 &&
//             legOpeningValue >= lowerValue2 && legOpeningValue <= upperValue2 &&
//             riseValue >= lowerValue3 && riseValue <= upperValue3
//         ) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     updateValues1(); // Initial call to display initial values when the DOM content is loaded
//     updateValues2(); // Initial call to display initial values when the DOM content is loaded
//     updateValues3(); // Initial call to display initial values when the DOM content is loaded
// });

// window.addEventListener('pageshow', (event) => {
//     updateValues1(); // Update values when the page is shown (including navigating back)
//     updateValues2(); // Update values when the page is shown (including navigating back)
//     updateValues3(); // Update values when the page is shown (including navigating back)
// });

// sliderLower1.addEventListener('input', updateValues1);
// sliderUpper1.addEventListener('input', updateValues1);
// sliderLower2.addEventListener('input', updateValues2);
// sliderUpper2.addEventListener('input', updateValues2);
// sliderLower3.addEventListener('input', updateValues3);
// sliderUpper3.addEventListener('input', updateValues3);

// updateValues1();
// updateValues2();
// updateValues3();

// // First slider
// const sliderLower1 = document.getElementById('slider-lower1');
// const sliderUpper1 = document.getElementById('slider-upper1');
// const valueLower1 = document.getElementById('value-lower1');
// const valueUpper1 = document.getElementById('value-upper1');

// // Second slider
// const sliderLower2 = document.getElementById('slider-lower2');
// const sliderUpper2 = document.getElementById('slider-upper2');
// const valueLower2 = document.getElementById('value-lower2');
// const valueUpper2 = document.getElementById('value-upper2');

// // Third slider
// const sliderLower3 = document.getElementById('slider-lower3');
// const sliderUpper3 = document.getElementById('slider-upper3');
// const valueLower3 = document.getElementById('value-lower3');
// const valueUpper3 = document.getElementById('value-upper3');

// // Flags to check if sliders have been touched
// let isTouched1 = false;
// let isTouched2 = false;
// let isTouched3 = false;

// function updateValues1() {
//     let lowerValue1 = parseFloat(sliderLower1.value);
//     let upperValue1 = parseFloat(sliderUpper1.value);

//     if (lowerValue1 >= upperValue1) {
//         lowerValue1 = upperValue1 - 0.5;
//         sliderLower1.value = lowerValue1;
//     }

//     if (upperValue1 <= lowerValue1) {
//         upperValue1 = lowerValue1 + 0.5;
//         sliderUpper1.value = upperValue1;
//     }

//     valueLower1.textContent = lowerValue1.toFixed(1);
//     valueUpper1.textContent = upperValue1.toFixed(1);

//     // Update track background
//     const percentLower1 = ((lowerValue1 - parseFloat(sliderLower1.min)) / (parseFloat(sliderLower1.max) - parseFloat(sliderLower1.min))) * 100;
//     const percentUpper1 = ((upperValue1 - parseFloat(sliderUpper1.min)) / (parseFloat(sliderUpper1.max) - parseFloat(sliderUpper1.min))) * 100;

//     const sliderTrack1 = document.querySelector('.slider-track1');
//     sliderTrack1.style.background = `linear-gradient(to right, #ddd ${percentLower1}%, #565657 ${percentLower1}%, #ff73c5 ${percentUpper1}%, #ddd ${percentUpper1}%)`;

//     if (isTouched1) filterPants();
// }

// function updateValues2() {
//     let lowerValue2 = parseFloat(sliderLower2.value);
//     let upperValue2 = parseFloat(sliderUpper2.value);

//     if (lowerValue2 >= upperValue2) {
//         lowerValue2 = upperValue2 - 0.5;
//         sliderLower2.value = lowerValue2;
//     }

//     if (upperValue2 <= lowerValue2) {
//         upperValue2 = lowerValue2 + 0.5;
//         sliderUpper2.value = upperValue2;
//     }

//     valueLower2.textContent = lowerValue2.toFixed(1);
//     valueUpper2.textContent = upperValue2.toFixed(1);

//     // Update track background
//     const percentLower2 = ((lowerValue2 - parseFloat(sliderLower2.min)) / (parseFloat(sliderLower2.max) - parseFloat(sliderLower2.min))) * 100;
//     const percentUpper2 = ((upperValue2 - parseFloat(sliderUpper2.min)) / (parseFloat(sliderUpper2.max) - parseFloat(sliderUpper2.min))) * 100;

//     const sliderTrack2 = document.querySelector('.slider-track2');
//     sliderTrack2.style.background = `linear-gradient(to right, #ddd ${percentLower2}%, #565657 ${percentLower2}%, #ff73c5 ${percentUpper2}%, #ddd ${percentUpper2}%)`;

//     if (isTouched2) filterPants();
// }

// function updateValues3() {
//     let lowerValue3 = parseFloat(sliderLower3.value);
//     let upperValue3 = parseFloat(sliderUpper3.value);

//     if (lowerValue3 >= upperValue3) {
//         lowerValue3 = upperValue3 - 0.5;
//         sliderLower3.value = lowerValue3;
//     }

//     if (upperValue3 <= lowerValue3) {
//         upperValue3 = lowerValue3 + 0.5;
//         sliderUpper3.value = upperValue3;
//     }

//     valueLower3.textContent = lowerValue3.toFixed(1);
//     valueUpper3.textContent = upperValue3.toFixed(1);

//     // Update track background
//     const percentLower3 = ((lowerValue3 - parseFloat(sliderLower3.min)) / (parseFloat(sliderLower3.max) - parseFloat(sliderLower3.min))) * 100;
//     const percentUpper3 = ((upperValue3 - parseFloat(sliderUpper3.min)) / (parseFloat(sliderUpper3.max) - parseFloat(sliderUpper3.min))) * 100;

//     const sliderTrack3 = document.querySelector('.slider-track3');
//     sliderTrack3.style.background = `linear-gradient(to right, #ddd ${percentLower3}%, #565657 ${percentLower3}%, #ff73c5 ${percentUpper3}%, #ddd ${percentUpper3}%)`;

//     if (isTouched3) filterPants();
// }

// function filterPants() {
//     const lowerValue1 = parseFloat(sliderLower1.value);
//     const upperValue1 = parseFloat(sliderUpper1.value);
//     const lowerValue2 = parseFloat(sliderLower2.value);
//     const upperValue2 = parseFloat(sliderUpper2.value);
//     const lowerValue3 = parseFloat(sliderLower3.value);
//     const upperValue3 = parseFloat(sliderUpper3.value);
//     const pantsCards = document.querySelectorAll('.pantsCard');

//     pantsCards.forEach(card => {
//         const thighValue = parseFloat(card.getAttribute('thigh'));
//         const legOpeningValue = parseFloat(card.getAttribute('leg-opening'));
//         const riseValue = parseFloat(card.getAttribute('rise'));

//         if (
//             thighValue >= lowerValue1 && thighValue <= upperValue1 &&
//             legOpeningValue >= lowerValue2 && legOpeningValue <= upperValue2 &&
//             riseValue >= lowerValue3 && riseValue <= upperValue3
//         ) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     updateValues1(); // Initial call to display initial values when the DOM content is loaded
//     updateValues2(); // Initial call to display initial values when the DOM content is loaded
//     updateValues3(); // Initial call to display initial values when the DOM content is loaded
// });

// window.addEventListener('pageshow', (event) => {
//     updateValues1(); // Update values when the page is shown (including navigating back)
//     updateValues2(); // Update values when the page is shown (including navigating back)
//     updateValues3(); // Update values when the page is shown (including navigating back)
// });

// sliderLower1.addEventListener('input', () => {
//     isTouched1 = true;
//     updateValues1();
// });
// sliderUpper1.addEventListener('input', () => {
//     isTouched1 = true;
//     updateValues1();
// });

// sliderLower2.addEventListener('input', () => {
//     isTouched2 = true;
//     updateValues2();
// });
// sliderUpper2.addEventListener('input', () => {
//     isTouched2 = true;
//     updateValues2();
// });

// sliderLower3.addEventListener('input', () => {
//     isTouched3 = true;
//     updateValues3();
// });
// sliderUpper3.addEventListener('input', () => {
//     isTouched3 = true;
//     updateValues3();
// });

// updateValues1();
// updateValues2();
// updateValues3();


//RIGHT HERE
//RIGHT HERE



// First slider
const sliderLower1 = document.getElementById('slider-lower1');
const sliderUpper1 = document.getElementById('slider-upper1');
const valueLower1 = document.getElementById('value-lower1');
const valueUpper1 = document.getElementById('value-upper1');

// Second slider
const sliderLower2 = document.getElementById('slider-lower2');
const sliderUpper2 = document.getElementById('slider-upper2');
const valueLower2 = document.getElementById('value-lower2');
const valueUpper2 = document.getElementById('value-upper2');

// Third slider
const sliderLower3 = document.getElementById('slider-lower3');
const sliderUpper3 = document.getElementById('slider-upper3');
const valueLower3 = document.getElementById('value-lower3');
const valueUpper3 = document.getElementById('value-upper3');

// Flags to check if sliders have been touched
let isTouched1 = false;
let isTouched2 = false;
let isTouched3 = false;

function updateValues1() {
    let lowerValue1 = parseFloat(sliderLower1.value);
    let upperValue1 = parseFloat(sliderUpper1.value);

    if (lowerValue1 >= upperValue1) {
        lowerValue1 = upperValue1 - 0.5;
        sliderLower1.value = lowerValue1;
    }

    if (upperValue1 <= lowerValue1) {
        upperValue1 = lowerValue1 + 0.5;
        sliderUpper1.value = upperValue1;
    }

    valueLower1.textContent = lowerValue1.toFixed(1);
    valueUpper1.textContent = upperValue1.toFixed(1);

    // Update track background
    const percentLower1 = ((lowerValue1 - parseFloat(sliderLower1.min)) / (parseFloat(sliderLower1.max) - parseFloat(sliderLower1.min))) * 100;
    const percentUpper1 = ((upperValue1 - parseFloat(sliderUpper1.min)) / (parseFloat(sliderUpper1.max) - parseFloat(sliderUpper1.min))) * 100;

    const sliderTrack1 = document.querySelector('.slider-track1');
    sliderTrack1.style.background = `linear-gradient(to right, #ddd ${percentLower1}%, #565657 ${percentLower1}%, #ff73c5 ${percentUpper1}%, #ddd ${percentUpper1}%)`;

    if (isTouched1) filterPants();
}

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

    if (isTouched2) filterPants();
}

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

    if (isTouched3) filterPants();
}

function filterPants() {
    const lowerValue1 = parseFloat(sliderLower1.value);
    const upperValue1 = parseFloat(sliderUpper1.value);
    const lowerValue2 = parseFloat(sliderLower2.value);
    const upperValue2 = parseFloat(sliderUpper2.value);
    const lowerValue3 = parseFloat(sliderLower3.value);
    const upperValue3 = parseFloat(sliderUpper3.value);
    const pantsCards = document.querySelectorAll('.pantsCard');

    pantsCards.forEach(card => {
        const thighValue = parseFloat(card.getAttribute('thigh'));
        const legOpeningValue = parseFloat(card.getAttribute('leg-opening'));
        const riseValue = parseFloat(card.getAttribute('rise'));

        if (
            thighValue >= lowerValue1 && thighValue <= upperValue1 &&
            legOpeningValue >= lowerValue2 && legOpeningValue <= upperValue2 &&
            riseValue >= lowerValue3 && riseValue <= upperValue3
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetSliders() {
    sliderLower1.value = sliderLower1.min;
    sliderUpper1.value = sliderUpper1.max;
    sliderLower2.value = sliderLower2.min;
    sliderUpper2.value = sliderUpper2.max;
    sliderLower3.value = sliderLower3.min;
    sliderUpper3.value = sliderUpper3.max;

    isTouched1 = false;
    isTouched2 = false;
    isTouched3 = false;

    updateValues1();
    updateValues2();
    updateValues3();

    // Display all pants cards
    const pantsCards = document.querySelectorAll('.pantsCard');
    pantsCards.forEach(card => {
        card.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateValues1(); // Initial call to display initial values when the DOM content is loaded
    updateValues2(); // Initial call to display initial values when the DOM content is loaded
    updateValues3(); // Initial call to display initial values when the DOM content is loaded
});

window.addEventListener('pageshow', (event) => {
    updateValues1(); // Update values when the page is shown (including navigating back)
    updateValues2(); // Update values when the page is shown (including navigating back)
    updateValues3(); // Update values when the page is shown (including navigating back)
});

sliderLower1.addEventListener('input', () => {
    isTouched1 = true;
    updateValues1();
});
sliderUpper1.addEventListener('input', () => {
    isTouched1 = true;
    updateValues1();
});

sliderLower2.addEventListener('input', () => {
    isTouched2 = true;
    updateValues2();
});
sliderUpper2.addEventListener('input', () => {
    isTouched2 = true;
    updateValues2();
});

sliderLower3.addEventListener('input', () => {
    isTouched3 = true;
    updateValues3();
});
sliderUpper3.addEventListener('input', () => {
    isTouched3 = true;
    updateValues3();
});

document.getElementById('resetFilters').addEventListener('click', resetSliders);

updateValues1();
updateValues2();
updateValues3();
