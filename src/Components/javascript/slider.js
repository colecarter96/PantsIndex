
// //RIGHT HERE
// //RIGHT HERE




// const sliderLower1 = document.getElementById('slider-lower1');
// const sliderUpper1 = document.getElementById('slider-upper1');
// const valueLower1 = document.getElementById('value-lower1');
// const valueUpper1 = document.getElementById('value-upper1');

// const sliderLower2 = document.getElementById('slider-lower2');
// const sliderUpper2 = document.getElementById('slider-upper2');
// const valueLower2 = document.getElementById('value-lower2');
// const valueUpper2 = document.getElementById('value-upper2');

// const sliderLower3 = document.getElementById('slider-lower3');
// const sliderUpper3 = document.getElementById('slider-upper3');
// const valueLower3 = document.getElementById('value-lower3');
// const valueUpper3 = document.getElementById('value-upper3');

// function updateSlider(sliderLower, sliderUpper, valueLower, valueUpper) {
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

//     const sliderTrack = sliderLower.closest('.buttonGroup').querySelector('.slider-track1, .slider-track2, .slider-track3');
//     sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
// }

// function filterPants() {
//     const lowerValue1 = parseFloat(sliderLower1.value);
//     const upperValue1 = parseFloat(sliderUpper1.value);

//     const lowerValue2 = parseFloat(sliderLower2.value);
//     const upperValue2 = parseFloat(sliderUpper2.value);

//     const lowerValue3 = parseFloat(sliderLower3.value);
//     const upperValue3 = parseFloat(sliderUpper3.value);

//     document.querySelectorAll('.pantsCard').forEach(card => {
//         const thigh = parseFloat(card.getAttribute('thigh'));
//         const legOpening = parseFloat(card.getAttribute('leg-opening'));
//         const rise = parseFloat(card.getAttribute('rise'));

//         const matchThigh = (isNaN(thigh) || (thigh >= lowerValue1 && thigh <= upperValue1));
//         const matchLegOpening = (isNaN(legOpening) || (legOpening >= lowerValue2 && legOpening <= upperValue2));
//         const matchRise = (isNaN(rise) || (rise >= lowerValue3 && rise <= upperValue3));

//         if (matchThigh && matchLegOpening && matchRise) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });

//     saveState();
// }

// function saveState() {
//     const state = {
//         sliderLower1: sliderLower1.value,
//         sliderUpper1: sliderUpper1.value,
//         sliderLower2: sliderLower2.value,
//         sliderUpper2: sliderUpper2.value,
//         sliderLower3: sliderLower3.value,
//         sliderUpper3: sliderUpper3.value,
//     };
//     sessionStorage.setItem('filterState', JSON.stringify(state));
// }

// function restoreState() {
//     const state = JSON.parse(sessionStorage.getItem('filterState'));

//     if (state) {
//         sliderLower1.value = state.sliderLower1;
//         sliderUpper1.value = state.sliderUpper1;
//         sliderLower2.value = state.sliderLower2;
//         sliderUpper2.value = state.sliderUpper2;
//         sliderLower3.value = state.sliderLower3;
//         sliderUpper3.value = state.sliderUpper3;

//         // Update sliders and filter pants
//         updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
//         updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
//         updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);

//         filterPants();
//     } else {
//         // If no state is found, ensure the sliders show their default state
//         updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
//         updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
//         updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);
//     }
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     restoreState();
// });

// window.addEventListener('pageshow', (event) => {
//     restoreState();
// });

// sliderLower1.addEventListener('input', updateValuesAndFilter1);
// sliderUpper1.addEventListener('input', updateValuesAndFilter1);

// sliderLower2.addEventListener('input', updateValuesAndFilter2);
// sliderUpper2.addEventListener('input', updateValuesAndFilter2);

// sliderLower3.addEventListener('input', updateValuesAndFilter3);
// sliderUpper3.addEventListener('input', updateValuesAndFilter3);

// function updateValuesAndFilter1() {
//     updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
//     filterPants();
// }

// function updateValuesAndFilter2() {
//     updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
//     filterPants();
// }

// function updateValuesAndFilter3() {
//     updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);
//     filterPants();
// }

// const resetButton = document.getElementById('resetFilters');
// resetButton.addEventListener('click', () => {
//     sliderLower1.value = sliderLower1.min;
//     sliderUpper1.value = sliderUpper1.max;
//     updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);

//     sliderLower2.value = sliderLower2.min;
//     sliderUpper2.value = sliderUpper2.max;
//     updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);

//     sliderLower3.value = sliderLower3.min;
//     sliderUpper3.value = sliderUpper3.max;
//     updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);

//     document.querySelectorAll('.pantsCard').forEach(card => {
//         card.style.display = 'block';
//     });

//     sessionStorage.removeItem('filterState');
// });




// Function to load and parse CSV
async function loadPantsData() {
    try {
        const response = await fetch('/PantsIndexData - Sheet1.csv');
        const data = await response.text();
        const pantsArray = parseCSV(data);
        generatePantsHTML(pantsArray);
        restoreState(); // Restore the state after generating the pants content
    } catch (error) {
        console.error('Error loading CSV:', error);
    }
}

// Function to parse CSV into an array
function parseCSV(data) {
    const lines = data.split('\n');
    return lines.map(line => {
        const values = line.split(',');
        return {
            brand: values[0],
            name: values[1],
            type: values[2],
            waist: values[3],
            inseam: values[4],
            rise: parseFloat(values[5]),
            thigh: parseFloat(values[6]),
            knee: parseFloat(values[7]),
            legOpening: parseFloat(values[8]),
            price: values[9]
        };
    });
}

// Generate HTML content dynamically from pants data
function generatePantsHTML(pantsArray) {
    const container = document.getElementById('content');
    container.innerHTML = ''; // Clear previous content
    pantsArray.forEach(pants => {
        const card = document.createElement('div');
        card.className = 'pantsCard';
        card.setAttribute('rise', pants.rise);
        card.setAttribute('thigh', pants.thigh);
        card.setAttribute('knee', pants.knee);
        card.setAttribute('leg-opening', pants.legOpening);
        
        card.innerHTML = `
            <div class="pantsCardIMG">
                <img class="coverIMG" src="./src/assets/pantsIMGS/${pants.name.replace(/\s/g, '')}Cover.jpg"/>
                <img class="hoverIMG" src="./src/assets/pantsIMGS/${pants.name.replace(/\s/g, '')}Hover.jpg"/>
            </div>
            <h3>${pants.name}</h3>
            <p>${pants.brand}</p>
            <p><strong>${pants.price}</strong></p>
        `;
        
        container.appendChild(card);
    });
    filterPants(); // Run the filter after loading content
}

// Sliders and Filtering logic
function updateSlider(sliderLower, sliderUpper, valueLower, valueUpper) {
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

    const sliderTrack = sliderLower.closest('.buttonGroup').querySelector('.slider-track1, .slider-track2, .slider-track3');
    sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentLower}%, #565657 ${percentLower}%, #ff73c5 ${percentUpper}%, #ddd ${percentUpper}%)`;
}

// Filter function to filter pants based on slider values
function filterPants() {
    const lowerValue1 = parseFloat(sliderLower1.value);
    const upperValue1 = parseFloat(sliderUpper1.value);

    const lowerValue2 = parseFloat(sliderLower2.value);
    const upperValue2 = parseFloat(sliderUpper2.value);

    const lowerValue3 = parseFloat(sliderLower3.value);
    const upperValue3 = parseFloat(sliderUpper3.value);

    document.querySelectorAll('.pantsCard').forEach(card => {
        const thigh = parseFloat(card.getAttribute('thigh'));
        const legOpening = parseFloat(card.getAttribute('leg-opening'));
        const rise = parseFloat(card.getAttribute('rise'));

        const matchThigh = (isNaN(thigh) || (thigh >= lowerValue1 && thigh <= upperValue1));
        const matchLegOpening = (isNaN(legOpening) || (legOpening >= lowerValue2 && legOpening <= upperValue2));
        const matchRise = (isNaN(rise) || (rise >= lowerValue3 && rise <= upperValue3));

        if (matchThigh && matchLegOpening && matchRise) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    saveState();
}

// State saving function
function saveState() {
    const state = {
        sliderLower1: sliderLower1.value,
        sliderUpper1: sliderUpper1.value,
        sliderLower2: sliderLower2.value,
        sliderUpper2: sliderUpper2.value,
        sliderLower3: sliderLower3.value,
        sliderUpper3: sliderUpper3.value,
    };
    sessionStorage.setItem('filterState', JSON.stringify(state));
}

// Restore saved state
function restoreState() {
    const state = JSON.parse(sessionStorage.getItem('filterState'));

    if (state) {
        sliderLower1.value = state.sliderLower1;
        sliderUpper1.value = state.sliderUpper1;
        sliderLower2.value = state.sliderLower2;
        sliderUpper2.value = state.sliderUpper2;
        sliderLower3.value = state.sliderLower3;
        sliderUpper3.value = state.sliderUpper3;

        // Update sliders and filter pants
        updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
        updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
        updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);

        filterPants();
    } else {
        // Ensure sliders show default state
        updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
        updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
        updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);
    }
}

// Initialize page content and event listeners
document.addEventListener('DOMContentLoaded', async (event) => {
    await loadPantsData(); // Load pants data first

    // Event listeners for sliders
    sliderLower1.addEventListener('input', updateValuesAndFilter1);
    sliderUpper1.addEventListener('input', updateValuesAndFilter1);

    sliderLower2.addEventListener('input', updateValuesAndFilter2);
    sliderUpper2.addEventListener('input', updateValuesAndFilter2);

    sliderLower3.addEventListener('input', updateValuesAndFilter3);
    sliderUpper3.addEventListener('input', updateValuesAndFilter3);

    // Reset filters button
    const resetButton = document.getElementById('resetFilters');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            sliderLower1.value = sliderLower1.min;
            sliderUpper1.value = sliderUpper1.max;
            updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);

            sliderLower2.value = sliderLower2.min;
            sliderUpper2.value = sliderUpper2.max;
            updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);

            sliderLower3.value = sliderLower3.min;
            sliderUpper3.value = sliderUpper3.max;
            updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);

            document.querySelectorAll('.pantsCard').forEach(card => {
                card.style.display = 'block';
            });

            sessionStorage.removeItem('filterState');
        });
    }
});

function updateValuesAndFilter1() {
    updateSlider(sliderLower1, sliderUpper1, valueLower1, valueUpper1);
    filterPants();
}

function updateValuesAndFilter2() {
    updateSlider(sliderLower2, sliderUpper2, valueLower2, valueUpper2);
    filterPants();
}

function updateValuesAndFilter3() {
    updateSlider(sliderLower3, sliderUpper3, valueLower3, valueUpper3);
    filterPants();
}


// so the content loading kind of works but the sliders don't