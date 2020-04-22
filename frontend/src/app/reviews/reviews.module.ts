import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReviewComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ReviewComponent,
    AddReviewComponent
  ]
})
export class ReviewsModule { }
