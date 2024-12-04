import { inject, Injectable, signal } from "@angular/core"
import { ISubject } from "../interfaces/ISubject"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "../../environments/environment.development"

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    
    #http = inject(HttpClient)

    #url = signal(environment.apiUrl)
    #subjects = signal<ISubject[]>([])

    subjects = this.#subjects.asReadonly()

    getSubjects(): void {
        this.#http
            .get<ISubject[]>(`${this.#url()}/subjects`)
            .subscribe(this.#subjects.set)
    }

}