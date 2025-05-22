import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../core/services/book.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'book-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ],
  styleUrls: ['./list.page.scss'],
  templateUrl: './list.page.html'
})
export class BookListPage implements OnInit {
  displayedColumns = ['name', 'authors', 'publisher','detail'];
  private service = inject(BookService);
  searchText = ""
  books: any[] = [];
  filterBooks: any[] = []
  constructor() {
  }

  ngOnInit() {
    this.service.getBooks().subscribe(data => {
      this.books = data;
      this.filterBooks = data;
    });
  }

  getBookId(url: string): string{
    return url.split('/').pop() ?? ''; 
  }

  applyFilter(){
    const text = this.searchText.trim().toLocaleLowerCase()
    this.filterBooks = this.books.filter((book)=> 
      book.name.toLowerCase().includes(text) ||
      book.authors.join(', ').toLowerCase().includes(text) ||
      book.publisher.toLowerCase().includes(text)
    )
  }
}
