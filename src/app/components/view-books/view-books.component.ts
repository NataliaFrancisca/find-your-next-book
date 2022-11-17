import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
const teste = require("../../../assets/volumes.json");

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  @Input() dataBooks: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    console.log('no outro filho', this.dataBooks)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes['dataBooks'].currentValue);
  }

}
