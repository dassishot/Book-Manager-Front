import { Component, inject, OnInit } from '@angular/core'
import { HeaderListComponent } from '../../components/header-list/header-list.component'
import { ItemListComponent } from './item-list/item-list.component'
import { AuthorService } from '../../services/author.service'
import { NgFor, NgIf } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { IAuthor } from '../../interfaces/IAuthor'

@Component({
	selector: 'app-authors',
	imports: [
		NgFor,
		NgIf,
		RouterLink,
		RouterOutlet,
		HeaderListComponent,
		ItemListComponent
	],
	templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

	#authorService = inject(AuthorService)

	authors = this.#authorService.authors

	remove(author: IAuthor): void {
		this.#authorService.remove(author)
	}

	ngOnInit(): void {
		this.#authorService.getAuthors()
	}
}
