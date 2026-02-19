export class LibController {
  constructor({ searchModel, favouritesModel, themeModel, searchView, favouritesView, themeView }) {
    this.searchModel = searchModel;
    this.favouritesModel = favouritesModel;
    this.themeModel = themeModel;
    this.searchView = searchView;
    this.favouritesView = favouritesView;
    this.themeView = themeView;

    this.searchView.bindSearch(this.handleSearch);
    this.searchView.debounceSearch(this.handleSearch);
    this.searchView.bindFavouritesToggle(this.toggleFavourite);
    this.favouritesView.bindFavouritesToggle(this.toggleFavourite);
    this.favouritesView.bindVisibilityToggle(this.toggleFavouritesVisibility);
    this.themeView.bindToggleTheme(this.toggleTheme)

    this.updateFavouritesView();
  }

  toggleTheme = () => {
    const theme = this.themeModel.getTheme();
    if (theme){
        this.themeModel.toggle(theme);
        this.themeView.themeChange(theme);
    }
  }

  handleSearch = async (query) => {
    try{
      if (!query){
        this.searchView.setState('emptyRequest');
        return;
      }

      this.searchView.setState('loading');

      const results = await this.searchModel.search(query);

      if (!Array.isArray(results) || results.length === 0) {
        this.searchView.setState('notFound');
        return;
      }
      
      const checkedResults = this.checkFavourites(results);
      this.searchView.setState('success', checkedResults);

    } catch(err) {
      console.log(err);
      this.searchView.setState('err');
    }
  }

  checkFavourites = (results) =>
    results.map(result => ({
      ...result,
      favouriteAdded: this.favouritesModel.compare(result)
    }));

  toggleFavourite = (item) => {
    this.favouritesModel.toggle(item);
    const state = this.favouritesModel.compare(item);
    
    this.updateFavouritesView();

    this.searchView.updateFavouriteState(item.key, state);
  }

  toggleFavouritesVisibility = () => {
    this.favouritesView.toggleHiddenState();
  }

  updateFavouritesView() {
    this.favouritesView.render(this.favouritesModel.getAll());
  }
}