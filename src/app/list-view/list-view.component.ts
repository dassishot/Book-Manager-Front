import { Component, OnInit } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { RowComponent } from './row/row.component'
import { FooterComponent } from './footer/footer.component'
import { NgFor } from '@angular/common'
import { Book } from '../model/books.model'
import { BooksServices } from '../services/books.service'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-list-view',
	providers: [BooksServices],
	imports: [RouterOutlet, NgFor, HeaderComponent, RowComponent, FooterComponent],
	templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {

	books: Book[] = []

	constructor(private bookService: BooksServices) { }
	
	ngOnInit(): void {
		this.bookService.getBooks()
			.subscribe(x => this.books = x)
	}
}
