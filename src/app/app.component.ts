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

  stateToggleViewBooks = false;

  shouldShowSavedBooks: boolean = false;
  bookData = [];

  constructor(private crudService: CrudService){}

  onUpdateData(data: any){
    this.bookData = data;
    this.titleViewPage = "Results:"
  }

  buttonToogleViewBooks(){
    this.stateToggleViewBooks = !this.stateToggleViewBooks;

    if(this.stateToggleViewBooks){
      const books = this.crudService.getBooks();
      this.bookData = books;
      this.titleViewPage = "My library:"
    }else{
      this.bookData = [];
      this.titleViewPage = "Results:"
    }

  }
}
