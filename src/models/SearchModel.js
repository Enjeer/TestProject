export class SearchModel {
    constructor(apiService) {
        this.apiService = apiService;
        this.results = [];
    }

    async search(query) {
        try {
            const rawResults = await this.apiService.searchBooks(query);

            this.results = rawResults.map(book => ({
                key: book.key,
                title: book.title,
                author: book.author_name?.join(', ') ?? 'Неизвестен',
                cover_i: book.cover_i,
                first_publish_year: book.first_publish_year
            }));

            return this.results;
        } catch(error) {
            throw new Error('search failed with: ' + error)
        }
    }

    getResults() {
        return this.results;
    }
}
