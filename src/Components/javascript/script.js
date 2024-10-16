// var initialState = []
// var currentState = []

// /**
//  * Saves the initial state of the page
//  * @params None
//  * @returns None
//  */
// function saveContent() {
//     const sourceDiv = document.getElementById('content');
//     const content = sourceDiv.innerHTML;
//     localStorage.setItem('savedContent', content);
//     console.log('Content saved:', content);
// }


// /**
//  * Loads the original content
//  * @params None
//  * @returns None
//  */
// function loadContent() {
//     const targetDiv = document.getElementById('content');
//     const savedContent = localStorage.getItem('savedContent');
//     if (savedContent) {
//         targetDiv.innerHTML = savedContent;
//         console.log('Content loaded:', savedContent);
//     } else {
//         console.log('No content found to load.');
//     }
// }





// document.addEventListener('DOMContentLoaded', (event) => {

//     saveContent();

    
// });


//Functions for the mobile slider pop out
document.getElementById("hamburgerMenu").addEventListener("click", function() {
    document.getElementById("leftNav").classList.add("open");
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("leftNav").classList.remove("open");
});




/**
 * IDEA: Save initial container state to local variable, 
 * every time filter is requested, go from initial state and add those params,
 * have restore button to make everything go back
 * if a button is unclicked, remove all of those params from current state (Could have to redo all of the current selected)
 */

//deleted a folder called public that had an index.html