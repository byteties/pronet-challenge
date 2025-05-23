import { Routes } from '@angular/router';
import { BookListPage } from './features/books/list/list.page';
import { BookDetailPage } from './features/books/detail/detail.page';
import { FavoritesPage } from './features/books/favorite/favorites.page';
import { LandingPage } from './features/landing/landing.page';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'books', component: BookListPage, canActivate: [authGuard]  },
  { path: 'books/favorites', component: FavoritesPage, canActivate: [authGuard]  },
  { path: 'books/:id', component: BookDetailPage, canActivate: [authGuard]  }
];

