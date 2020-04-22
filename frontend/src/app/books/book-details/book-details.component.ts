import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../reviews/model/review';
import { ReviewsRestService } from '../../reviews/shared/services/reviews-rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  reviews: Review[];
  fetching: boolean;

  constructor(private readonly route: ActivatedRoute, private readonly reviewService: ReviewsRestService) { }

  ngOnInit(): void {
    this.book = this.route.snapshot.data.book;
    this.getReviews();
    console.log(this.reviews);
  }

  getReviews(): void {
    this.fetching = true;
    this.reviewService.findAllForBook(this.book.id)
    .subscribe(reviews => {
      setTimeout(() => {
        this.reviews = reviews;
        this.fetching = false;
      }, 3000);
    });
  }

}
