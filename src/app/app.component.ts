import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mast Bhojan';
  imageSources=[
    {url:'../assets/slide1.jpg',caption:'Hot Chapatis'},
    {url:'../assets/slide2.jpg',caption:'Hygine Food'},
    {url:'../assets/slide5.jpg',caption:'Basmati Rice'},
    {url:'../assets/slide6.jpg',caption:'Daal'},
    {url:'../assets/slide3.jpg',caption:'Our Aaloo Tamatar'},
    {url:'../assets/slide4.jpg',caption:'Sunday Special'}
  ]
  constructor(){

  }
}
