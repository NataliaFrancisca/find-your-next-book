import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() dataBook!: any;

  showOnlyShortDescription = "";
  shouldOpenReadMore: boolean = false;
  favoriteBook = false;

  constructor() { }

  ngOnInit(): void {
    if(this.dataBook.volumeInfo.description && this.dataBook.volumeInfo?.description.split(" ").length > 20){
      this.showOnlyShortDescription = this.dataBook.volumeInfo.description.split(" ").slice(0,20).join(" ");
    }else{
      this.toogleReadMore();
    }
  }

  toogleReadMore(){
    this.shouldOpenReadMore = !this.shouldOpenReadMore;
  }

  toogleFavoriteButton(){
    this.favoriteBook = !this.favoriteBook;
  }

}
