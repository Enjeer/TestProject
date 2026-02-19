import { ApiService } from './services/ApiService.js';
import { StorageService } from './services/StorageService.js';
import { SearchModel } from './models/SearchModel.js';
import { ThemeModel } from './models/ThemeModel.js';
import { FavouritesModel } from './models/FavouritesModel.js';
import { SearchView } from './views/SearchView.js';
import { ThemeView } from './views/ThemeView.js';
import { FavouritesView } from './views/FavouritesView.js';
import { LibController } from './controllers/LibController.js';
import './styles/main.css';

const apiService = new ApiService();
const storageService = new StorageService('favourites');

const searchModel = new SearchModel(apiService);
const favouritesModel = new FavouritesModel(storageService);
const themeModel = new ThemeModel(storageService);

const searchView = new SearchView(document.getElementById('searchSection'));
const favouritesView = new FavouritesView(document.getElementById('favouritesResults'));
const themeView = new ThemeView(document.getElementById('body'));

new LibController({
  searchModel,
  favouritesModel,
  themeModel,
  searchView,
  favouritesView,
  themeView
});