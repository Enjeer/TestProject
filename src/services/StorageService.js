export class StorageService {
    constructor(key) {
        this.key = key;
    }

    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    remove(data) {
        localStorage.removeItem(this.key)
    }

    load() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }
}
