// FavouritesModel handles business logic for favourites list
export class FavouritesModel {
    constructor(storageService) {
        this.storageService = storageService;
        this.items = this.storageService.load() || [];
    }

    compare(item){
        return this.items.some(element => element.key === item.key);
    }

    toggle(item){
        if(this.compare(item)){
            this.remove(item.key);
            return false;
        }
        this.add(item);
        return true;
    }

    add(item) {
        this.items.push(item);
        this.storageService.save(this.items);

        return true;
    }

    remove(id) {
        this.items = this.items.filter(i => i.key !== id);
        this.storageService.save(this.items);
    }

    getAll() {
        return this.items;
    }
}