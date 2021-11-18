const scores = document.getElementById("score-list");
const scoreForm = document.getElementById("score-form");

function highScores(){
    if(!localStorage.getItem("scoreList") || JSON.parse(localStorage.getItem("scoreList")).length === 0){
       scores.innerHTML = '<p style="color: whitesmoke; font-weight: 900;">No High Score information currently available!</p>'
       const scoreList = [];
       localStorage.setItem("scoreList", JSON.stringify(scoreList)); 
    } else {
        const scoreList = JSON.parse(localStorage.getItem("scoreList"));

        const sortedList = scoreList.sort((a,b) => {return b.score - a.score});

        console.log(sortedList);

        sortedList.forEach((highScore, index) => {
            const scoreEl = document.createElement("li");
            scoreEl.className = "list-group-item d-flex justify-content-between align-items-start";
            switch(index.toString()){
                case '0':
                    scoreEl.className = "list-group-item d-flex justify-content-between align-items-start";
                    scoreEl.innerHTML =   `<div class="ms-2 me-auto">
                                                <span class="badge bg-primary rounded-pill">1st Place</span>
                                                <div class="fw-bold">${highScore.initials}</div>
                                                Score: ${highScore.score}
                                                <br>Attempted: ${highScore.submitTime}
                                            </div>`
                    scores.appendChild(scoreEl);
                break;
                case '1':
                    scoreEl.innerHTML =   `<div class="ms-2 me-auto">
                                                <span class="badge bg-primary rounded-pill">2nd Place</span>
                                                <div class="fw-bold">${highScore.initials}</div>
                                                Score: ${highScore.score}
                                                <br>Attempted: ${highScore.submitTime}
                                            </div>`
                    scores.appendChild(scoreEl);
                break;
                case '2':
                    scoreEl.innerHTML =   `<div class="ms-2 me-auto">
                                                <span class="badge bg-primary rounded-pill">3rd Place</span>
                                                <div class="fw-bold">${highScore.initials}</div>
                                                Score: ${highScore.score}
                                                <br>Attempted: ${highScore.submitTime}
                                            </div>`
                    scores.appendChild(scoreEl);
                break;
                default:
                    scoreEl.innerHTML =   `<div class="ms-2 me-auto">
                                                <div class="fw-bold">${highScore.initials}</div>
                                                Score: ${highScore.score}
                                                <br>Attempted: ${highScore.submitTime}
                                            </div>`
                    scores.appendChild(scoreEl);
            }
        });
    }
}

function submitScore(event){
    event.preventDefault();

    const userCurrentScore = localStorage.getItem("currentUserScore");
    const scoreList = JSON.parse(localStorage.getItem("scoreList"));

    const userInitials = document.getElementById("score-field").value;

    if(!userInitials){
        alert("Please enter your initials!");
        return false;
    }

    scoreForm.reset();

    const user = {
        initials: userInitials,
        score: userCurrentScore,
        submitTime: new Intl.DateTimeFormat('en-GB', {dateStyle: 'short', timeStyle: 'short'}).format(Date.now())
    }

    console.log(user);
    scoreList.push(user);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    scores.innerHTML = '';
    highScores();
}

window.onload = highScores();

scoreForm.addEventListener('submit', submitScore);