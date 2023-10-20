
fetch('cachorros.json')
    .then(response => response.json())
    .then(data => {

        const comicList = document.querySelector('.comic-list');

        data.cachorros.forEach(cachorro => {
            const listItem = document.createElement('li');

            listItem.innerHTML = `<img src="${cachorro.imagem}" alt="${cachorro.titulo}">`;
            listItem.addEventListener('click', () => showComicDetails(cachorro));
            comicList.appendChild(listItem);
        });
    });

function showComicDetails (cachorro) {

    const modal = document.querySelector('#comic-modal');

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${cachorro.titulo}</h2>
            p>${cachorro.descricao}</p>
            <img src="${cachorro.imagem}" alt="${cachorro.titulo}">
            <button id="close-modal">Fechar</button>
        </div>
    `;

    modal.style.display = 'flex';

    const closeButton = document.getElementById('close-modal');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

const modal = document.querySelector('#comic-modal');

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});