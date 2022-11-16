import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() dataBook!:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataBook)
  }

}
