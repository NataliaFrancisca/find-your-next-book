import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular';

  dataBooks = [];

  onUpdateData(data: any){
    console.log("no father", data)
    this.dataBooks = data
  }

}
