function sortDivs() {
    const container = document.getElementById('content');
    const items = Array.from(container.getElementsByClassName('pantsCard'));

    // Sort items by data-sort attribute
    items.sort((a, b) => a.getAttribute('leg-opening') - b.getAttribute('leg-opening'));

    // Clear the container
    container.innerHTML = '';

    // Append the sorted items
    items.forEach(item => container.appendChild(item));
}

// Call the function to sort and reorder divs


/**
 * 
 * @param {string} order options (descending, ascending) deciding if to sort low to high or high to low by leg opening
 */
function sortPantsByLegOpening(order = 'ascending') {
    const container = document.getElementById('content');
    const pantsCards = Array.from(container.getElementsByClassName('pantsCard'));

    pantsCards.sort((a, b) => {
      const aLegOpening = parseFloat(a.getAttribute('leg-opening')) || 0;
      const bLegOpening = parseFloat(b.getAttribute('leg-opening')) || 0;
      
      if (order === 'descending') {
          return bLegOpening - aLegOpening; // Sort high to low
      } else {
          return aLegOpening - bLegOpening; // Sort low to high (default)
      }
    });

    // Clear the container
    container.innerHTML = '';

    // Append sorted pantsCards
    pantsCards.forEach(pantsCard => container.appendChild(pantsCard));
}

// Call the sorting function for leg opening

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortLegLowHigh');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('ascending');
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortLegHighLow');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('descending');
        });
    }
});


/**
 * 
 * @param {string} order options (descending, ascending) deciding if to sort low to high or high to low by thigh
 */
function sortPantsByLegOpening(order = 'ascending') {
    const container = document.getElementById('content');
    const pantsCards = Array.from(container.getElementsByClassName('pantsCard'));

    pantsCards.sort((a, b) => {
      const aLegOpening = parseFloat(a.getAttribute('thigh')) || 0;
      const bLegOpening = parseFloat(b.getAttribute('thigh')) || 0;
      
      if (order === 'descending') {
          return bLegOpening - aLegOpening; // Sort high to low
      } else {
          return aLegOpening - bLegOpening; // Sort low to high (default)
      }
    });

    // Clear the container
    container.innerHTML = '';

    // Append sorted pantsCards
    pantsCards.forEach(pantsCard => container.appendChild(pantsCard));
}

// Call the sorting function for leg opening

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortThighLowHigh');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('ascending');
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortThighHighLow');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('descending');
        });
    }
});




/**
 * 
 * @param {string} order options (descending, ascending) deciding if to sort low to high or high to low by rise
 */
function sortPantsByLegOpening(order = 'ascending') {
    const container = document.getElementById('content');
    const pantsCards = Array.from(container.getElementsByClassName('pantsCard'));

    pantsCards.sort((a, b) => {
      const aLegOpening = parseFloat(a.getAttribute('rise')) || 0;
      const bLegOpening = parseFloat(b.getAttribute('rise')) || 0;
      
      if (order === 'descending') {
          return bLegOpening - aLegOpening; // Sort high to low
      } else {
          return aLegOpening - bLegOpening; // Sort low to high (default)
      }
    });

    // Clear the container
    container.innerHTML = '';

    // Append sorted pantsCards
    pantsCards.forEach(pantsCard => container.appendChild(pantsCard));
}

// Call the sorting function for leg opening

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortRiseLowHigh');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('ascending');
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortThighHighLow');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening('descending');
        });
    }
});






//testing new function

function displayPantsByLegOpening(min, max) {
    const container = document.getElementById('content');
    const pantsCards = Array.from(container.getElementsByClassName('pantsCard'));

    // Filter pantsCards with leg opening between 15 and 17
    const filteredPantsCards = pantsCards.filter(pantsCard => {
        const legOpening = parseFloat(pantsCard.getAttribute('leg-opening')) || 0;
        return legOpening >= min && legOpening <= max;
    });

    // Clear the container
    container.innerHTML = '';

    // Append filtered pantsCards
    filteredPantsCards.forEach(pantsCard => container.appendChild(pantsCard));
}

// Call the display function for leg opening

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const displayTrigger = document.getElementById('hem810');
    if (displayTrigger) {
        displayTrigger.addEventListener('click', () => {
            displayPantsByLegOpening(8, 10);
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const displayTrigger = document.getElementById('hem1012');
    if (displayTrigger) {
        displayTrigger.addEventListener('click', () => {
            displayPantsByLegOpening(10, 12);
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const displayTrigger = document.getElementById('hem1517');
    if (displayTrigger) {
        displayTrigger.addEventListener('click', () => {
            displayPantsByLegOpening(15, 17);
        });
    }
});




/**
 * IDEA: Save initial container state to local variable, 
 * every time filter is requested, go from initial state and add those params,
 * have restore button to make everything go back
 * if a button is unclicked, remove all of those params from current state (Could have to redo all of the current selected)
 */