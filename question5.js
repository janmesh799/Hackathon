const quizDB = [
    {
        question: "Q1: What is the full form of 'PDA'?",
        a: "Personal Device Assistange",
        b: "Personal Digital Assistant",
        c: "Portable Digital Assistant",
        d: "Portable Assistance Device",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of 'FLOPS'?",
        a: "Floating Operations",
        b: "Floating Operations Per Second",
        c: "Formatting on Peer Sever",
        d: "File System Operations",
        ans: "ans2"
    },
    {
        question: "Q3: What is the full form of 'FORTRAN'?",
        a: "Foreign Translation",
        b: "Forex Transfer",
        c: "Formula Translation",
        d: "Formatting and Translating ",
        ans: "ans3"
    },
    {
        question: "Q4: What is the full form of 'COBOL'?",
        a: "Computer and Business Language",
        b: "Computer and Basic Operations Language",
        c: "Common Business Oriented Language",
        d: "Common Business Organised Language",
        ans: "ans3"
    },
    {
        question: "Q5: What is the full form of 'WAN'?",
        a: "Wide Access Network",
        b: "Wide Area Network",
        c: "Wifi Access Network",
        d: "Wifi Assigned Network",
        ans: "ans2"
    },
    {
        question: "Q6: What is the full form of 'MAN'?",
        a: "Machine Access Network",
        b: "Massive Array of Network",
        c: "Metropolitan Area Network",
        d: "Metro Area Network",
        ans: "ans3"
    },
    {
        question: "Q7: What is the full form of 'LDU'?",
        a: "Language and Development Unit",
        b: "Liquid Display Unit",
        c: "Liquid Display Unit",
        d: "Linear Design Unit",
        ans: "ans2"
    },
    {
        question: "Q8: What is the full form of 'GAIS'?",
        a: "Gateway Internet Access Service",
        b: "Global Internet Access Service",
        c: "Group for Assigned Internet Services",
        d: "Global Array of Internet Servers",
        ans: "ans1"
    },
    {
        question: "Q9: What is the full form of 'DTP'?",
        a: "Denial of Top Projects",
        b: "DeskTop Publishing",
        c: "Disk Terminal Project",
        d: "Development of Tranparent Pact",
        ans: "ans2"
    },
    {
        question: "Q10: What is the full form of 'FAT'?",
        a: "File Access Terminal",
        b: "File Access Technology",
        c: "First Time Action",
        d: "File Allocation Table",
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