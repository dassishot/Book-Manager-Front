import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-header-list]',
  imports: [],
  templateUrl: './header-list.component.html'
})
export class HeaderListComponent {
    @Input({required: true }) items: string[] = []
}