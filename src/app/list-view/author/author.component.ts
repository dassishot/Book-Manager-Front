import { Component, Input } from '@angular/core';
import { BtnComponent } from '../../btn/btn.component';
import { Author } from "../../model/author.models";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-author',
  imports: [BtnComponent, NgFor],
  templateUrl: './author.component.html'
})
export class AuthorComponent {
  @Input({ required: true }) authors!: Author[]
}
