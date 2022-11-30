import { Component, OnInit } from '@angular/core';
// import {IPortfolioImageList} from "../../pages/portfolio/portfolioData";



// const IMAGES: IPortfolioImageList[] = [
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'This is a really long string to see how the text will overflow',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
//   {
//     src: 'https://picsum.photos/200',
//     caption: 'It\'s a thing',
//   },
// ];

@Component({
  selector: 'app-portfolio-hero',
  templateUrl: './portfolio-hero.component.html',
  styleUrls: ['./portfolio-hero.component.scss']
})
export class PortfolioHeroComponent implements OnInit {
  // images:IPortfolioImageList[]= IMAGES;

  constructor() { }

  ngOnInit(): void {
  }
}
