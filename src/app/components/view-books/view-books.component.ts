import { Component, OnInit, Input} from '@angular/core';
import { IResponseAPI } from 'src/types/types';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  @Input() bookResult: Array<IResponseAPI> = [];
  @Input() viewName!: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
