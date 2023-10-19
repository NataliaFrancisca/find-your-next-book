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

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.volumeBookData = this.bookResponse.volumeInfo;
    this.isFavoriteBook();
  }

  toggleFavoriteBook(){
    this.btns_status.favorite = !this.btns_status.favorite;
    this.updateFavoriteBooks();
  }

  toggleFinishedBook(){
    this.btns_status.finished = !this.btns_status.finished;
    this.updateFinishedBooks();
  }

  toggleSavedBook(){
    this.btns_status.save = !this.btns_status.save;
    this.updateSavedBooks();
  }

  // Services from CRUD
  updateFavoriteBooks(){
    this.btns_status.favorite ? 
    this.crudService.setFavorite({id: this.bookResponse.id, volumeInfo: this.bookResponse.volumeInfo}) :
    this.crudService.deleteBook(this.bookResponse.id, 'favorite')
  }

  updateFinishedBooks(){
    this.btns_status.finished ?
    this.crudService.setFinished({id: this.bookResponse.id, volumeInfo: this.bookResponse.volumeInfo}) :
    this.crudService.deleteBook(this.bookResponse.id, 'finished')
  }

  updateSavedBooks(){
    this.btns_status ?
    this.crudService.setSaved({id: this.bookResponse.id, volumeInfo: this.bookResponse.volumeInfo}) :
    this.crudService.deleteBook(this.bookResponse.id, 'saved')
  }

  isFavoriteBook(){
    const listBooks = this.crudService.getBooks('favorite');
    const isFavorite = listBooks.some((listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id)
    this.btns_status.favorite = isFavorite;
  }
}
