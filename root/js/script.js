const quizDB = [
        
        {
            question: "Q1: What is Project Cheetah?",
            a: "An initiative to conserve tigers in India",
            b: "A project to reintroduce cheetahs in India",
            c: "A plan to protect Indian elephants",
            d: "A program to save the Asiatic lion",
            ans: "ans2"
        },
        
          {
            question: "Q2: Which country would the cheetahs be sourced from for the reintroduction program?",
            a: "USA",
            b: "Kenya",
            c: "Namibia",
            d: "Tanzania",
            ans: "ans3"
        },
        
          {
            question: "Q3: In which region of India would the cheetahs be reintroduced?",
            a: "Western Ghats",
            b: "Himalayas",
            c: "Deccan Plateau",
            d: "Indo-Gangetic Plain",
            ans: "ans3"
        },
        
        
         {
            question: "Q4: When was the proposal to reintroduce cheetahs in India first put forward?",
            a: "1980s",
            b: "1990s",
            c: "2000s",
            d: "2010s",
            ans: "ans1"
        },
        
        
          {
            question: "Q5: Why was the proposal to reintroduce cheetahs in India controversial?",
            a: "Cheetahs are not native to India",
            b: "Cheetahs are dangerous to humans",
            c: "The habitat in India may not be suitable for cheetahs",
            d: "The cost of the project is too high",
            ans: "ans3"
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

var  questionCount = 0;
var score = 0;
var ans;
        
const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

        loadQuestion();
        const getCheckAnswer = () => {
            let answer;
            
            answers.forEach((curAnsElem) => {
                if(curAnsElem.checked){
                    answer = curAnsElem.id;
                }
                
            });
            return answer;
            
        };

        const deselectAll = () => {
            answers.forEach((curAnsElem) => curAnsElem.checked = false);
        }

        submit.addEventListener('click',() =>{
            const checkedAnswer = getCheckAnswer();
            console.log(checkedAnswer);
            
            if(checkedAnswer === quizDB[questionCount].ans){
                score++;
            };
            
            questionCount++;
            
            deselectAll();
            
            if(questionCount < quizDB.length){
                loadQuestion();
            }else {
                
                showScore.innerHTML = `
                <h3> You scored ${score}/${quizDB.length}</h3>
                <button class="btn" onclick="location.reload()"> Play Again</button>
                ` ;
                showScore.classList.remove('showArea');

            }
        });


console.log(quizDB);
     console.log(questionCount);   
        
    