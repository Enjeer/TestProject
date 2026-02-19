// SearchView is responsible for rendering search UI and results

import defaultCover from '../../src/assets/media/default_cover.png';
export class SearchView {
    constructor(root) {
        this.root = root;
        this.searchInput = this.root.querySelector('#searchInput');
        this.searchBtn = this.root.querySelector('#searchBtn');
        this.resultsContainer = this.root.querySelector('#searchResults');
        this.errorMessageField = this.root.querySelector('#errorMessageField');
        this.defaultImageCover = defaultCover;

        if (!this.root || !this.searchInput || !this.searchBtn || !this.resultsContainer || !this.errorMessageField || !this.defaultImageCover) {
            console.error('SearchView elements not found!');
        }
    }

    debounceSearch(handler){
        let timeout;

        this.searchInput.addEventListener('input', ()=>{
            const query = this.searchInput.value;

            clearTimeout(timeout);

            timeout = setTimeout(()=>{
                handler(query);
            }, 600)
        });
    }

    bindSearch(handler) {
        this.searchBtn.addEventListener('click', () => {
            this.showMessage('', this.errorMessageField);

            const query = this.searchInput.value;
            handler(query);
        });
    }


    bindFavouritesToggle(handler) {
        this.resultsContainer.addEventListener('click', (e) => {
            
            if (e.target.classList.contains('result-add-to-favs')) {
                const data = {
                    key: '',
                    title: '',
                    author: '',
                    cover_l: '',
                }
                const card = e.target.closest('.results__result');
                data.key = card.getAttribute('data-id');
                data.title = card.querySelector('.result__title').textContent;
                data.author = card.querySelector('.result__author').textContent;
                data.cover_l = card.querySelector('.cover').src;
                handler(data);
            }
        });
    }

    // Handles UI states: loading, empty input, error, success
    setState = (state, data = null) =>{
        this.resultsContainer.innerHTML = '';

        if (this.errorMessageField) {
            this.errorMessageField.innerHTML = '';
        }

        switch (state) {

            case 'emptyRequest':
                if (this.errorMessageField){
                    this.errorMessageField.textContent = "How can we search if nothing's there?";
                }
                break

            case 'loading':
                this.renderLoading();
                break

            case 'notFound':
                if(this.errorMessageField){
                    this.errorMessageField.textContent = "Unfortunately we don't know about this book yet"
                }
                break

            case 'err':
                if (this.errorMessageField){
                    this.errorMessageField.textContent = 'Connection error';
                }
                break

            case 'success':
                this.renderResults(data);
                break;

        }
    }

    showMessage(msg, container){
        container.innerHTML = msg
    }

    renderLoading(){
        this.resultsContainer.innerHTML = '';

        const loadingStructure = `
            <div class="results__result loading">
                <div class="result__credentials">
                    <div class="loading__text-block"></div>
                    <div class="loading__text-block"></div>
                    <div class="loading__text-block"></div>
                </div>
            </div>
        `;
        for (let i = 0; i < 12; i++) {
            this.resultsContainer.innerHTML += loadingStructure;
        }
    }

    renderResults(results) {
        this.resultsContainer.innerHTML = results
        .map(b => `     <div class="results__result" data-id="${b.key}">
                            <div class="result__cover">
                                <img class="cover" src="${b.cover_i !== undefined ? `https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg` : this.defaultImageCover}" alt="cover">
                                <button type="button" class="result-add-to-favs ${b.favouriteAdded ? 'favourite' : ''}"></button>
                            </div>
                            <div class="result__credentials">
                                <span class="result__title">${b.title}</span>
                                <span class="result__author">${b.author}</span>
                                <span class="result__date-of-publish">${b.first_publish_year}</span>
                            </div>
                        </div>`)
        .join('');
    }

    updateFavouriteState(key, state) {
        const card = this.resultsContainer.querySelector(`[data-id="${key}"]`);
        if (!card) return;

        const btn = card.querySelector('.result-add-to-favs');

        if(state){
            btn.classList.add('favourite');
        }else{
            btn.classList.remove('favourite');
        }
    }
}