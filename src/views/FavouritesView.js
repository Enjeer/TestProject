// FavouritesView is responsible for rendering favourites UI
export class FavouritesView {
    constructor(container) {
        this.container = container;
        this.visibilityButton = document.querySelector('#favsHideBtn');
        if (!this.container || !this.visibilityButton) console.error('Favourites items not found!');
    }
    
    bindVisibilityToggle(handler) {
        this.visibilityButton.addEventListener('click', handler);
    }

    toggleHiddenState() {
        const booksContainer = document.querySelector('.viewer__books');
        booksContainer.classList.toggle('favourites-hidden');
    }

    bindFavouritesToggle = (handler)=> {
        this.container.addEventListener('click', (e)=>{
            if(e.target.classList.contains('item__delete-button')){
                const data = {
                    key: '',
                    title: '',
                    author: '',
                    cover_l: '',
                }
                const card = e.target.closest('.favourites__item');
                data.key = card.getAttribute('data-id');
                data.title = card.querySelector('.item__title').textContent;
                data.author = card.querySelector('.item__author').textContent;
                data.cover_l = card.querySelector('.item__cover').src;
                handler(data);
            }
        });
    }

    render(items) {
        if (!this.container) return;
        if (!Array.isArray(items)) items = [];
        this.container.innerHTML = items.map((item) => `
            <div class="favourites__item" data-id="${item.key}">
                <img class="item__cover" src="${item.cover_l}" alt="">
                <div class="item__credentials">
                    <span class="item__title">${item.title}</span>
                    <span class="item__author">${item.author}</span>
                </div>
                <button type="button" class="item__delete-button"></button>
            </div>
            `
        ).join('');
    }
}
