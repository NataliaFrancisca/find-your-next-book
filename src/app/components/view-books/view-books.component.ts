import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  @Input() dataBooks: Array<any> = [];
  @Input() titleView!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
