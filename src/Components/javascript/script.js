var initialState = []
var currentState = []

/**
 * Saves the initial state of the page
 * @params None
 * @returns None
 */
function saveContent() {
    const sourceDiv = document.getElementById('content');
    const content = sourceDiv.innerHTML;
    localStorage.setItem('savedContent', content);
    console.log('Content saved:', content);
}


/**
 * Loads the original content
 * @params None
 * @returns None
 */
function loadContent() {
    const targetDiv = document.getElementById('content');
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        targetDiv.innerHTML = savedContent;
        console.log('Content loaded:', savedContent);
    } else {
        console.log('No content found to load.');
    }
}



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




document.addEventListener('DOMContentLoaded', (event) => {

    saveContent();

    //handles filtering for hem (leg-opening)

    const hem68 = document.getElementById('hem68');
    if (hem68) {
        hem68.addEventListener('click', () => {
            displayPantsByLegOpening(8, 10);
        });
    }
    
    const hem810 = document.getElementById('hem810');
    if (hem810) {
        hem810.addEventListener('click', () => {
            displayPantsByLegOpening(8, 10);
        });
    }


    const hem1517 = document.getElementById('hem1517');
    if (hem1517) {
        hem1517.addEventListener('click', () => {
            displayPantsByLegOpening(15, 17);
        });
    }

    const hem1012 = document.getElementById('hem1012');
    if (hem1012) {
        hem1012.addEventListener('click', () => {
            displayPantsByLegOpening(10, 12);
        });
    }

    const resetButton = document.getElementById('resetFilters')
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            loadContent();
        });
    }
    
});


//Functions for the mobile slider pop out
document.getElementById("hamburgerMenu").addEventListener("click", function() {
    document.getElementById("leftNav").classList.add("open");
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("leftNav").classList.remove("open");
});



// document.addEventListener('DOMContentLoaded', (event) => {

//     saveContent();
    
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     const hem1012 = document.getElementById('hem1012');
//     if (hem1012) {
//         hem1012.addEventListener('click', () => {
//             displayPantsByLegOpening(10, 12);
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//     const resetButton = document.getElementById('resetFilters')
//     if (resetButton) {
//         resetButton.addEventListener('click', () => {
//             loadContent();
//         });
//     }
// });


// const hem810 = document.getElementById('hem810');
    // if (hem810) {
    //     hem810.addEventListener('click', () => {
    //         displayPantsByLegOpening(8, 10);
    //     });
    // }

    
    
    // const hem1517 = document.getElementById('hem1517');
    // if (hem1517) {
    //     hem1517.addEventListener('click', () => {
    //         displayPantsByLegOpening(15, 17);
    //     });
    // }

    // const hem1012 = document.getElementById('hem1012');
    // if (hem1012) {
    //     hem1012.addEventListener('click', () => {
    //         displayPantsByLegOpening(10, 12);
    //     });
    // }


/**
 * IDEA: Save initial container state to local variable, 
 * every time filter is requested, go from initial state and add those params,
 * have restore button to make everything go back
 * if a button is unclicked, remove all of those params from current state (Could have to redo all of the current selected)
 */

//deleted a folder called public that had an index.html