import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { BookResponse } from 'src/types/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateData: EventEmitter<BookResponse> = new EventEmitter;
  @Input() bookSearch!: string;

  showErrorMessage: boolean = false;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
  }

  async searchBook(){
    if(this.bookSearch == undefined || this.bookSearch == ""){
      this.showErrorMessage = true;
    }else{
      this.showErrorMessage = false;
      const result = await this.fetchService.fetchBook(this.bookSearch);
      this.updateData.emit(result);
    }
  }
}
