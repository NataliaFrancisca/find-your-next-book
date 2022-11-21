import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';
  titleViewPage = "Resultados";
  shouldShowFavoriteBooks: boolean = false;
  dataBooks = [];

  constructor(private crudService: CrudService){}

  onUpdateData(data: any){
    this.dataBooks = data;
    this.titleViewPage = "Resultados:"
  }

  showFavoriteBooks(){
    if(!this.shouldShowFavoriteBooks){
      const books = this.crudService.getBooks();
      this.dataBooks = books;
      this.titleViewPage = "Livros salvos:"
    }else{
      this.dataBooks = [];
      this.titleViewPage = "Resultados:"
    }

    this.shouldShowFavoriteBooks = !this.shouldShowFavoriteBooks;
  }
}
