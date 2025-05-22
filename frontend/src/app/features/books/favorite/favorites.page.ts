import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, forkJoin, switchMap } from 'rxjs';
import { selectFavorites } from '../../../core/store/favorites.selectors';
import { BookService } from '../../../core/services/book.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { removeFavorite } from '../../../core/store/favorites.actions';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule,FormsModule, MatTableModule]
})
export class FavoritesPage implements OnInit {
  favoriteBooks$: Observable<any[]> = of([]);
  private store = inject(Store);
  private service = inject(BookService);
  favoriteBooks: any[] = [];
  filteredBooks: any[] = [];
  searchText = '';
  displayedColumns = ['name', 'authors', 'publisher', 'remove', 'detail'];

  ngOnInit() {
    this.store.select(selectFavorites).pipe(
      switchMap((ids: string[]) => {
        const validIds = ids.filter(id => !!id && id !== 'favorites');
        if (!validIds.length) {
          return of([])
        };
        return forkJoin(validIds.map(id => this.service.getBook(id)));
      })
    ).subscribe(books => {
      this.favoriteBooks = books;
      this.filteredBooks = books;
    });
  }

  getBookId(url: string): string {
    return url.split('/').pop() ?? '';
  }

  removeFavoriteById(bookId: string) {
    this.store.dispatch(removeFavorite({ bookId }));
  }

  applyFilter() {
    const filter = this.searchText.trim().toLowerCase();
    this.filteredBooks = this.favoriteBooks.filter(book =>
      book.name.toLowerCase().includes(filter) ||
      book.authors.join(', ').toLowerCase().includes(filter) ||
      book.publisher.toLowerCase().includes(filter)
    );
  }
}
