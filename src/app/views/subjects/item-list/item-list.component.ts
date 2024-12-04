import { Component, Input, OnInit } from '@angular/core'
import { ISubject } from '../../../interfaces/ISubject'

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html'
})
export class ItemListComponent {
  @Input({ required: true }) subject!: ISubject
}