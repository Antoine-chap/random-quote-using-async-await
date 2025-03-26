async function fetchQuote() {
try {
    const response = await fetch('https://thatsthespir.it/api');
    if (!response.ok) {
        throw new Error('Erreur réseau');
    }
    const data = await response.json();
    console.log(data);
    return (data);
    } catch (error) {
    console.error('Problème :', error);
    }
}
    
const button = document.getElementById('button');
button.addEventListener('click', async() => {
    const result = await fetchQuote();

    const selectQuote = document.querySelector('blockquote');
    selectQuote.innerHTML = JSON.stringify(`${result.quote}`);

    const selectimg = document.getElementById('image');
    selectimg.src = result.photo;
    selectimg.alt = result.author;

    const selectName = document.getElementById('nameId');
    selectName.textContent = JSON.stringify(`${result.author}`);

    const selectNumberQuote = document.getElementById('numberQuote');
    selectNumberQuote.textContent = JSON.stringify(`${result.total_quotes}`);
});
