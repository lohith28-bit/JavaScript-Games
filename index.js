//CHALLENGE 1
function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + " days old.");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}

//CHALLENGE 2
function catGen() {
    var im = document.createElement('img');
    im.setAttribute('src', 'http://thecatapi.com/api/images/get?format=src&type=gif');
    document.getElementById('flex-cat-gen').appendChild(im);
}

//CHALLENGE 3
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranToRpsInt());
    let result = decisionWinner(humanChoice, botChoice);
    let message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function ranToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}
function decisionWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You won!', 'color': 'green' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage1) {
    var imageData = {
        'rock': document.getElementById('rock'),
        'paper': document.getElementById('paper'),
        'scissor': document.getElementById('scissor')
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    comp_img_tag = imageData[botImageChoice];
    human_img_tag = imageData[humanImageChoice];
    if (comp_img_tag != human_img_tag) {
        var comp_h5 = document.createElement('h5');
        var t1 = document.createTextNode('computer choose');
        comp_h5.setAttribute('class', 'label_img');
        comp_h5.appendChild(t1);
        document.getElementById('flex-box-rps-div').appendChild(comp_h5).appendChild(comp_img_tag);
    }
    var comment = document.createTextNode(finalMessage1['message']);
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'result');
    h1.appendChild(comment);
    document.getElementById('flex-box-rps-div').appendChild(h1);
    if (comp_img_tag != human_img_tag) {
        var human_h5 = document.createElement('h5');
        var t2 = document.createTextNode('You choose');
        human_h5.setAttribute('class', 'label_img');
        human_h5.appendChild(t2);
        document.getElementById('flex-box-rps-div').appendChild(human_h5).appendChild(human_img_tag);
    }
    else {
        var tie_h5 = document.createElement('h5');
        var t2 = document.createTextNode('Both you and computer choose the same');
        tie_h5.setAttribute('class', 'label_img');
        tie_h5.appendChild(t2);
        document.getElementById('flex-box-rps-div').appendChild(tie_h5).appendChild(human_img_tag);
    }
    comp_id = comp_img_tag.id;
    result_id = h1.id;
    human_id = human_img_tag.id;
    var final_human, final_comp;
    if (human_id == 'rock') {
        final_human = document.getElementById('rock');
    }
    else if (human_id == 'paper') {
        final_human = document.getElementById('paper');
    }
    else {
        final_human = document.getElementById('scissor');
    }
    if (comp_id == 'rock') {
        final_comp = document.getElementById('rock');
    }
    else if (comp_id == 'paper') {
        final_comp = document.getElementById('paper');
    }
    else {
        final_comp = document.getElementById('scissor');
    }
    if (finalMessage1['message'] == "You lost!") {
        final_human.setAttribute('class', 'red');
        var to = document.getElementById('result');
        to.setAttribute('class', 'red');
        final_comp.setAttribute('class', 'red');
    }
    else if (finalMessage1['message'] == "You tied!") {
        final_human.setAttribute('class', 'yellow');
        var to = document.getElementById('result');
        to.setAttribute('class', 'yellow');
        final_comp.setAttribute('class', 'yellow');
    }
    else {
        final_human.setAttribute('class', 'green');
        var to = document.getElementById('result');
        to.setAttribute('class', 'green');
        final_comp.setAttribute('class', 'green');
    }
}
function resetRps() {
    var rerun = document.getElementById('flex-box-rps-div')
    rerun.innerHTML = "<img id='rock' class='initial' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfRC7rLeLulUM7xbnR9ta5MH8B6iUa9-GwA&usqp=CAU' alt='rock' width='150px' height='105px' onclick='rpsGame(this)'> <img id='paper' class='initial' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZmnwVvxLwR6OqXsYaq5tazmjBSJiAAzoSG6AeNntK0uERxLHUEhRIForezh2l1NW6ik&usqp=CAU' alt='paper' width='110px' height='105px'onclick='rpsGame(this)'> <img id='scissor' class='initial' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dPFA3CaidURQKVx9wfJILQ4DSNsdaIk4kg&usqp=CAU' alt='Sicissor' width='120px' height='105px' onclick='rpsGame(this)'>";
}

//CHALENGE 4
function changeColor() {
    var sel = document.getElementById("choose_one");
    var val = sel.options[sel.selectedIndex].value;
    var allColors = ['blue', 'red', 'yellow', 'green'];
    var ran_num = new Array();
    var ran_color = new Array();
    var allow = true;
    if (val == 'random') {
        for (var i = 0; i <= 3; i++) {
            ran_num[i] = Math.floor(Math.random() * 4);
            if (i > 0) {
                for (var j = i - 1; j >= 0; j--) {
                    if (ran_num[j] == ran_num[i]) {
                        i--;
                        break;
                    }
                }
                if (j == 0 && i > 1) {
                    allow = true;
                }
            }
            if (allow) {
                ran_color[i] = allColors[ran_num[i]];
                if (ran_color[i] == "red") {
                    if (i == 0) {
                        document.getElementById('facebook').setAttribute('class', 'red box');
                    }
                    else if (i == 1) {
                        document.getElementById('google').setAttribute('class', 'red box');
                    }
                    else if (i == 2) {
                        document.getElementById('yahoo').setAttribute('class', 'red box');
                    }
                    else {
                        document.getElementById('wee').setAttribute('class', 'red box');
                    }
                }
                if (ran_color[i] == "blue") {
                    if (i == 0) {
                        document.getElementById('facebook').setAttribute('class', 'blue box');
                    }
                    else if (i == 1) {
                        document.getElementById('google').setAttribute('class', 'blue box');
                    }
                    else if (i == 2) {
                        document.getElementById('yahoo').setAttribute('class', 'blue box');
                    }
                    else {
                        document.getElementById('wee').setAttribute('class', 'blue box');
                    }
                }
                if (ran_color[i] == "green") {
                    if (i == 0) {
                        document.getElementById('facebook').setAttribute('class', 'green box');
                    }
                    else if (i == 1) {
                        document.getElementById('google').setAttribute('class', 'green box');
                    }
                    else if (i == 2) {
                        document.getElementById('yahoo').setAttribute('class', 'green box');
                    }
                    else if (i == 3) {
                        document.getElementById('wee').setAttribute('class', 'green box');
                    }
                }
                if (ran_color[i] == "yellow") {
                    if (i == 0) {
                        document.getElementById('facebook').setAttribute('class', 'yellow box');
                    }
                    else if (i == 1) {
                        document.getElementById('google').setAttribute('class', 'yellow box');
                    }
                    else if (i == 2) {
                        document.getElementById('yahoo').setAttribute('class', 'yellow box');
                    }
                    else if (i == 3) {
                        document.getElementById('wee').setAttribute('class', 'yellow box');
                    }
                }
            }

        }
        allow = false;
    }
    if (val == "red") {
        document.getElementById('facebook').setAttribute('class', 'red box');
        document.getElementById('google').setAttribute('class', 'red box');
        document.getElementById('yahoo').setAttribute('class', 'red box');
        document.getElementById('wee').setAttribute('class', 'red box');
    }
    if (val == "blue") {
        document.getElementById('facebook').setAttribute('class', 'blue box');
        document.getElementById('google').setAttribute('class', 'blue box');
        document.getElementById('yahoo').setAttribute('class', 'blue box');
        document.getElementById('wee').setAttribute('class', 'blue box');
    }
    if (val == "green") {
        document.getElementById('facebook').setAttribute('class', 'green box');
        document.getElementById('google').setAttribute('class', 'green box');
        document.getElementById('yahoo').setAttribute('class', 'green box');
        document.getElementById('wee').setAttribute('class', 'green box');
    }
    if (val == "yellow") {
        document.getElementById('facebook').setAttribute('class', 'yellow box');
        document.getElementById('google').setAttribute('class', 'yellow box');
        document.getElementById('yahoo').setAttribute('class', 'yellow box');
        document.getElementById('wee').setAttribute('class', 'yellow box');
    }
    if (val == 'reset') {
        document.getElementById('facebook').setAttribute('class', 'blue box');
        document.getElementById('google').setAttribute('class', 'red box');
        document.getElementById('yahoo').setAttribute('class', 'yellow box');
        document.getElementById('wee').setAttribute('class', 'green box');
    }
}


//Challenge 5
let blackjackGame ={
    'you': {
        'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0
    },
    'dealer': {
        'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0
    },
    'cards': ['2', '3', '4', '5', '6', '7','8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {
        '2': 2, '3': 3, '4': 4, '5':5, '6':6, '7':7, '8':8,'9' :9, '10':10, 'K':10,'J': 10 ,'Q' : 10 ,A: [1 , 11]},
    'wins': 0 ,
    'losses': 0 ,
    'draws' : 0 ,
    'isStand' : false,
    'turnOver' : false,
}
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);

function blackjackHit() {
    if(blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function blackjackDeal(){
    if(blackjackGame['turnOver'] === true){
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0 ; i< yourImages.length ; i++) {
            yourImages[i].remove();
        }
        for(let i=0 ; i< dealerImages.length ; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = 'black';
        blackjackGame['turnOver'] = false;
    }
}

function blackjackStand(){
    blackjackGame['isStand'] = true;
    dealerLogic();
}

function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        // cardImage.setAttribute('height','90vw');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function updateScore(card,activePlayer){
    if( card === 'A'){
        if( activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 20){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    while(blackjackGame['turnOver'] === false){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
        if(DEALER['score'] > YOU['score'] || (YOU['score'] > 21 && DEALER['score'] > 0) || (YOU['score'] + DEALER['score'] == 42)){
            blackjackGame['turnOver'] = true;
            showResult(computeWinner());
        }
    }
}

function computeWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            winner = DEALER;
        }
    }else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        winner = DEALER;
    }
    return winner;
}

function showResult(winner){
    if(blackjackGame['turnOver'] === true){
        let message, messageColor; ;
        if(winner === YOU){
            blackjackGame['wins']++;
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }
        else if(winner === DEALER){
            blackjackGame['losses']++;
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else{
            message = 'You drew!';
            blackjackGame['draws']++;
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}