import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../components/input/input.component';
import { SubjectService } from '../../../services/subject.service';
import { Router } from '@angular/router';
import { ICreateSubject } from '../../../interfaces/ISubject';

@Component({
  selector: 'app-create',
  imports: [FormsModule, CommonModule, ModalComponent, InputComponent],
  templateUrl: './create.component.html'
})
export class CreateComponent {

	#subjectService = inject(SubjectService)
	#router = inject(Router)

	create = this.#subjectService.create

	SaveSubject(create: ICreateSubject): void {
		this.#subjectService.save(create)
		this.#router.navigate(['/subjects'])
	}
}
