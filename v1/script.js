
document.addEventListener("DOMContentLoaded", function(){

    fetch('./JSON/1.json')

        .then(response => response.json())
        .then(data => {
            
            let tesla = '';

            data.NikolaTesla.forEach(nikola => {
                tesla += ` <img src="${nikola.Image}"> `;
            });
            document.getElementById('1').innerHTML = tesla;
        })
        .catch(error = console.error('Error to load the images: ', error));

});

document.addEventListener("DOMContentLoaded", function(){

    fetch('./JSON/2.json')

        .then(response => response.json())
        .then(data => {
        
            let tesla = '';
    
            data.NikolaTesla.forEach(nikola => {
                tesla += ` <img src="${nikola.Image}"> `;
            });
            document.getElementById('2').innerHTML = tesla;
        })
        .catch(error = console.error('Error to load the images: ', error));
});