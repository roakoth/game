const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let wordqueue;
let highlightPosition;

function startGame() {
   console.log("Game started!");
   targetWord = "typeme";

   let quoteText = "type me";
wordQueue = quoteText.split(' '); // ['type','me']
quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

highlightPosition = 0;
quote.childNodes[highlightPosition].className = 'highlight';


}

function checkInput() {
    const currentWord = wordQueue[0];
    const typedValue = input.value.trim();

    if(currentWord !== typedValue){
        input.className = currentWord.startsWith(typedValue) ? '':'error'
        return;
    }
    wordQueue.shift(); //shift removes first item from the array, making next item "currentItem"
    input.value = ''; //empty string

    
 }

start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);
