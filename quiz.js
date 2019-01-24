var correctAnswers = 0;
var question1 = prompt('2 + 0');

if (parseInt(question1) === 2) {
  correctAnswers += 1;
} else {
  alert('Oops it\'s not');
        }
        
var question2 = prompt('2 + 1');
  
if (parseInt(question2) === 3) {
  correctAnswers += 1;
} else {
  alert('Oops it\'s not');
}

var question3 = prompt('2 + 2');

if (parseInt(question3) === 4) {
  correctAnswers += 1;
} else {
  alert('Oops it\'s not');
}

var question4 = prompt('2 + 3');

if (parseInt(question4) === 5) {
  correctAnswers += 1;
} else {
  alert('Oops it\'s not');
}

var question5 = prompt('2 + 4');

if (parseInt(question5) === 6) {
  correctAnswers += 1;
} else {
  alert('Oops it\'s not');
}

if ( correctAnswers === 5) {
  alert('You answered correctly ' + correctAnswers + ' out of 5. Gold medal!');
} else if (correctAnswers <= 4 && correctAnswers > 2) {
  alert('You answered correctly ' + correctAnswers + ' out of 5. Silver medal!');
} else if (correctAnswers <=2 && correctAnswers > 0) {
  alert('You answered correctly ' + correctAnswers + ' out of 5. Bronze medal!');
} else { 
  alert('You answered correctly ' + correctAnswers + ' out of 5. No medal :(');
}

alert('Po pope kak dam tebe!');