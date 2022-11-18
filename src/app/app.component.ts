import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  dataBooks = [];

  constructor(private crudService: CrudService){}

  onUpdateData(data: any){
    console.log("no father", data)
    this.dataBooks = data
  }

  showFavoriteBooks(){
    const books = this.crudService.getBooks();
    this.dataBooks = books;
  }

}
