import { Injectable } from '@angular/core';
import {HeroDetailComponentComponent} from "./hero-detail-component/hero-detail-component.component";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
  constructor() { }
}
