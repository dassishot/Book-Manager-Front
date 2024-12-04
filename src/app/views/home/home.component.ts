import { Component, inject } from '@angular/core'
import { HeaderListComponent } from '../../components/header-list/header-list.component'
import { BookService } from '../../services/book.service'
import { NgFor } from '@angular/common'
import { ItemListComponent } from './item-list/item-list.component'
import { RouterLink, RouterOutlet } from '@angular/router'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
	selector: 'app-home',
	providers:[BookService],
	imports: [
		NgFor,
		RouterOutlet,
		RouterLink,
		HeaderListComponent,
		ItemListComponent
	],
	templateUrl: './home.component.html'
})
export class HomeComponent {

	_bookService = inject(BookService)

	_books = toSignal(this._bookService.getBooks())
	
}
