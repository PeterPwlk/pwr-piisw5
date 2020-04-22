import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {

  @Input()
  book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
