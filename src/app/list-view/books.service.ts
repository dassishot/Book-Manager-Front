import { Book } from "../model/book.model";

export class BooksServices {
    books = [
		{ 
			id: "1",
			title: "name 1",
			publisher: "1",
			edition: 1,
			year: 100,
			authors : [{
				id: "123",
				name: "Name 1"
			},
			{
				id: "123",
				name: "Name 2"
			}],
			subjects : [{
				id: "123",
				description: "description 1"
			},
			{
				id: "123",
				description: "description 2"
			}]
		},
		{ 
			id: "2",
			title: "name 2",
			publisher: "2",
			edition: 2,
			year: 200,
			authors : [{
				id: "456",
				name: "Name 123"
			},
			{
				id: "789",
				name: "Name 456"
			}],
			subjects : [{
				id: "789",
				description: "description 123"
			},
			{
				id: "123",
				description: "description 289"
			}]
		}
	]
    
    constructor() { }

    getBooks(): Book[] {
        return this.books
    }

}