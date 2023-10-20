
const blockQuoteEle = document.getElementById('quote');
const authorName = document.getElementById('author');
const btn = document.querySelector('button');

const api_url = "https://api.quotable.io/random";

btn.addEventListener('click', ()=>{

    async function getQuote(url){
        const resposne = await fetch(url);
        const data = await resposne.json();
        console.log(data);
        blockQuoteEle.innerHTML = data.content;
        authorName.innerHTML = data.author;
    }
    getQuote(api_url);
})
