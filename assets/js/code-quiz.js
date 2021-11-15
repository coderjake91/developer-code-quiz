/*-----------------------------------------------------------------------------------------*/
//Code-quiz pseudocode
/*
Note: quiz will be ten questions long, and user is give 1 min to answer
The quiz information will be stored as an array of problem objects

Data structure:
Each problem obj will have these properties:
-question id (string)
-question (string)
-answer (string)
-falseAnswers (array of wrong choice strings)

Problem flow algorithm:
-> user presented with start page
-> user clicks start
-> then, first question is presented and time starts concurrently (on click event here)
-> user selects answer choice (either incorrect or correct selection)
    ->if correct (add 10 points/per correct answer to user score), display correct text, serve next question
    ->if incorrect (subtract 20 seconds from timer), display incorrect text, serve next question
->  if time exhausted or no more questions then end, display score page

Score page logic:
->user presented with score page at the conclusion of quiz session
*/
/*----------------------------------------------------------------------------------------*/
let quizTime = 60;
let t;
const quizCountDown = () => {
    
    document.getElementById('timer').innerHTML = quizTime;
    console.log(quizTime);

    quizTime = quizTime - 1;
    t = setTimeout(quizCountDown, 1000);
    if(quizTime < 0){
        clearTimeout(t);
    }

};