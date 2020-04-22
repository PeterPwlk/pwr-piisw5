import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookPanelComponent} from './book-list/book-panel/book-panel.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from '../reviews/review/review.component';
import { ReviewsModule } from '../reviews/reviews.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    BookPanelComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReviewsModule,
    FormsModule
  ]
})
export class BooksModule {
}
