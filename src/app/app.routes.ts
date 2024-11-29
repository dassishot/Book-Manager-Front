import { Routes } from '@angular/router'
import { ListViewComponent } from './list-view/list-view.component'
import { CreateAuthorComponent } from './create-author/create-author.component'
import { CreateSubjectComponent } from './create-subject/create-subject.component'
import { CreateBookComponent } from './create-book/create-book.component';

export const routes: Routes = [{
    path: '', component: ListViewComponent,
    children:[
        { path: 'authors', component: CreateAuthorComponent },
        { path: 'subjects', component: CreateSubjectComponent },
        { path: 'books', component: CreateBookComponent }
    ]
}];
