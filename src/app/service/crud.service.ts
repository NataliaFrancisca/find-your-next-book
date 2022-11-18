import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() {
    const storage = localStorage.getItem("books") ||  "";

    if(storage == ""){
      localStorage.setItem("books", JSON.stringify([]));
    }
  }

  saveBook(book: Object){
    const storage = localStorage.getItem("books") ||  "";

    if(!this.checkAlreadyAddBook(book, JSON.parse(storage))){
      const updatedValues = [...JSON.parse(storage), book];
      localStorage.setItem("books", JSON.stringify(updatedValues))
    }
  }

  getBooks(){
    const storage = localStorage.getItem("books") || "You don't have books saved";
    return JSON.parse(storage);
  }

  deleteBook(book: any){
    const storage = localStorage.getItem("books") || "You don't have books saved";
    const updateStorage = JSON.parse(storage).filter((bookStorage: any) => bookStorage.id !== book.id)
    localStorage.setItem("books", JSON.stringify(updateStorage))
  }

  checkAlreadyAddBook(book: any, books: Array<any>){
    return books.some(bookStorage => bookStorage.id === book.id)
  }


}
