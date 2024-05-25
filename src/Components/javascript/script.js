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
// sortDivs();

function sortPantsByLegOpening() {
    const container = document.getElementById('content');
    const pantsCards = Array.from(container.getElementsByClassName('pantsCard'));

    pantsCards.sort((a, b) => {
      const aLegOpening = parseFloat(a.getAttribute('leg-opening')) || 0;
      const bLegOpening = parseFloat(b.getAttribute('leg-opening')) || 0;
      return aLegOpening - bLegOpening;
    });

    // Clear the container
    container.innerHTML = '';

    // Append sorted pantsCards
    pantsCards.forEach(pantsCard => container.appendChild(pantsCard));
}

// Call the sorting function

document.addEventListener('DOMContentLoaded', (event) => {
    // Add click event listener to the specified <p> element
    const sortTrigger = document.getElementById('sortLegLowHigh');
    if (sortTrigger) {
        sortTrigger.addEventListener('click', () => {
            sortPantsByLegOpening();
        });
    }
});
