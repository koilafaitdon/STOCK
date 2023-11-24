// test.js
fetch("https://fruityblox.com/stock", {
    method: "GET",
    mode: "cors", 
})
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const containerDiv = doc.querySelector('div.container-fluid');

        if (containerDiv) {
            const page = document.getElementById("class");
            page.innerHTML = containerDiv.innerHTML;
            console.log(containerDiv.innerHTML);
        } else {
            console.error('La balise <div class="container-fluid"> n\'a pas été trouvée.');
        }
    })
    .catch(error => console.error("Une erreur s'est produite : ", error));
