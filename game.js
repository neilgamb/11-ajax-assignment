let score = 0;

function makeQuestion(question) {
    let parent = document.querySelector('main');

    let element = document.createElement('h1');

    // category in <p>
    let category = document.createElement('h2');
    category.textContent = ' " '+question.category+' " ';

    // value in an <p>
    let value = document.createElement('h3');
    value.textContent = "for "+question.value;

    // question in an <p>
    let q = document.createElement('p');
    q.textContent = question.quest+":";

    // retrieve answer but DONT append
    let answer = document.createElement('p');
    answer.textContent = question.answer;
    console.log(answer);

    // input in <input field>
    let input = document.createElement("INPUT");
    input.setAttribute("type", "text");

    let scoreboard = document.createElement('p');
    scoreboard.textContent = "SCORE: "+score;

    // submitButton in <button>
    let submission = document.createElement('button');
    submission.textContent = 'submit';
    submission.addEventListener('click', function () {
        if(document.querySelector('input').value === question.answer){
            score = score + question.value;
        }
        parent.removeChild(element);
        console.log(score);
        getQuestion();
    });

    parent.appendChild(element);
    element.appendChild(category);
    element.appendChild(value);
    element.appendChild(q);
    element.appendChild(input);
    element.appendChild(submission);
    element.appendChild(scoreboard);


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
             answer: response[0].answer,
         }
         console.log(question);

        makeQuestion(question);

    });                 
    request.send();     

}

window.addEventListener('load', function() {

getQuestion();



});