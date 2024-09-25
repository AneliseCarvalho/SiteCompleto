function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option =>{
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
    
function submitQuiz() {
    let correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "C",
        q4: "A",
        q5: "A",
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "B",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value; 
        if (userAnswer === correctAnswers[key]) {
            score++;
        }    
    }
    
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas!`;

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }else {
        let perdeuSound = document.getElementById('perdeusom');
        perdeuSound.play();
    }

  
    document.querySelector('button[type="button"]').disabled = true; 
    document.getElementById('retry-button').disabled = false;
}

function resetQuiz() {
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });
    document.getElementById('result').innerHTML = '';
    document.querySelector('button[type="button"]').disabled = false; 
    document.getElementById('retry-button').disabled = true; 
}

function resetPag(){
    let formPagamento = document.getElementById('pg');
    formPagamento.reset();
   
}