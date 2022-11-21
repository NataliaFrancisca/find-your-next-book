import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';
  shouldShowFavoriteBooks: boolean = false;
  dataBooks = [];

  constructor(private crudService: CrudService){}

  onUpdateData(data: any){
    this.dataBooks = data
  }

  showFavoriteBooks(){
    if(!this.shouldShowFavoriteBooks){
      const books = this.crudService.getBooks();
      this.dataBooks = books;
    }else{
      this.dataBooks = [];
    }

    this.shouldShowFavoriteBooks = !this.shouldShowFavoriteBooks;
  }
}
