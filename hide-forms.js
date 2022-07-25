"use strict"


//form types buttons
let openQuestionType;
let ynQuestionType;
let abcdQuestionType;

//forms
let addQuestionForm;
let selectTypeForm;

let openQuestionForm;
let closedYNForm
let closedABCDForm;

//back buttons
let selectTypeBack;

let openQuestionBack;
let closedYNBack;
let closedABCDBack;

document.addEventListener('DOMContentLoaded', () => {
    addQuestionForm = document.getElementById('add-question');
    selectTypeForm = document.getElementById('select-type-form');

    openQuestionType = document.getElementById('open-question-type');
    ynQuestionType = document.getElementById('yn-question-type');
    abcdQuestionType = document.getElementById('abcd-question-type');
    
    openQuestionForm = document.getElementById('open-question-form');
    closedYNForm = document.getElementById('closed-yn-form');
    closedABCDForm = document.getElementById('closed-abcd-form');
    
    selectTypeBack = document.getElementById('select-type-back');
    
    openQuestionBack = document.getElementById('open-question-back');
    closedYNBack = document.getElementById('closed-yn-back');
    closedABCDBack = document.getElementById('closed-abcd-back');


//frontend actions
    addQuestionForm.addEventListener('click', () => {
        addQuestionForm.classList.add('hidden');
        selectTypeForm.classList.remove('hidden');
    })
    
    openQuestionType.addEventListener('click', (event) => {
        selectTypeForm.classList.add('hidden');
        openQuestionForm.classList.remove('hidden');
    })

    ynQuestionType.addEventListener('click', (event) => {
        selectTypeForm.classList.add('hidden');
        closedYNForm.classList.remove('hidden');
    })

    abcdQuestionType.addEventListener('click', (event) => {
        selectTypeForm.classList.add('hidden');
        closedABCDForm.classList.remove('hidden');
    })


//submit button actions
    openQuestionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('test1');
        openQuestionForm.classList.add('hidden');
        addQuestionForm.classList.remove('hidden');
    })

    closedYNForm.addEventListener('submit', (event) => {
        event.preventDefault()
        alert('test2');
        closedYNForm.classList.add('hidden');
        addQuestionForm.classList.remove('hidden');
    })

    closedABCDForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('test3');
        closedABCDForm.classList.add('hidden');
        addQuestionForm.classList.remove('hidden');
    })


//back button actions
    openQuestionBack.addEventListener('click', (event) => {
        openQuestionForm.classList.add('hidden');
        selectTypeForm.classList.remove('hidden');
    })

    closedYNBack.addEventListener('click', (event) => {
        closedYNForm.classList.add('hidden');
        selectTypeForm.classList.remove('hidden');
    })

    closedABCDBack.addEventListener('click', (event) => {
        closedABCDForm.classList.add('hidden');
        selectTypeForm.classList.remove('hidden');
    })
    
    selectTypeBack.addEventListener('click', (event) => {
        selectTypeForm.classList.add('hidden');
        addQuestionForm.classList.remove('hidden');
    })
    
})