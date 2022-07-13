const adviceId = document.getElementById("adviceId");
const quote = document.querySelector("blockquote p");
const btn = document.querySelector("button");

async function fetchQuote() {
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        return data;
    } catch (err) {
        adviceId.textContent = `Advice #`;
        quote.textContent = `Whoops, error occurred... Refresh the page👍`;
    }
};

function insertQuote(data) {
    const { id, advice } = data.slip;
    adviceId.textContent = `Advice #${id}`;
    quote.textContent = `“${advice}”`;
};

async function fetchAndInsert() {
    const data = await fetchQuote();
    insertQuote(data);
};

window.addEventListener("DOMContentLoaded", fetchQuote);

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.children[0].classList.add("animate");
    setTimeout(() => {
        btn.children[0].classList.remove("animate");
    }, 1000);
    fetchAndInsert();
});