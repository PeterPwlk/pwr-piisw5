import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review } from '../model/review';
import { ReviewsRestService } from '../shared/services/reviews-rest.service';
import { Book } from 'src/app/books/model/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  review: Review;
  @Input()
  book: Book;

  form: FormGroup;

  @Output()
  reviewPost = new EventEmitter();

  constructor(private readonly reviewService: ReviewsRestService) { }

  ngOnInit(): void {
    this.resetInput();
    this.form = new FormGroup({
      author: new FormControl(this.review.author, [
        Validators.required
      ])
    });
  }

  resetInput(): void {
    this.review = {
      author: '',
      book: this.book.id,
      content: '',
      title: '',
      rate: 0
    };
  }

  submitForm(f: any): void {
    this.reviewService.create(this.review).subscribe(e => {
      f.reset();
      this.reviewPost.emit();
    });
  }

}
