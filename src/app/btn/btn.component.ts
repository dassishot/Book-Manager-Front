import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-btn',
	imports: [RouterLink, NgClass],
	templateUrl: './btn.component.html'
})
export class BtnComponent {
	@Input({ required: true, alias: 'icon' }) icon!: string
	@Input({ required: true, alias: 'css' }) css!: string
	@Input({ required: true, alias: 'router' }) router!: string
}
