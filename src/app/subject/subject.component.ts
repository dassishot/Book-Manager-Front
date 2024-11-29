import { Component, Input } from '@angular/core'
import { BtnComponent } from '../btn/btn.component'
import { Subject } from '../model/book.model'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-subject',
  imports: [NgFor, BtnComponent],
  templateUrl: './subject.component.html'
})
export class SubjectComponent {
  @Input({ required: true }) subjects!: Subject[]
}
