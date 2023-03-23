import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [NgbCarouselModule,NgIf,MatIconModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor() {}

  product  = [
    '../../assets/car1.jpeg',
    '../../assets/car2.jpeg',
    '../../assets/car3.jpeg',
    '../../assets/car4.jpeg',
    '../../assets/car5.jpeg',
    '../../assets/car6.jpeg',
    '../../assets/car7.jpeg',
    '../../assets/car8.jpeg',
    '../../assets/car9.jpeg',
    '../../assets/car10.jpeg',
  ]

  selected = false;

  currImg = "";

  selectedCard(index : any) {
    this.selected = true;
    this.currImg = this.product[index];
    console.log(this.currImg);
    
  }

  closeWhole() {
    this.selected = false;
  }

}
