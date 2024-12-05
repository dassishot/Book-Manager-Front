import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ISubject } from '../../../interfaces/ISubject'

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  @Input({ required: true }) subject!: ISubject
  @Output() removeEvent = new EventEmitter<ISubject>();

  onRemoveClick(): void {
		this.removeEvent.emit(this.subject);
	}
}