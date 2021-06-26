const quizDB = [
    {
        question: "Q1: 'PDPM' in the college name PDPM IIITDMJ stands for:-",
        a: "Pandit Dwarika Prashad Mishra",
        b: "Pandit Din-Prashad Mishra",
        c: "Pandit Dwarika Parth Mishra",
        d: "Professor Dwarika Prashad Mathur",
        ans: "ans1"
    },
    {
        question: "Q2: In which year, IIITDMJ was established?",
        a: "2007",
        b: "2004",
        c: "1997",
        d: "2005",
        ans: "ans4"
    },
    {
        question: "Q3: Who was appointed as the first director of IIITDMJ?",
        a: "Dr. Sanjeev Bhargav",
        b: "Prof. Sanjeev Jain",
        c: "Prof. Sanjeev Raghav",
        d: "Dr. sanjeev Kumar",
        ans: "ans1"
    },
    {
        question: "Q4: 'What is the name of programming club of IIITDMJ?",
        a: "Bit-Bits",
        b: "Byte-Bit",
        c: "Bit-Byte",
        d: "Byte-Byte",
        ans: "ans3"
    },
    {
        question: "Q5: IIITDMJ is an institute of national importance under which act of parliament?",
        a: "Indian Institute of Information and technology act, 2014",
        b: "Indian Institute of Information and technology act, 2017",
        c: "Institute of National Importance act, 2017",
        d: "Institute of National Importance act, 2017",
        ans: "ans1"
    },
    {
        question: "Q6: What is the motto of IIITDMJ?",
        a: "Born for innovation",
        b: "Born for development",
        c: "Born for revolutionising",
        d: "Born for designing",
        ans: "ans1"
    },
    {
        question: "Q7: Who was the chief guest of 11th convocation of IIITDMJ?",
        a: "Vice-president, M. Venkaiah Naidu",
        b: "Defence Minister, Rajnath Singh",
        c: "Minister of Road Transport and highways, Nitin Gadkari",
        d: "IT Minister, Ravi Shankar Prashad",
        ans: "ans2"
    },
    {
        question: "Q8: 'In which city IIITDMJ situated?",
        a: "Jaipur",
        b: "Jodhpur",
        c: "Jaunpur",
        d: "Jabalpur",
        ans: "ans4"
    },
    {
        question: "Q9: What is the name of nearby national park of IIITDMJ?",
        a: "Nagarhole National Park",
        b: "Dumna Nature Reserve Park",
        c: "Kanha National Park",
        d: "Gir National Park",
        ans: "ans2"
    },
    {
        question: "Q10: In 2005, in which college IIITDMJ started functioning?",
        a: "Jabalpur Engineering College'",
        b: "Saraswati Institute of Engineering & Technology",
        c: "Radhaswami Institute of Engineering",
        d: "Gyan Ganga Institute of Technology and sciences",
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