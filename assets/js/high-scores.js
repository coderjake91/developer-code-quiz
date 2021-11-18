const scores = document.getElementById("score-list");
const scoreForm = document.getElementById("score-form");

function highScores(){
    if(!localStorage.getItem("scoreList") || JSON.parse(localStorage.getItem("scoreList")).length === 0){
       scores.innerHTML = '<p style="color: whitesmoke; font-weight: 900;">No High Score information currently available!</p>'
       const scoreList = [];
       localStorage.setItem("scoreList", JSON.stringify(scoreList)); 
    } else {
        const scoreList = JSON.parse(localStorage.getItem("scoreList"));

        scoreList.forEach(highScore => {
            scores.innerHTML =   `<li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <span class="badge bg-primary rounded-pill">Place Here</span>
                                        <div class="fw-bold">${highScore.initials}</div>
                                        Score: ${highScore.score}
                                    </div>
                                </li>`
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
        score: userCurrentScore
    }

    console.log(user);
    scoreList.push(user);
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

window.onload = highScores();

scoreForm.addEventListener('submit', submitScore);