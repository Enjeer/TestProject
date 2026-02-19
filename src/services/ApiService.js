export class ApiService {
    async searchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    try {

        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response not ok');

        const data = await res.json();
        return data.docs || [];

    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
}
}
