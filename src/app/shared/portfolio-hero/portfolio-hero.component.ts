import {Component, OnInit } from '@angular/core';
import { IImages } from 'src/app/pages/portfolio/portfolioData'

@Component({
  selector: 'app-portfolio-hero',
  templateUrl: './portfolio-hero.component.html',
  styleUrls: ['./portfolio-hero.component.scss']
})
export class PortfolioHeroComponent implements OnInit {
  selectAll: boolean = false;
  selectDesign: boolean = false;
  selectDevelopment: boolean = false;

  images: IImages[] = [
    {
      id: 1,
      imageSrc: 'assets/svgs/sabihelpdesktop1.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
    {
      id: 2,
      imageSrc: 'assets/svgs/sabihelpdesktop2.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
    {
      id: 3,
      imageSrc: 'assets/svgs/senditdesktop1.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
    {
      id: 4,
      imageSrc: 'assets/svgs/senditmobile1.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
    {
      id: 5,
      imageSrc: 'assets/svgs/timbredesktop1.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
    {
      id: 6,
      imageSrc: 'assets/svgs/restaurantguidedesktop1.svg',
      imageAlt: 'photo',
      title: 'Sabihelp',
      description: 'An app'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedAll();
  }

  selectedAll(){
    this.selectAll = true;
    this.selectDesign = false;
    this.selectDevelopment = false;
  };

  selectedDesign(){
    this.selectAll=false;
    this.selectDesign=true;
    this.selectDevelopment=false;
  };

  selectedDevelopment(){
    this.selectAll=false;
    this.selectDesign=false;
    this.selectDevelopment=true;
  };
}
