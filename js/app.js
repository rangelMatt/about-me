'use strict';

// console.log('Hello Goodbye');
let counter = 0;

let user = prompt('Hi! What is your name?');

alert(`Welcome ${user}, please answer the following questions with a yes/y or no/n answer`);

//1st Q
function answerOne(){
  let oneAnswer = prompt('Am I a Code Fellow?').toLowerCase();

  if(oneAnswer === 'yes' || oneAnswer === 'y') {
    // console.log('Yes I am!');
    alert('Yes I am!');
    counter++;
  } else if(oneAnswer === 'no' || oneAnswer === 'n') {
    // console.log('Try again');
    alert('Try again');
  } else {
    alert('Please respond with a yes or no');
  }
}
answerOne();

//2nd Q
function answerTwo(){
  let twoAnswer = prompt('Do I like sweets?').toLowerCase();

  if(twoAnswer === 'yes' || twoAnswer === 'y') {
    // console.log('Wierd, but, try again.');
    alert('Wierd, but, try again.');
  } else if(twoAnswer === 'no' || twoAnswer === 'n') {
    // console.log('That is correct. I do not like sweets as much as the other guy.');
    alert('That is correct. I do not like sweets as much as the other guy.');
    counter++;
  } else {
    alert('Please respond with a yes or no');
  }
}
answerTwo();

//3rd Q
function answerThird(){
  let thirdAnswer = prompt('Is it snowing?').toLowerCase();

  if(thirdAnswer === 'yes' || thirdAnswer === 'y') {
    // console.log('Not from where I can see.');
    alert('Not from where I can see.');
  } else if(thirdAnswer === 'no' || thirdAnswer === 'n') {
    // console.log('That is correct. No snow out my window.');
    alert('That is correct. No snow out my window.');
    counter++;
  } else {
    alert('Please respond with a yes or no');
  }
}
answerThird();

//4th Q
function answerFour(){
  let fourAnswer = prompt('Do you feel like your in Groundhogs Day?').toLowerCase();

  if(fourAnswer === 'yes' || fourAnswer === 'y') {
    // console.log('Yea, but thats ok');
    alert('Yea, but thats ok');
    counter++;
  } else if(fourAnswer === 'no' || fourAnswer === 'n') {
    // console.log('You sure?');
    alert('You sure?');
  } else {
    alert('Please respond with a yes or no');
  }
}
answerFour();

//5th Q
function answerFive(){
  let fiveAnswer = prompt('Are you staring at a monitor?').toLowerCase();

  if(fiveAnswer === 'yes' || fiveAnswer === 'y') {
    // console.log('Yup, learning things!');
    alert('Yup, learning things!');
    counter++;
  } else if(fiveAnswer === 'no' || fiveAnswer === 'n') {
    // console.log('How else do I do this great stuff?');
    alert('How else do I do this great stuff?');
  } else {
    alert('Please respond with a yes or no');
  }
}
answerFive();

//6th Q
function guessesClue(){
  let myNumber = 10;
  let clueGuesses = 4;

  //let foundNumber = false;
  //let userNumber = prompt('What number am I thinking of?');

  while(clueGuesses !== 0){
    let userNumber = prompt('What number am I thinking of?');
    if(parseInt(userNumber) === myNumber){
      // console.log('Congrats! You guessed the number!');
      alert('Congrats! You guessed the number!');
      counter++;
      break;
    } else if (userNumber < myNumber){
      // console.log('Your number is to low. Please try again.');
      alert('Your number is to low. Please try again.');
      clueGuesses--;
    } else if(userNumber > myNumber){
      // console.log('Your number is to high. Please try again.');
      alert('Your number is to high. Please try again.');
      clueGuesses--;
    } if(clueGuesses === 0){
      alert('Sorry, but the number I was thinking is 10.');
      break;
    }
  }
}
guessesClue();


//7th Q
function guessMovie(){
  let lastMovie = ['Moana', 'Cabin in the Woods', 'Encanto', 'Dont look up'];
  let movieGuesses = 6;
  let rightAnswer = false;
  /*
  while(movieGuesses){
    let userMovie = prompt('What\'s the last movie I watched?').toLowerCase();

    for(let i = 0; i < lastMovie.length; i++){
      if (userMovie === lastMovie[i]){
        alert(`You guessed right! ${userMovie} was one of the last movies I have watched in 3 months!`);
        rightAnswer = true;
        break;
      }
    }

    movieGuesses--;

  }
  */

  for(let j = 0; j < movieGuesses; j++){
    let userMovie = prompt('What\'s the last movie I watched?').toLowerCase();
    for(let i = 0; i < lastMovie.length; i++){
      if(userMovie === lastMovie[i]){
        rightAnswer = true;
        break;
      }
    }
    if (rightAnswer){
      console.log(`You guessed right! ${userMovie} was one of the last movies I have watched in 3 months!`);
      alert(`You guessed right! ${userMovie} was one of the last movies I have watched in 3 months!`);
      counter++;
      break;
    } else {
      alert('Nope, haven\'t seen it.');
    }
  }
  if(rightAnswer === false){
    alert(`Correct answers were: ${lastMovie[0]}, ${lastMovie[1]}, ${lastMovie[2]}, ${lastMovie[3]}.`);
  }
}
guessMovie();

//FINAL ALERT
alert(`Thanks for playing ${user}! I am a Code Fellow that does not like sweets. I live in a part in California that is not Snowing. This quarantine sometimes makes me feel like I'm in groundhogs day! But that's ok, because I get to learn cool things by interacting through my monitor!`);

alert(`Thanks ${user}! You have answered ${counter} questions correctly.`);


