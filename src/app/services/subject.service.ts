import { inject, Injectable, signal } from "@angular/core"
import { ICreateSubject, ISubject } from "../interfaces/ISubject"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { environment } from "../../environments/environment.development"

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    
    #http = inject(HttpClient)
    #url = signal(environment.apiUrl)

    #subjects = signal<ISubject[]>([])
    #subject = signal<ISubject|null>(null)
    #create = signal<string|null>(null)

    subjects = this.#subjects.asReadonly()
    subject = this.#subject.asReadonly()
    create = this.#create.asReadonly()

    getSubjects(): void {
        this.#http
            .get<ISubject[]>(`${this.#url()}/Subjects`)
            .subscribe(this.#subjects.set)
    }

    getSubject(id: string): void {
        this.#http
            .get<ISubject>(`${this.#url()}/Subjects/${id}`)
            .subscribe(this.#subject.set)
    }

    save(Subject: ICreateSubject): void {
        this.#http
            .post<string>(`${this.#url()}/Subjects`, { ...Subject } )
            .subscribe(id => this.#subjects.update(old => [...old, { id, ...Subject }]))
    }

    remove(Subject: ISubject): void {
        this.#http
            .delete<HttpResponse<any>>(`${this.#url()}/Subjects/${Subject.id}`)
            .subscribe(_ => {
                this.#subjects.set(this.#subjects().filter(x => x.id !== Subject.id))
            })
    }

}