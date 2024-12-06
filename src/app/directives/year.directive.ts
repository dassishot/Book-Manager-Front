import { Directive, ElementRef, forwardRef, HostListener, inject } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Directive({
	selector: '[appYear]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => YearDirective),
		multi: true
	}]
})
export class YearDirective implements ControlValueAccessor {

	#currentYear: number = new Date().getFullYear()

	#el = inject(ElementRef)

	#onChange: (value: any) => void = () => { }

	writeValue(value: any): void {
		const sanitizedValue = value ? value.toString().replace(/[^0-9]/g, '') : ''
		const numericValue = parseInt(sanitizedValue, 10)
		if (numericValue > this.#currentYear) {
			this.#el.nativeElement.value = this.#currentYear.toString()
		} else {
			this.#el.nativeElement.value = sanitizedValue
		}
	}

	registerOnChange(fn: any): void {
		this.#onChange = fn
	}

	registerOnTouched(fn: any): void { }

	@HostListener('input', ['$event.target.value'])
	onInput(value: string): void {
		const sanitizedValue = value.replace(/[^0-9]/g, '')
		const numericValue = parseInt(sanitizedValue, 10)

		if (numericValue > this.#currentYear) {
			this.#el.nativeElement.value = this.#currentYear.toString()
			this.#onChange(this.#currentYear) // Atualiza o modelo com o valor válido
		} else {
			this.#el.nativeElement.value = sanitizedValue
			this.#onChange(numericValue || 0) // Atualiza o modelo
		}
	}
}