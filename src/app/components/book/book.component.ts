import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

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

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    if(this.dataBook.volumeInfo.description && this.dataBook.volumeInfo?.description.split(" ").length > 20){
      this.showOnlyShortDescription = this.dataBook.volumeInfo.description.split(" ").slice(0,20).join(" ");
    }else{
      this.toogleReadMore();
    }

    this.isFavoriteBook();
  }

  toogleReadMore(){
    this.shouldOpenReadMore = !this.shouldOpenReadMore;
  }

  toogleFavoriteButton(){
    this.favoriteBook = !this.favoriteBook;
    this.favoriteBook ? this.crudService.saveBook(this.dataBook) : this.crudService.deleteBook(this.dataBook);
  }

  isFavoriteBook(){
    const booksFavorite = this.crudService.getBooks();
    const isFavorite = booksFavorite.some((booksFavorite: any) => booksFavorite.id === this.dataBook.id)
    this.favoriteBook = isFavorite;
  }
}
