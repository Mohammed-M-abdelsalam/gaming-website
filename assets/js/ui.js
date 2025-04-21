export class UI{

    clearElement(elemnt){
        elemnt.innerHTML = '';
    }
    displayGames(games){
        const root = document.querySelector('#root');
        const fragment = document.createDocumentFragment();
        root.innerHTML = '';
        games.forEach(game => {
            const div = document.createElement('div');
            div.innerHTML = `    
            <div data-id="${game.id}" class="games-card card h-100 shadow rounded-3 p-3 position-relative text-white border border-black" style="background-color: #272b30;">
                <div style="min-height: 100px;">
                    <img src="${game.thumbnail}" class="w-100 rounded-2" alt="${game.title}">
                </div>
                <div class="card-body">
                    <div class="py-3">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text fw-bold" style="color:#787a7d";>${game.short_description.slice(0, 40)}...</p>
                        <button target="_blank" class="play-btn btn text-white" style="border:1px solid #e4ae0b">Play Now</button>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center border border-black w-100 position-absolute start-0 bottom-0">
                    <p class="m-0 px-2 fw-bold rounded" style="font-size:0.8rem; background: #363739">${game.genre}</p>
                    <p class="m-0 px-2 fw-bold rounded" style="font-size:0.8rem; background: #363739">${game.platform}</p>
                </div>
            </div>
            `;
            fragment.appendChild(div);
        });
        root.appendChild(fragment);
    }

    displayGameDetails(game){
        const home = document.querySelector('#home');
        const gameDetails = document.querySelector('#game-details');
        const root = document.querySelector('.details-root');
        home.classList.add('d-none');
        gameDetails.classList.remove('d-none');
        root.innerHTML = `    
            <div style="min-height: 100px;">
                <img src="${game.thumbnail}" class="w-100 rounded-2" alt="${game.title}">
            </div>
            <div class="card-body">
                <div class="py-3">
                    <h2 class="card-title mb-3 fs-1 fw-bold">${game.title}</h2>
                    <p class="fw-bold">Category: <span class="fw-normal ms-2 bg-primary px-1 rounded">${game.genre}</span></p>
                    <p class="fw-bold">Platform:<span class="fw-normal ms-2 bg-primary px-1 rounded">${game.platform}</span></p>
                    <p class="fw-bold">status: <span class="fw-normal ms-2 bg-primary px-1 rounded">${game.status}</span></p>
                    <p class="card-text">${game.description}</p>
                    <a href="${game.game_url}" target="_blank" class="play-btn btn text-white" style="border:1px solid #e4ae0b">Play Now</a>
                </div>
            </div>
        `;
        scrollTo(0, 0);
    }

    closeDetailsSection(){
        const home = document.querySelector('#home');
        const gameDetails = document.querySelector('#game-details');
        home.classList.remove('d-none');
        gameDetails.classList.add('d-none');
    }
}