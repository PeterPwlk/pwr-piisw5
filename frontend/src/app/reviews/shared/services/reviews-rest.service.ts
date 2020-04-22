import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsRestService {

  constructor(private readonly http: HttpClient) { }

  findAllForBook(book: string): Observable<Review[]> {
    return this.http.get<Review[]>(`/api/books/${book}/reviews`);
  }

  create(review: Review) {
    return this.http.post('/api/reviews', review);
  }
}
