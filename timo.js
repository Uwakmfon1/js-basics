
// const buttons = document.getElementById('buttons');

// const green = document.getElementById('green')
// const red = document.getElementById('red')
// const white = document.getElementById('white')
// const random = document.getElementById('random')

// const colorsArray = ["#FF5733","#33FF57","#3357FF","#FF33A8","#FFD700","#8A2BE2","#00CED1","#FF4500", "#708090","#6A5ACD"]

// function getRandomColor(){
//     const randomIndex = Math.floor(Math.random() * colorsArray.length);
//     return colorsArray[randomIndex];
// }


// green.addEventListener('click', ()=>document.body.style.backgroundColor = "green")
// red.addEventListener('click', ()=>document.body.style.backgroundColor = "red")
// white.addEventListener('click', ()=>document.body.style.backgroundColor = "white")
// random.addEventListener('click', ()=> {    const randomValue = getRandomColor();  return document.body.style.backgroundColor = `${randomValue}` })


// const checkBtn = document.getElementById('check');

// const input = document.getElementById('palindrome');

// /**
//  * get the word
//  * flip the word
//  * compare whether it matches
//  * return true or false
//  */

// function reverseStr(str){
//     return str.split("").reverse().join("");
    
// }

// function check(){
//     const value = input.value;
//     const reversedString = reverseStr(value)
//     if(reversedString === value)
//         alert('value is a palindrome')
//     else
//     alert('value is not a palindrome')
//     input.value = ""
// }


const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
];

const quoteContainer = document.getElementById('quotes')
const quoteButton = document.getElementById('quoteButton')

const IndexedQuote = new Set();

const array = document.getElementById('array');

function randomQuotes(){

    console.log(IndexedQuote.size)

    if(IndexedQuote.size >= quotes.length){
        IndexedQuote.clear()
    }

    while(true){
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];      
        if(IndexedQuote.has(randomQuote))  continue    
        
        IndexedQuote.add(randomQuote)
        quoteContainer.innerHTML = randomQuote

        
        console.log(IndexedQuote)

        IndexedQuote.forEach(element => {
            array.clear()
            array.innerHTML += `${element}<br>`;   //${i+1}.
        });
    

        break;
    }

    }
   




