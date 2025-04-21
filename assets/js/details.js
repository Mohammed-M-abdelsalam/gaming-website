export class Details{
    constructor(ui){
        this.ui = ui;
    }

    renderGameDetails(id){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2c7b57ee82msh490fc1bd4456f44p14c4e4jsnfc8398c6900a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const loader = document.querySelector('.loader');
        loader.classList.remove('d-none');
        fetch(url, options)
        .then(res => res.json())
        .then(game =>{
            loader.classList.add('d-none');
            this.ui.displayGameDetails(game)
        })
        .catch(error =>{
            loader.classList.add('d-none');
            console.error(error.message)
        });
    }

    closeDetailsSection(){
        this.ui.closeDetailsSection();
    }
}