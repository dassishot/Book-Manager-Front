import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'app-input',
	imports: [],
	templateUrl: './input.component.html'
})
export class InputComponent implements AfterContentInit {
	@Input({ required: true }) label!: string
	@Input({ required: true }) errorMessage!: string

	input: any

	@ContentChild(NgModel) model!: NgModel

	constructor() { }

	ngAfterContentInit(): void {
		this.input = this.model
		if(this.input === undefined) {
			throw new Error('Component need directive ngModel');
		}
	}

	
}
