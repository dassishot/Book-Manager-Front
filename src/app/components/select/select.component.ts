import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-select',
	imports: [NgFor],
	templateUrl: './select.component.html'
})
export class SelectComponent {
	options = ['Banana', 'Maçã', 'Laranja', 'Abacaxi', 'Uva', 'Pera', 'Melancia']
	filteredOptions = [...this.options]
	searchTerm = '';
	selectedOption: string | null = null;
	isDropdownOpen = false;
  
	toggleDropdown(open: boolean): void {
	  this.isDropdownOpen = open;
	}
  
	filterOptions(): void {
	  const term = this.searchTerm.toLowerCase();
	  this.filteredOptions = this.options.filter(option =>
		option.toLowerCase().includes(term)
	  );
	}
  
	selectOption(option: string): void {
	  this.selectedOption = option;
	  this.searchTerm = option;
	  this.isDropdownOpen = false;
	}
}
