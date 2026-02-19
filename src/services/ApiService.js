export class ApiService {
    async searchBooks(query) {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

        try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
            "User-Agent": "MyLibraryProject (wallesalex205@gmail.com)"
            }
        });

        const data = await res.json();

        return data.docs;

        } catch (error) {
        console.error('Error fetching books:', error);
        return [];
        }
    }
}
