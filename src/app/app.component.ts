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
  shouldShowSavedBooks: boolean = false;
  dataBooks = [];

  constructor(private crudService: CrudService){}

  onUpdateData(data: any){
    this.dataBooks = data;
    this.titleViewPage = "Results:"
  }

  showSavedBooks(){
    if(!this.shouldShowSavedBooks){
      const books = this.crudService.getBooks();
      this.dataBooks = books;
      this.titleViewPage = "My library:"
    }else{
      this.dataBooks = [];
      this.titleViewPage = "Results:"
    }

    this.shouldShowSavedBooks = !this.shouldShowSavedBooks;
  }
}
