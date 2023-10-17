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

  btns_status = {
    favorite: false,
    save: false,
    finished: false
  }

  favoriteBook = false;
  bookImage = 'assets/images/image-not-found.png';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.volumeBookData = this.bookResponse.volumeInfo;
   
    if(this.volumeBookData.imageLinks){
      this.bookImage = this.volumeBookData.imageLinks.thumbnail;
    }

    this.isFavoriteBook();
  }

  toggleFavoriteBook(){
    this.btns_status.favorite = !this.btns_status.favorite;
    this.updateFavoriteBooks();
  }

  toggleFinishedBook(){
    this.btns_status.finished = !this.btns_status.finished;
  }

  toggleSaveBook(){
    this.btns_status.save = !this.btns_status.save;
  }

  // Services from CRUD
  updateFavoriteBooks(): void{
    this.btns_status.favorite ? this.crudService.saveBook(this.bookResponse) : this.crudService.deleteBook(this.bookResponse);
  }

  isFavoriteBook(){
    const listBooks = this.crudService.getBooks();
    const isFavorite = listBooks.some((listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id)
    this.btns_status.favorite = isFavorite;
  }
}
