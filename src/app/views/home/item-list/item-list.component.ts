import { Component, Input } from '@angular/core'
import { ListAuthorsComponent } from '../list-authors/list-authors.component'
import { ListSubjectsComponent } from '../list-subjects/list-subjects.component'
import { IBook } from '../../../interfaces/IBook'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-item-list',
  imports: [
    NgIf,
    ListAuthorsComponent,
		ListSubjectsComponent,
  ],
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  
  toogleAuthor: boolean = false
  toogleSubject: boolean = false

  @Input({ required: true }) book!: IBook

  ShowAuthor(): void {
		this.toogleAuthor = !this.toogleAuthor
	}

  ShowSubject(): void {
		this.toogleSubject = !this.toogleSubject
	}
}
