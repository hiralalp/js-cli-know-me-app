var readlineSync = require('readline-sync');

var score = 0;
var readName = readlineSync.question('May I get your Name?');
console.log('Welcome '+readName+' to HOW WELL YOU KNOW HIRALAL');
console.log('Hey '+readName+' make sure you keep the first letter captial Of Every Word Or You Will Lose Points');


function quiz (question, answer){
var userAnswer = readlineSync.question(question);

if (userAnswer === answer) {
  console.log('You are right');
  score++;

} else {
  console.log('You are wrong '+'the right answer is '+ answer);
  score--;

}
}



var question = [ {
  question: "Who is my favorite superhero?",
  answer: "Batman",
},{
  question: "Which is my favorite sad song?",
  answer: "Moonlight",
},{
  question: "Who is my favorite Hollywood star?",
  answer: "Tom Cruse",
},{
  question: "Which is my favorite Food?",
  answer: "Malai sandwich",
},{
  question: "Which is my favorite movie",
  answer: "Watchmen",
},{
  question: "What is my favorite street food",
  answer: "Pani Puri",
},{
  question: "Who is Cricketer",
  answer: "Virat Kohli",
}
];


for (var i= 0 ; i < question.length; i++ ){
var currentQuestion = question[i];
quiz(currentQuestion.question,currentQuestion.answer)
}

var scoreBoard=[{
name:"Me Obviously",
score: "10"
},
{
name:"Divyanshu Mishra",
score:"7"
}]

console.log('Your final score is ' + score)
console.log(scoreBoard)
console.log('If you beat this score send me a ScreenShot')