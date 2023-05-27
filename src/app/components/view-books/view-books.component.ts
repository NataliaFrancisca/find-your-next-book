import { Component, OnInit, Input} from '@angular/core';
import { BookResponse } from 'src/types/types';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  @Input() bookResponseData: Array<BookResponse> = [];
  @Input() titleView!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
