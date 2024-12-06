import { NgFor, NgIf } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';

@Component({
	selector: 'app-select',
	imports: [NgFor, NgIf],
	templateUrl: './select.component.html'
})
export class SelectComponent {
	protected options = signal<string[]>(['Banana', 'Maçã', 'Laranja', 'Abacaxi', 'Uva', 'Pera', 'Melancia'])

	protected isDropdownOpen = signal<boolean>(false)
	protected showAdd = signal<boolean>(false)
	protected selectedOptions = signal<string[]>([])
	protected filteredOptions = signal<string[]>([...this.options()])

	availableOptions = computed(() =>
		this.options().filter(option => !this.selectedOptions().includes(option)))

	toggleDropdown(): void {
		this.isDropdownOpen.set(!this.isDropdownOpen())
	}

	filterOptions(query: any): void {
		const lowerCaseQuery = query.target.value.toLowerCase()
		const matches = this.options().filter(option => option.toLowerCase().includes(lowerCaseQuery))
		this.filteredOptions.set(matches)
		this.showAdd.set(matches.length === 0);
	}

	selectOption(option: string): void {
		if (!this.selectedOptions().includes(option)) {
			this.selectedOptions.set([...this.selectedOptions(), option])
		}
		this.isDropdownOpen.set(false)
		this.showAdd.set(false)
		this.filteredOptions.set(this.availableOptions())
	}

	removeOption(option: string): void {
		this.selectedOptions.set(
			this.selectedOptions().filter(selected => selected !== option)
		)
		this.filteredOptions.set(this.availableOptions())
	}

	onBlur(event: FocusEvent): void {
	}
}
