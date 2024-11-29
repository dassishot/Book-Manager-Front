import { Injectable } from "@angular/core"
import { BOOK_API } from "../app.api"
import { Book } from "../model/books.model"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Author } from "../model/author.models"

@Injectable({
  providedIn: 'root',
})
export class AuthorsServices {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${BOOK_API}/authors`)
  }
}