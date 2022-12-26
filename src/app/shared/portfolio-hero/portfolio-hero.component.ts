import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {IPortfolioImageList} from "../../pages/portfolio/portfolioData";

type Images = {
  id: number,
  imageSrc: string,
  imageAlt: string
}

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
  images: Images[] = [];

  @Output() selectedAll = new EventEmitter<Images>();
  @Output() selectedDesign = new EventEmitter<Images>();
  @Output() selectedDevelopment = new EventEmitter<Images>();

  constructor() { }

  ngOnInit(): void {
    this.images = [
      { id: 1, imageSrc: 'assets/svgs/sabihelpdesktop1.svg', imageAlt: 'photo'},
      { id: 2, imageSrc: 'assets/svgs/sabihelpdesktop2.svg', imageAlt: 'photo'},
      { id: 3, imageSrc: 'assets/svgs/senditdesktop1.svg', imageAlt: 'photo'},
      { id: 4, imageSrc: 'assets/svgs/senditmobile1.svg', imageAlt: 'photo'},
      { id: 5, imageSrc: 'assets/svgs/timbredesktop1.svg', imageAlt: 'photo'},
      { id: 6, imageSrc: 'assets/svgs/restaurantguidedesktop1.svg', imageAlt: 'photo'},
    ]
  }

  selectAll(images: any){
    this.selectedAll.emit(images)
  };

  selectDesign(images: any){
    this.selectedDesign.emit(images)
  };

  selectDevelopment(images: any){
    this.selectedDevelopment.emit(images)
  };
}
