import { Routes } from '@angular/router';
import { BookListPage } from './features/books/list/list.page';
import { BookDetailPage } from './features/books/detail/detail.page';
import { FavoritesPage } from './features/books/favorite/favorites.page';

export const routes: Routes = [
  { path: '', component: BookListPage },
  { path: 'books', component: BookListPage },
  { path: 'books/favorites', component: FavoritesPage },
  { path: 'books/:id', component: BookDetailPage },
];
