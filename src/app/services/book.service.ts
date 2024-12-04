import { HttpClient } from "@angular/common/http"
import { IBook } from "../interfaces/IBook"
import { inject, Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "../../environments/environment.development"

@Injectable({
    providedIn: 'root'
})
export class BookService {

	_http = inject(HttpClient)

    getBooks(): Observable<IBook[]> {
        return this._http
			.get<IBook[]>(`${environment.apiUrl}/books`)
    }

}