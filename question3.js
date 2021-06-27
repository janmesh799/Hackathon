const quizDB = [
    {
        question: "Q1: Most valuable stat-up of india in 2020:",
        a: "OYO-rooms",
        b: "Paytm",
        c: "Byju's",
        d: "Zomato",
        ans: "ans2"
    },
    {
        question: "Q2: Flipkart was founded by?",
        a: "Sachin Bansal - Binny Bansal",
        b: "Vijay Shekhar Sharma - Sachin Bansal",
        c: "Binny Bansal - Vijey Shekhar Sharma",
        d: "Ritesh Agarwal - Binny Bansal",
        ans: "ans1"
    },
    {
        question: "Q3: India's youngest billionaire, Nikhil Kamath is co-founder of which startup? ",
        a: "Byju's",
        b: "Zomato",
        c: "OYO rooms",
        d: "Zerodha",
        ans: "ans4"
    },
    {
        question: "Q4: Which college in india has best stat-ups?",
        a: "IIT-Bombay",
        b: "IIT-Kanpur",
        c: "IIT-Delhi",
        d: "IIT-Kharagpur",
        ans: "ans3"
    },
    {
        question: "Q5: paytm was founded in:",
        a: "2009, Noida",
        b: "2011, Noida",
        c: "2009, Mumbai",
        d: "2011, Mumbai",
        ans: "ans1"
    },
    {
        question: "Q6: Flipkart was founded in:",
        a: "2009, Bengaluru",
        b: "2009, Delhi",
        c: "2009, 'Delhi",
        d: "2007, Bengaluru",
        ans: "ans4"
    },
    {
        question: "Q7: Ritesh Agarwal is founder of:",
        a: "Byju's",
        b: "CRED",
        c: "Zomato",
        d: "OYO Rooms",
        ans: "ans4"
    },
    {
        question: "Q8: What is Zomato's valuation?",
        a: "$5.4 billion",
        b: "$10.9 billion",
        c: "$3.7 billion",
        d: "$7.4 billion",
        ans: "ans1"
    },
    {
        question: "Q9: In 2018, walmart accquired how much stakes in Flipkart?",
        a: "82% stakes for $17 billion",
        b: "77% stakes for &16 billion",
        c: "69% stakes for $14 billion",
        d: "51% stakes for $12.5 billion",
        ans: "ans2"
    },
    {
        question: "Q10: Whats is Paytm's valuation?",
        a: "$65 billion",
        b: "$50 billion",
        c: "$27 billion",
        d: "$30 billion",
        ans: "ans4"
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