const quizDB = [
    {
        question: "Q1: Google was founded by?",
        a: "Larry Page - Sundar Pichai",
        b: "Sergey Brin - Mark Zukerberg",
        c: "Larry page - Serget Brin",
        d: "Elon Musk - Sundar Pichai",
        ans: "ans3"
    },
    {
        question: "Q2: Google was founded in which year?",
        a: "1988",
        b: "1999",
        c: "1989",
        d: "1998",
        ans: "ans4"
    },
    {
        question: "Q3: 'FANG' stands for?",
        a: "Facebook, Alibaba, Nokia, Google",
        b: "Facebook, Amazon, Netflix, Google",
        c: "Facebook, Amazon, Nokia, Google",
        d: "Facebook, Alibaba, Netflix, Google",
        ans: "ans2"
    },
    {
        question: "Q4: Netflix was founded by?",
        a: "Reed Hasting - Marc Randolph",
        b: "Reed Hasting - Bill Gates",
        c: "Bill Gates - Henry Cavil",
        d: "Steve Rogers - Tony Stark",
        ans: "ans1"
    },
    {
        question: "Q5: Biggest Tech Company in terms of revenue:",
        a: "Amazon",
        b: "Apple",
        c: "Samsung",
        d: "Microsoft",
        ans: "ans1"
    },
    {
        question: "Q6: Headquarters of Amazon are situated at:",
        a: "California",
        b: "Washington",
        c: "Canada",
        d: "Hong-Kong",
        ans: "ans2"
    },
    {
        question: "Q7: Which one of these is not a product-based company?",
        a: "Oracle",
        b: "TCS",
        c: "Samsung",
        d: "Adobe",
        ans: "ans2"
    },
    {
        question: "Q8: Largest IT-company based in India:",
        a: "Tata Consultancy services",
        b: "Infosys",
        c: "HCL Technologies",
        d: "Wipro",
        ans: "ans1"
    },
    {
        question: "Q9: Starlink is a:",
        a: "Electric Car Manufacturing company",
        b: "Satellite Internet constellation",
        c: "Rocket designing comapany",
        d: "Processor making company",
        ans: "ans2"
    },
    {
        question: "Q10: Which of these company, is not founded by Elon Musk?",
        a: "Tesla",
        b: "Paypal",
        c: "Alphabet",
        d: "Paypal",
        ans: "ansc"
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

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>you scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> PLAY AGAIN</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});