import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
	selector: 'app-create-author',
	imports: [RouterLink, InputComponent, FormsModule, CommonModule],
	templateUrl: './create-author.component.html'
})
export class CreateAuthorComponent {
	SaveAuthor(ipt : any): void {
		console.log(ipt);
		
	}
}
