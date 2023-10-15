import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { IResponseAPI, BookVolumeInfo } from 'src/types/types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() bookResponse!: IResponseAPI;

  volumeBookData!: BookVolumeInfo;
  
  favoriteBook = false;
  stateToggleReadMore: boolean = false;

  shortBookDescription: string = '';
  bookImage = 'assets/images/image-not-found.png';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.volumeBookData = this.bookResponse.volumeInfo;
    this.shortBookDescription = this.volumeBookData.description?.split(" ").slice(0, 20).join(" ");

    if(this.volumeBookData.hasOwnProperty('imageLinks')){
      this.bookImage = this.volumeBookData.imageLinks.thumbnail;
    }

    this.isFavoriteBook();
  }

  // Buttons Toogle
  buttonToogleReadMore(){
    this.stateToggleReadMore = !this.stateToggleReadMore;
  }

  buttonToogleFavorite(): void{
    this.favoriteBook = !this.favoriteBook;
    this.updateFavoriteBooks();
  }

  // Services from CRUD
  updateFavoriteBooks(): void{
    this.favoriteBook ? this.crudService.saveBook(this.bookResponse) : this.crudService.deleteBook(this.bookResponse);
  }

  isFavoriteBook(){
    const listBooks = this.crudService.getBooks();
    const isFavorite = listBooks.some((listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id)
    this.favoriteBook = isFavorite;
  }
}
