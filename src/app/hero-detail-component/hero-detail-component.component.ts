import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail-component',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe
  ],
  templateUrl: './hero-detail-component.component.html',
  styleUrl: './hero-detail-component.component.css'
})

export class HeroDetailComponentComponent {
  @Input() hero?: Hero;

}
