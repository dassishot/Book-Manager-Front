import { Component } from '@angular/core'
import { ModalComponent } from '../../../components/modal/modal.component'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { InputComponent } from '../../../components/input/input.component'
import { CurrencyDirective } from '../../../directives/currency.directive'
import { YearDirective } from '../../../directives/year.directive'

@Component({
	selector: 'app-create',
	imports: [FormsModule, CommonModule, ModalComponent, InputComponent, YearDirective, CurrencyDirective],
	templateUrl: './create.component.html'
})
export class CreateComponent {

}
