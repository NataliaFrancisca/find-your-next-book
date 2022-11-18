import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateData: EventEmitter<any> = new EventEmitter;
  @Input() bookSearch!: string;

  showErrorMessage: boolean = false;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
  }

  async searchBook(){
    if(this.bookSearch == undefined ){
      this.showErrorMessage = true;
    }else{
      this.showErrorMessage = false;
      const result = await this.fetchService.fetchBook(this.bookSearch);
      this.updateData.emit(result);
    }
  }
}
