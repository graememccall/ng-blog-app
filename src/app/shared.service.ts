import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = "http://localhost:4200/"
  
  constructor(private title: Title) { }

  setTitle(pageTitle: string) {
    let title = "My Blog";
    if (pageTitle !== "") {
      title = title + " - " + pageTitle;
    }
    this.title.setTitle(title);
  }

  getTitle(){
    return this.title.getTitle();
  }
}
