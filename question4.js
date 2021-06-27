const quizDB = [
    {
        question: "Q1: Which is the first narrative feature film in India?",
        a: "Pundalik",
        b: "Raja Harishchandra",
        c: "Alam Ara",
        d: "Sant Tukaram",
        ans: "ans1"
    },
    {
        question: "Q2: Which is the first indigenous feature film in India?",
        a: "Pundalik",
        b: "Raja Harishchandra",
        c: "Alam Ara",
        d: "Sant Tukaram",
        ans: "ans2"
    },
    {
        question: "Q3: Which is the first talkie film in India?",
        a: "Pundalik",
        b: "Raja Harishchandra",
        c: "Alam Ara",
        d: "Sant Tukaram",
        ans: "ans3"
    },
    {
        question: "Q4: Which is the first golden jubilee film of India?",
        a: "Pundalik",
        b: "Raja Harishchandra",
        c: "Alam Ara",
        d: "Sant Tukaram",
        ans: "ans4"
    },
    {
        question: "Q5: Which is the first Sanskrit film?",
        a: "Shankaracharya",
        b: "Bhagavad Gita",
        c: "Gunda",
        d: "Margazhi Raagam",
        ans: "ans1"
    },
    {
        question: "Q6: Which is the first telefilm of India?",
        a: "Sadgati",
        b: "Pather Panchali",
        c: "Pikoo",
        d: "Bala",
        ans: "ans1"
    },
    {
        question: "Q7: Which is the first serialised animation film in India?",
        a: "Ek Anek aur ekta",
        b: "Ghayab Aya",
        c: "Kittu",
        d: "Motu Patlu",
        ans: "ans2"
    },
    {
        question: "Q8: What was the first movie in the Marvel Cinematic Universe?",
        a: "Spider-Man",
        b: "The Avengers",
        c: "Iron Man",
        d: "Batman",
        ans: "ans3"
    },
    {
        question: "Q9: Which of the following is filmmaker Michael Bay known for?",
        a: "Romentic Comedy",
        b: "Fanciful costume design",
        c: "Exploisons",
        d: "Sweeping Western Landscapes",
        ans: "ans3"
    },
    {
        question: "Q10: In the 'Godfather' series, where was Vito Corleone born?",
        a: "Corleone, Sicily",
        b: "Rome",
        c: "Athens",
        d: "New York city",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    if (questionCount < quizDB.length) {
        deselectAll();
    };

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>you scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> PLAY AGAIN</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});