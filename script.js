//start off by creating some variables to be able to interact 
//with the HTML content

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

//next you will need an array that stores all the quotes
//here we used an array as an object to store related info

const quotes = [{
    quote:'"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    person: 'Albert Einstein'
},  {
    quote: '"Be the change that you wish to see in the world."',
    person: 'Mahatma Gandhi' 
}, {
    quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."',
    person: 'Steve Jobs'
}
];

//Now we add an event listener on the button to generate a new quote
//You are able to define the cuntion within the event listener itself
btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})