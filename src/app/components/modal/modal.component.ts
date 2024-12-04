import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-modal',
	imports: [RouterLink],
	templateUrl: './modal.component.html'
})
export class ModalComponent {
	@Input({ required: true }) title!: string
	@Input({ required: true }) goBack!: string

	@Input({ required: true }) disabled: boolean = true

	@Output() clickEvent = new EventEmitter();

	onClick(): void {
		this.clickEvent.emit();
	}
}
