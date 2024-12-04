import { Component, Input } from '@angular/core';
import { IAuthor } from '../../../interfaces/IAuthor';
import { NgFor } from '@angular/common';

@Component({
  selector: '[app-list-authors]',
  imports: [NgFor],
  templateUrl: './list-authors.component.html'
})
export class ListAuthorsComponent {
  @Input({ required: false }) authors!: IAuthor[]
}
