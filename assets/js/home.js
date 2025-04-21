export class Home{
    constructor(ui){
        this.ui = ui;
    }

    renderGamesByCategory(category){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
        .then(games =>{
            loader.classList.add('d-none');
            this.ui.displayGames(games)
        })
        .catch(error =>{
            loader.classList.add('d-none');
            console.error(error.message)
        });
    }
}