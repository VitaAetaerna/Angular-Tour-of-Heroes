import { Component } from '@angular/core';
import {MessagesService} from "../messages.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public MessagesService: MessagesService) {
  }
}
