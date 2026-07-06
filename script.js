let score = 0;
let wickets = 0;

function hitBall(){

    let run = Math.floor(Math.random()*7);

    const result = document.getElementById("result");
    const scoreText = document.getElementById("score");

    if(run === 0){

        wickets++;

        result.innerHTML = "OUT! ❌";

    }else if(run === 4){

        score += 4;

        result.innerHTML = "FOUR! 🔥";

    }else if(run === 6){

        score += 6;

        result.innerHTML = "SIX! 🚀";

    }else{

        score += run;

        result.innerHTML = run + " Runs";
    }

    scoreText.innerHTML =
    "Score: " + score + "/" + wickets;

    if(wickets >= 3){

        result.innerHTML =
        "GAME OVER 🏏 Final Score: " + score;
    }

}
