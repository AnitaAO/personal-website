import { Component, OnInit } from '@angular/core';
// import { IImages } from './portfolioData';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedAll(images: any){};
  selectedDesign(images: any){};
  selectedDevelopment(images: any){};


  constructor() { }

  ngOnInit(): void {


  }

}
