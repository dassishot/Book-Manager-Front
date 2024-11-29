import { Component, OnInit } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { RowComponent } from './row/row.component'
import { FooterComponent } from './footer/footer.component'
import { NgFor } from '@angular/common'
import { Book } from '../model/book.model'
import { BooksServices } from './books.service'

@Component({
	selector: 'app-list-view',
	providers: [BooksServices],
	imports: [NgFor, HeaderComponent, RowComponent, FooterComponent],
	templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {

	books: Book[] = []

	constructor(private bookService: BooksServices) { }
	
	ngOnInit(): void {
		this.books = this.bookService.getBooks()
	}
}
