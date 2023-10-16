import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  book_search_result = [];
  loader_status = false;
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateData(data: any){
    this.book_search_result = data;
  }

  onUpdateLoaderStatus(status: boolean){
    this.loader_status = status;
  }

}
