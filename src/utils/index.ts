import { Book } from "../interfaces";

export function truncate(input: string, wordsCount: number): string {
    let words = input.split(/[\s-]+/);

    if (words.length > wordsCount) {
        let truncated = '';
        for (let i = 0; i < wordsCount; i++) {
            if (i !== 0) {
                if (input[words[i - 1].length + truncated.length] === '-') {
                    truncated += '-';
                } else {
                    truncated += ' ';
                }
            }
            truncated += words[i];
        }

        return truncated + '...';
    }

    return input;
}

export function getNewestBooks(books: Book[]): Book[] {
    return books.sort((a, b) => {
        const dateA = getDate(a.publishedDate);
        const dateB = getDate(b.publishedDate);
        return dateB.getTime() - dateA.getTime();
    }).slice(0, 3);
}

function getDate(dateString: string): Date {
    let date: Date;
    if (dateString.length === 4) {
        date = new Date(parseInt(dateString, 10), 11, 31);
    } else {
        date = new Date(dateString);
    }

    return date;
}