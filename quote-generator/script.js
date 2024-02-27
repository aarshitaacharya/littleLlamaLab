const api_url ="https://api.quotable.io/random";
const content = document.querySelector(".quote-box blockquote");
const author = document.querySelector(".quote-box span");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    content.innerHTML = data.content;
    author.innerHTML = data.author;
 
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ content.innerHTML + " -- by "+ author.innerHTML, "Tweet Window", "width=600, height=300");
}