import { Routes } from '@angular/router';
import { BookListPage } from './features/books/list/list.page';

export const routes: Routes = [
  { path: '', component: BookListPage },
  { path: 'books', component: BookListPage },
];
