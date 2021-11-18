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

class Quiz {
    constructor() {
        this.quizState = {
            timeLimit: 25,
            t: 0,
            end: false,
            currentProblem: 0
        }
        this.elements = {
            container: document.getElementById('quiz-buttons'),
            question: document.getElementById('question'),
            response: document.getElementById('response'),
            timer: document.getElementById('timer'),
            c1: document.getElementById('c1'),
            c2: document.getElementById('c2'),
            c3: document.getElementById('c3'),
            c4: document.getElementById('c4')
        }
        this.user = {
            score: 0,
            initials: ''
        }
        //5 total quiz problems
        this.problems = [
            {
                question: 'What is the difference between == and ===?',
                answer: 'c1',
                choices: {
                    c1: '== is the abstract equality operator while === is the strict equality operator.',
                    c2: '== is the assignment operator while === is the comparison operator.',
                    c3: '== is the strict operator while === is the abstract operator.',
                    c4: 'There is no difference'
                }
            },
            {
                question: 'Explain event bubbling.',
                answer: 'c1',
                choices: {
                    c1: 'A concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting order. As a result, when clicking on a child element one may exhibit the handler of the parent activating.',
                    c2: 'Essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other browsers that do not have the support for that functionality built in.',
                    c3: 'A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.',
                    c4: "This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model."
                }
            },
            {
                question: 'What is a Constructor in the Object Oriented design paradigm',
                answer: 'c3',
                choices: {
                    c1: 'A generic piece of code which runs in between several asynchronous function calls (also known as control flow function).',
                    c2: 'A function that is called at the completion of a given task',
                    c3: 'A special method of a class, which is called automatically when the instance of a class is created.',
                    c4: 'A literal that is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake.'
                }
            },
            {
                question: 'What is Git?',
                answer: 'c2',
                choices: {
                    c1: 'A JavaScript Framework',
                    c2: 'A Distributed Version Control system (DVCS). It can track changes to a file and allows you to revert back to any particular change.',
                    c3: 'A type of RESTful API request',
                    c4: 'An npm package'
                }
            },
            {
                question: 'What are the two types of API functions in Node.js?',
                answer: 'c4',
                choices: {
                    c1: 'Boolean and Number',
                    c2: 'String and Char',
                    c3: 'Callback and Arrow',
                    c4: 'Asynchronous and Synchronous'
                }
            }
        ]
    }
    quizCountDown(){

    console.log(this.quizState.timeLimit);
        this.elements.timer.innerHTML = this.quizState.timeLimit;
    
    
        this.quizState.timeLimit -= 1;
        this.quizState.t = setTimeout(() => {this.quizCountDown()}, 1000);
        
        if(this.quizState.timeLimit < 0){
            clearTimeout(this.quizState.t);
            this.quizState.end = true;
            window.alert(`The Coder Quiz Has Ended!!! Your Score is ${this.user.score}`)
        }
    
    }
    quizButtonHandler(event){
        event.preventDefault();
       
        console.log(event.target.id);

        if(event.target.id === quiz.problems[quiz.quizState.currentProblem].answer){
            quiz.user.score += 20;
            quiz.elements.response.innerHTML = 'Correct!'
        } else {
            quiz.quizState.timeLimit -= 5;
            quiz.elements.response.innerHTML = 'Incorrect!'
        }
        console.log(quiz.quizState.currentProblem);
        quiz.quizState.currentProblem++

        setTimeout(()=> {quiz.presentProblem()}, 800);
    }
    presentProblem() {
        console.log(`problem ${this.quizState.currentProblem + 1} presented`)

        this.elements.question.innerHTML = this.problems[this.quizState.currentProblem].question;
        this.elements.c1.innerHTML = this.problems[this.quizState.currentProblem].choices.c1;
        this.elements.c2.innerHTML = this.problems[this.quizState.currentProblem].choices.c2;
        this.elements.c3.innerHTML = this.problems[this.quizState.currentProblem].choices.c3;
        this.elements.c4.innerHTML = this.problems[this.quizState.currentProblem].choices.c4;
    }
}


const quiz = new Quiz;

quiz.presentProblem();

quiz.elements.container.addEventListener('click', quiz.quizButtonHandler);
