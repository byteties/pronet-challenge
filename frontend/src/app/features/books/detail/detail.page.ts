import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../../core/services/book.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'book-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  styleUrls: ['./detail.page.scss'],
  templateUrl: './detail.page.html'
})
export class BookDetailPage implements OnInit {
  book: any;
  private route = inject(ActivatedRoute);
  private service = inject(BookService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getBook(id).subscribe(data => this.book = data);
    }
  }
}
