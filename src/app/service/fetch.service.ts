import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }

  fetchBook(book: string): any{
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then(res => res.json())
      .then(data => data.items)
      .catch(error => console.error(error))
  }
}
