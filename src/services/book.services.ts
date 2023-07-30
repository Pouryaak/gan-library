import { Book } from "../interfaces";

async function fetchBooks(searchTerm: string = "books"): Promise<Book[]> {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12`);
        const data: any = await response.json();


        const books: Book[] = data.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: (item.volumeInfo.authors && (item.volumeInfo.authors[0] || "Unknown Author")) ?? "Unknown Author",
            rating: item.volumeInfo.averageRating || "No Rating",
            pages: item.volumeInfo.pageCount || "Unknown Pages",
            description: item.volumeInfo.description,
            publishedDate: item.volumeInfo.publishedDate ?? "Unknown Date",
            coverImage: (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) ?? undefined,
        }));

        console.log(books)
        return books;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export {
    fetchBooks
}