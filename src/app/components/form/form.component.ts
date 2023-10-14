import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { IResponseAPI } from 'src/types/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateData: EventEmitter<IResponseAPI> = new EventEmitter;
  @Input() input_book_search!: string;

  toggle_error_message = false;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
  }

  async search(){
    if(this.input_book_search == undefined || this.input_book_search == ""){
      this.toggle_error_message = true;
      return;
    }
    
    this.toggle_error_message = false;
    const result = await this.fetchService.fetchBook(this.input_book_search);
    this.updateData.emit(result);
  }
}
