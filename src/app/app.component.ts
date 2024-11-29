import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListViewComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'book-manager';
}
