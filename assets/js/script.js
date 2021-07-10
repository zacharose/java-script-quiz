var btnEl = document.querySelector(".btn")
// start game at 0
var score = 0;
var startQuiz = function() {
    // array to hold questions.
var questions = [
    { q:'1', a:'t'},
    { q:'2', a:'t'},
    { q:'3', a:'f'},
    { q:'4', a:'f'},
    { q:'5', a:'f'},
    { q:'6', a:'t'},
    { q:'7', a:'f'},
    { q:'8', a:'t'},
    { q:'9', a:'f'},
    { q:'10', a:'f'},
]
// loop over every question
for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);

     if (
      (answer === true && questions[i.a === 't']) ||
      (answer === false && questions[i.a === 'f'])
     ) {
     score++;
     alert('Correct!');
    } else {
    alert('Wrong');
     }
    }
}

btnEl.addEventListener('click', startQuiz)