import { Component, OnInit } from '@angular/core';

type Images = {
  id: number,
  imageSrc: string,
  imageAlt: string
}


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  images: Images[] = []
  // images:Images[] = [


  constructor() { }

  ngOnInit(): void {

  }

}
