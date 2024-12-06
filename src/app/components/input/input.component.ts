import { NgIf } from '@angular/common'
import { AfterContentInit, Component, computed, ContentChild, Input, signal } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
	selector: '[app-input]',
	imports: [NgIf],
	templateUrl: './input.component.html'
})
export class InputComponent implements AfterContentInit {
	@Input({ required: true }) title!: string
	@Input({ required: true }) label!: string
	@Input({ required: true }) errorMessage!: string

	@ContentChild(NgModel) model!: NgModel

	protected ipt: NgModel | undefined = undefined

	ngAfterContentInit(): void {
		this.ipt = this.model
		if(this.ipt === undefined) {
			throw new Error('This component needs the ngModel directive');
		}
	}
}
