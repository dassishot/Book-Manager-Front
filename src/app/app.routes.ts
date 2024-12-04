import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { CreateComponent as CreateBook } from './views/home/create/create.component';
import { CreateComponent as CreateAuthor } from './views/authors/create/create.component';
import { CreateComponent as CreateSubject } from './views/subjects/create/create.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path: 'create',
                component: CreateBook
            },
        ]
    },
    {
        path: 'authors',
        component: AuthorsComponent,
        children:[
            {
                path: 'create',
                component: CreateAuthor
            },
        ]
    },
    {
        path: 'subjects',
        component: SubjectsComponent,
        children:[
            {
                path: 'create',
                component: CreateSubject
            },
        ]
    }
];
