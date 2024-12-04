import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IAuthor } from '../../../interfaces/IAuthor'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  @Input({ required: true }) author!: IAuthor
  @Output() removeEvent = new EventEmitter<IAuthor>();

  onRemoveClick(): void {
		this.removeEvent.emit(this.author);
	}
}
