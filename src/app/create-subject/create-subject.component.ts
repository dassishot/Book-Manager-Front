import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-subject',
  imports: [RouterLink,  InputComponent, FormsModule, CommonModule],
  templateUrl: './create-subject.component.html'
})
export class CreateSubjectComponent {

}
