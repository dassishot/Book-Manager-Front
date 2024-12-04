import { Component, inject } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../components/input/input.component';
import { AuthorService } from '../../../services/author.service';
import { ICreateAuthor } from '../../../interfaces/IAuthor';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create',
	imports: [FormsModule, CommonModule, ModalComponent, InputComponent],
	templateUrl: './create.component.html'
})
export class CreateComponent {

	#authorService = inject(AuthorService)
	#router = inject(Router)

	create = this.#authorService.create

	SaveAuthor(create: ICreateAuthor): void {
		this.#authorService.save(create)
		this.#router.navigate(['/authors'])
	}
}
