// Import jQuery
import $ from 'jquery';

// Function to add three paragraphs to the body
function addParagraphs() {
    // Add three paragraphs to the body
    $('body').append('<p>This is the first paragraph.</p>');
    $('body').append('<p>This is the second paragraph.</p>');
    $('body').append('<p>This is the third paragraph.</p>');
}

// Call the function when the DOM is ready
$(document).ready(function() {
    addParagraphs();
});
