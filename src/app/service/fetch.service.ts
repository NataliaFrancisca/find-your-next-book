import { Injectable } from '@angular/core';
import { BookResponse } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }

  async fetchBook(searchBook: string): Promise<BookResponse> {
    const resultAPI = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`)
    const dataJSON = await resultAPI.json();
    return dataJSON.items;
  }

}

