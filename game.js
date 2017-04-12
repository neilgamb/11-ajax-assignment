function makeQuestion(question) {
    let parent = document.querySelector('main');

    let element = document.createElement('h1');
    element.classList.add('questions');

    // category in <p>
    let category = document.createElement('p');
    category.textContent = question.category;

    // value in an <p>
    let value = document.createElement('p');
    value.textContent = question.value;

    // question in an <p>
    let q = document.createElement('p');
    q.textContent = question.quest;

    // input in <input field>
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");

    // submitButton in <button>
    let answer = document.createElement('button');
    answer.textContent = 'submit';
    answer.addEventListener('click', function () {
        parent.removeChild(element);
        //let userAnswer = document.getElementById('input').value;
        getQuestion();
    });

    parent.appendChild(element);

    element.appendChild(category);
    element.appendChild(value);
    element.appendChild(q);
    element.appendChild(input);
    element.appendChild(answer);

}

function getQuestion(){

    // API URL: http://jservice.io/api/random

    let request = new XMLHttpRequest(); // i want to make an ajax request
    request.open('GET', 'http://jservice.io/api/random');  //...to this api
    request.addEventListener('load', function(){

        console.log(request.responseText)

        let response = JSON.parse(request.responseText);
        console.log(response);

        let question = {
             category: response[0].category.title,
             value: response[0].value,
             quest: response[0].question,
         }
         console.log(question);

        makeQuestion(question);

    });                 
    request.send();     

}

window.addEventListener('load', function() {

getQuestion();



});