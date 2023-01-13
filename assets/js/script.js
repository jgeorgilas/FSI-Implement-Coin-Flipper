// Declare any global variables we need keep track

let numberOfHeads = 0
let numberOfTails = 0
let total = 0
let pctHeads = 0
let pctTails = 0

//DOM Elements (below ia a list of elements that change status)
const flipButton = document.querySelector('#flip');
const clearButton = document.querySelector('#clear');
const statusHeader = document.querySelector('.message-container');
const pennyImage = document.querySelector('img');
const headsCell = document.querySelector('#heads');
const tailsCell = document.querySelector('#tails');
const headsPctCell = document.querySelector('#heads-percent');
const tailsPctCell = document.querySelector('#tails-percent');

document.addEventListener('DOMContentLoaded', function () {


    //Flip Button Handler
    flipButton.addEventListener('click', function(e) {
        console.log('Coin Tossed')
        total += 1;
        const result = Math.round(Math.random() * 100);
        console.log("RNG with result", result)


        //heads = 50-100
        if (result > 50) {
            numberOfHeads += 1;
            statusHeader.textContent = 'you flipped Heads';
            pennyImage.src = "./assets/images/penny-heads.jpg";
            pennyImage.alt = 'A penny is shown face up';
        } 
        // Tails = 0-50
        else {
            numberOfTails += 1;
            statusHeader.textContent = 'you flipped tails';
            pennyImage.src = './assets/images/penny-tails.jpg';
            pennyImage.alt = 'A penny is shown face down';
        }
        console.log("Heads",numberOfHeads,"Tails", numberOfTails)

        // Section Below will Calculate Percentages
        pctHeads = Math.round ((numberOfHeads / total) * 100);
        pctTails = Math.round ((numberOfTails / total) * 100);
        console.log("% Heads", pctHeads,"% Tails", pctTails)
        
        //Results on Scoreboard
        headsCell.textContent = `${numberOfHeads}`
        headsPctCell.textContent = `${pctHeads}%`
        tailsCell.textContent =`${numberOfTails}`
        tailsPctCell.textContent = `${pctTails}%`
            
     })
        //Section will Clear Page
        clearButton.addEventListener('click', function(e) {
            console.log('Statistics have been cleared');
            numberOfHeads = 0;
            numberOfTails = 0;
            total = 0;
            pctHeads = 0;
            pctTails = 0;

            headsCell.textContent = `${numberOfHeads}`
            tailsCell.textContent = `${numberOfTails}`
            headsPctCell.textContent = `${pctHeads}`
            tailsPctCell.textContent = `${pctTails}`
            statusHeader.textContext  = `${'Lets Roll'}`

            pennyImage.src = "./assets/images/penny-tails.jpg";
            pennyImage.alt = 'A penny is shown face up';

         });
})