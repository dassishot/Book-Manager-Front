import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-btn',
	imports: [NgClass],
	templateUrl: './btn.component.html'
})
export class BtnComponent {
	@Input({ required: true, alias: 'icon' }) icon!: string
	@Input({ required: true, alias: 'css' }) css!: string
}
