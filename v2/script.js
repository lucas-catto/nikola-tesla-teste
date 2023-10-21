
fetch('./JSON/1.json')
    .then(response => response.json())
    .then(data => {

        const itemList = document.querySelector('.item-list');

        data.NikolaTesla.forEach(nikola => {
            
            const item = document.createElement('li');

            item.innerHTML = `<img src="${ nikola.Image }">`;
            item.addEventListener('click', () => showDetails(nikola));

            itemList.appendChild(item);
        });
    });

fetch('./JSON/2.json')
    .then(response => response.json())
    .then(data => {

        const itemList = document.querySelector('.item-list');

        data.NikolaTesla.forEach(nikola => {
            
            const item = document.createElement('li');

            item.innerHTML = `<img src="${ nikola.Image }">`;
            item.addEventListener('click', () => showDetails(nikola));

            itemList.appendChild(item);
        });
    });


function showDetails (nikola) {

    const modal = document.querySelector('#details-modal');

    modal.innerHTML = `
        <div class="modal-content">
            <img src="${ nikola.Image  }">
            <p>${        nikola.Date   }</p>
            <p>${        nikola.Prompt }</p>
            <button id="close-modal">Close</button>
        </div>
    `;

    modal.style.display = 'flex';

    const closeButton = document.querySelector('#close-modal');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

const modal = document.querySelector('#details-modal');

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
