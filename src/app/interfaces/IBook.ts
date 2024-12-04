import { IAuthor } from "./IAuthor";
import { ISubject } from "./ISubject";

export interface IBook {
    id: string,
    title: string,
    publisher: string,
    edition: number,
    year: number,
    price: number,
    authors : IAuthor[],
    subjects : ISubject[]
}