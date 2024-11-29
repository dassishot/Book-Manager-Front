import { Component, Input } from '@angular/core'
import { NgIf } from '@angular/common';
import { BtnComponent } from '../../btn/btn.component';
import { Book } from '../../model/book.model';
import { AuthorComponent } from '../../author/author.component';
import { SubjectComponent } from '../../subject/subject.component';


@Component({
	selector: 'app-row',
	imports: [NgIf, BtnComponent, AuthorComponent, SubjectComponent],
	templateUrl: './row.component.html'
})
export class RowComponent {
	@Input({ required: true }) book!: Book

	toogle: boolean = false

	ShowInfo(evt: any): void {
		this.toogle = !this.toogle
	}
}
