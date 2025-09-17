let rollingDice = document.querySelector('.Roll-dice');
let dice = document.querySelector('.dice');
let showDice =  document.querySelector('.hidden');
let currentNumber = document.querySelector('.currentNumber');
let holdBtn = document.querySelector('.hold');
let score = document.querySelector('.score');

const rollingEvent = rollingDice.addEventListener('click',function(){
showDice.style.display = "block" ; 
let randomDice= Math.floor(Math.random()*6 )+1 ;
dice.src = `images/dice-${randomDice}.png`
console.log("working function");
 
if (randomDice != 1){
    let changecurrentNum =Number(currentNumber.textContent) ;
    let NewCurrentNum =changecurrentNum + randomDice;
    console.log (NewCurrentNum);
    let NewCurrentNumber = currentNumber.textContent = NewCurrentNum;
    console.log (NewCurrentNumber);

     
    const holdingNumber= holdBtn.addEventListener('click',()=>{
        score.textContent = NewCurrentNumber;
    })
    console.log(holdingNumber); 
}
else{
    currentNumber.textContent = 0 ;
}



});


