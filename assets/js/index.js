import { UI } from "./ui.js";
import { Home } from "./home.js";
import { Details } from "./details.js";

const home = new Home(new UI());
const details = new Details(new UI());
const navbar = document.querySelector('#navbar');
const root = document.querySelector('#root');
const closeDetailsBtn = document.querySelector('.close-details-btn');
navbar.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.dataset.category){
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');    
        home.renderGamesByCategory(e.target.dataset.category);
    }
})

root.addEventListener('click', function(e) {
    e.preventDefault();
    const card = e.target.closest('.card');
    if(card.dataset.id){
        details.renderGameDetails(card.dataset.id);
    }
});

closeDetailsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    details.closeDetailsSection();
});

home.renderGamesByCategory('mmorpg');
