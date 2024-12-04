import { Component, inject, OnInit } from '@angular/core'
import { HeaderListComponent } from '../../components/header-list/header-list.component'
import { ItemListComponent } from './item-list/item-list.component'
import { SubjectService } from '../../services/subject.service'
import { NgFor, NgIf } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-subjects',
	providers: [SubjectService],
	imports: [NgFor, NgIf, RouterLink, RouterOutlet, HeaderListComponent, ItemListComponent],
	templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit {

	#subjectService = inject(SubjectService)

	subjects = this.#subjectService.subjects

	ngOnInit(): void {
		this.#subjectService.getSubjects()
	}
}