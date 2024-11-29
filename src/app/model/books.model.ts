import { Author } from "./author.models"
import { Subject } from "./subjects.models"

export interface Book {
    id: string,
    title: string,
    publisher: string,
    edition: number,
    year: number,
    authors : Author[],
    subjects : Subject[]
}
