export interface Book {
    id: string,
    title: string,
    publisher: string,
    edition: number,
    year: number,
    authors : Author[],
    subjects : Subject[]
}
export interface Author {
    id: string,
    name: string
}
export interface Subject {
    id: string,
    description: string
}