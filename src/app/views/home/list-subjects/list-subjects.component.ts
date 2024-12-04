import { Component, Input } from '@angular/core';
import { ISubject } from '../../../interfaces/ISubject';
import { NgFor } from '@angular/common';

@Component({
  selector: '[app-list-subjects]',
  imports: [NgFor],
  templateUrl: './list-subjects.component.html'
})
export class ListSubjectsComponent {
  @Input({ required: false }) subjects!: ISubject[]
}
