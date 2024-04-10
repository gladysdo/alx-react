import $ from 'jquery';
import _ from 'lodash';
import './css/main.css';

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

function addElements() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#startButton').on('click', _.debounce(updateCounter, 500));
}
$(document).ready(function() {
    addElements();
});
