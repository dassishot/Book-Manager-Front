import { Injectable } from "@angular/core"
import { BOOK_API } from "../app.api"
import { Book } from "../model/book.model"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable({
	providedIn: 'root',
})
export class BooksServices {
    
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {	
		return this.http.get<Book[]>(`${BOOK_API}/books`)
    }

}