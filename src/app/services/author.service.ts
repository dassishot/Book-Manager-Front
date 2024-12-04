import { inject, Injectable, signal } from "@angular/core"
import { IAuthor, ICreateAuthor } from "../interfaces/IAuthor"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { environment } from "../../environments/environment.development"

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    #http = inject(HttpClient)
    #url = signal(environment.apiUrl)

    #authors = signal<IAuthor[]>([])
    #author = signal<IAuthor|null>(null)
    #create = signal<string|null>(null)

    authors = this.#authors.asReadonly()
    author = this.#author.asReadonly()
    create = this.#create.asReadonly()

    getAuthors(): void {
        this.#http
            .get<IAuthor[]>(`${this.#url()}/authors`)
            .subscribe(this.#authors.set)
    }

    getAuthor(id: string): void {
        this.#http
            .get<IAuthor>(`${this.#url()}/authors/${id}`)
            .subscribe(this.#author.set)
    }

    save(author: ICreateAuthor): void {
        this.#http
            .post<string>(`${this.#url()}/authors`, { ...author } )
            .subscribe(id => this.#authors.update(old => [...old, { id, ...author }]))
    }

    remove(author: IAuthor): void {
        this.#http
            .delete<HttpResponse<any>>(`${this.#url()}/authors/${author.id}`)
            .subscribe(_ => {
                this.#authors.set(this.#authors().filter(x => x.id !== author.id))
            })
    }
}