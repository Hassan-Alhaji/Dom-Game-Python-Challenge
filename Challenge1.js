

var diceSum, activePlayer, scores,activeGame;
diceSum= 0;
activePlayer =0;
scores = [0,0];
activeGame =true;



document.querySelector('.btn-roll').addEventListener('click',function(){
  if (activeGame){
    var dice = Math.floor((Math.random() * 6) + 1);
    console.log(dice);

    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceSum = diceSum + dice;

    if(dice !== 1){
        document.querySelector('#current-' + activePlayer).textContent = diceSum;
    }
    else{
      nextPlayer();
    }
  }
})

document.querySelector('.btn-hold').addEventListener('click',function (){
  if(activeGame){
    scores[activePlayer] += diceSum;
    document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer] ;

    if(scores[activePlayer] >= 20){
      document.querySelector('#name-' + activePlayer).textContent ="Winner!";
      document.querySelector('.dice').style.display = "none";
      activeGame =false;
    }
    else{
        nextPlayer();
    }
  }
})

document.querySelector('.btn-new').addEventListener('click',function (){
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#name-0').textContent ="PLAYER 1";
  document.querySelector('#name-1').textContent ="PLAYER 2";
  document.querySelector('.dice').style.display = "block";
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  diceSum= 0;
  activePlayer =0;
  scores = [0,0];
  activeGame =true;
})

function nextPlayer(){
  if (activePlayer === 0)
  {
    activePlayer =1;
    document.querySelector('#current-0').textContent = 0;
  }
  else{
    activePlayer =0;
    document.querySelector('#current-1').textContent = 0;
  }
  diceSum =0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
