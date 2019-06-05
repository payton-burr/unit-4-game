// Globals *******************************************

let numberChosen = Math.floor(Math.random() * (120 - 19 + 1) + 19);

let num1 = Math.floor(Math.random() * 12 + 1);
let num2 = Math.floor(Math.random() * 12 + 1);
let num3 = Math.floor(Math.random() * 12 + 1);
let num4 = Math.floor(Math.random() * 12 + 1);

let wins = 0;
let loss = 0;
let scoreCount = 0;
let counter = 0;

$('.randomNumber').text(numberChosen);
$('.userScore').text(counter);


// Function **************************************************************

function reset() {
    numberChosen = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    scoreCount = 0;
    counter = 0;

$('.randomNumber').text(numberChosen);
console.log(numberChosen);
$('.userScore').text(counter);

}



// Gem on Clicks *******************************************

$('#gemOne').on('click', function() {
    counter = counter + num1;
    $('.userScore').text(counter);

    if (counter == numberChosen) {
        alert('You win!');
        wins++
        $('.winCount').text('Wins: ' + ' ' + wins);
        reset();
    } else if (counter > numberChosen) {
        alert('You lose');
        loss++
        $('.lossCount').text('Losses:' + ' ' + loss);
        reset();
    }
})

$('#gemTwo').on('click', function() {
    counter = counter + num2;
    $('.userScore').text(counter);
    
    if (counter == numberChosen) {
        alert('You win!');
        wins++
        $('.winCount').text('Wins: ' + ' ' + wins);
        reset();
    } else if (counter > numberChosen) {
        alert('You lose');
        loss++
        $('.lossCount').text('Losses:' + ' ' + loss);
        reset();
    }
})

$('#gemThree').on('click', function() {
    counter = counter + num3;
    $('.userScore').text(counter);

    if (counter == numberChosen) {
        alert('You win!');
        wins++
        $('.winCount').text('Wins: ' + ' ' + wins);
        reset();
    } else if (counter > numberChosen) {
        alert('You lose');
        loss++
        $('.lossCount').text('Losses:' + ' ' + loss);
        reset();
    }
})

$('#gemFour').on('click', function() {
    counter = counter + num4;
    $('.userScore').text(counter);

    if (counter == numberChosen) {
        alert('You win!');
        wins++
        $('.winCount').text('Wins: ' + ' ' + wins);
        reset();
    } else if (counter > numberChosen) {
        alert('You lose');
        loss++
        $('.lossCount').text('Losses:' + ' ' + loss);
        reset();
    }
})
