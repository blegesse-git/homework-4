// Declaring variables to hide after the start button is clicked
var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button")
var questionContainerElement = document.getElementById("question-container");
var main_page = document.querySelector(".main")
var timerEl = document.getElementById("timer")

// Once the start button is clicked, trigger the startGame function
startButton.addEventListener('click', startGame);

// Hides the start up screen and shows the questions
function startGame() {
    startButton.classList.add("hide");
    nextButton.classList.remove("hide");
    main_page.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    
    var startingSecond = 5
    let time = startingSecond 

    const countdownEl = document.getElementById("time")
    var myVar = setInterval(updateCountdown, 1000)
    function updateCountdown() {
        countdownEl.innerHTML = 'Time remaining: ' + time
        time--
        if (time == -1) {
            clearInterval(myVar)
        }
    }

}

// List of questions and answer choices
// Each set of questions and answers is in it's own list
var question_List = [["Which is not a JavaScript Data type?", 'Object', 'Number', 'Boolean', 'Function'],
                    ["Which company developed JavaScript?", 'Netscape', 'Microsoft', 'Google', 'Starbucks'],
                    ["Which one isn't looping structure in JavaScript?", 'For', 'Round', 'While', 'Do-while loops'],
                    ["Which of the following are pop up boxes available in JavaScript?", 'Alert', 'Prompt', 'Confirm', 'All of the above'],
                    ["_____ JavaScript is also called client-side JavaScript", 'Microsoft', 'LiveWire', 'Navigator', 'Native']];

// List of correct answers
// Used to compare users' answer to actual one
var answer_List = [question_List[0][4], question_List[1][1], question_List[2][2], question_List[3][4], question_List[4][3]];

// Declare variable for question placement
var questionElement = document.getElementById("question");

// Displays the question based off of count
// Loops through each answer choice starting at the first index
function setAnswer(count) {
    questionElement.innerText = question_List[count][0];

    for (index = 1; index < question_List[count].length; index++) {
        var element = document.getElementById("choice" + index);
        element.innerHTML = question_List[count][index];
    }
    score_result = checkAnswer(count, score)
}

// Checks if the user picked the correct answer 
// If they did, 1 is added to score
// After the guess is compared to the answer, nextQuestion is called.
function checkAnswer(count, score){
    document.getElementById("choice1").onclick = function() {
        console.log(choice1.innerHTML)
        if (choice1.innerHTML === answer_List[count]) {
            console.log("You picked the right answer!")
            score++
        }
        nextQuestion(count)
    }
    document.getElementById("choice2").onclick = function() {
        console.log(choice2.innerHTML)
        if (choice2.innerHTML === answer_List[count]) {
            console.log("You picked the right answer!")
            score++
        }
        nextQuestion(count)
    }
    document.getElementById("choice3").onclick = function() {
        console.log(choice3.innerHTML)
        if (choice3.innerHTML === answer_List[count]) {
            console.log("You picked the right answer!")
            score++
        }
        nextQuestion(count)
    }
    document.getElementById("choice4").onclick = function() {
        console.log(choice4.innerHTML)
        if (choice4.innerHTML === answer_List[count]) {
            console.log("You picked the right answer!")
            score++
        }
        nextQuestion(count)
    }
}

// Looks to see if count is greater than 4
// If it isn't, add 1 to count and call setAnswer again.
// If it is, return us back to the main menu.
function nextQuestion(count) {
    console.log(count)
    if (count < 4){
        nextButton.onclick = function() {
            count++
            setAnswer(count)
        }
    }
    else {
        startButton.classList.remove("hide");
        nextButton.classList.add("hide");
        main_page.classList.remove("hide");
        questionContainerElement.classList.add("hide");
    }
}

// Declare variables for each function
var score = 0;
var count = 0;

// Start the quiz here
setAnswer(count)