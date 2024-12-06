import { Directive, ElementRef, forwardRef, HostListener, inject } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Directive({
	selector: '[appCurrency]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => CurrencyDirective),
		multi: true
	}]
})
export class CurrencyDirective implements ControlValueAccessor {
	
	#el = inject(ElementRef)
  
	writeValue(value: any): void {
	  const numericValue = value ? value.toString().replace(/[^0-9]/g, '') : '0'
	  this.#el.nativeElement.value = this.formatCurrency(numericValue)
	}

	#onChange: (value: any) => void = () => {}
  
	registerOnChange(fn: any): void {
	  this.#onChange = fn
	}
  
	registerOnTouched(fn: any): void {}
  
	@HostListener('input', ['$event.target.value'])
	onInput(value: string): void {
	  const numericValue = value.replace(/[^0-9]/g, '')
	  this.#onChange(parseFloat(numericValue) / 100)
	  this.#el.nativeElement.value = this.formatCurrency(numericValue)
	}
  
	@HostListener('blur')
	onBlur(): void {
	  const value = this.#el.nativeElement.value.replace(/[^0-9]/g, '')
	  this.#el.nativeElement.value = this.formatCurrency(value)
	}
  
	@HostListener('focus')
	onFocus(): void {
	  this.#el.nativeElement.value = this.#el.nativeElement.value.replace(/[^0-9],/g, '')
	}
  
	protected formatCurrency(value: string): string {
	  const numericValue = parseFloat(value) / 100
	  return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	  }).format(numericValue || 0)
	}
  }