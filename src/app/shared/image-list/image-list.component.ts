import {Component, OnInit} from '@angular/core';

type Images = {
  id: number,
  imageSrc: string,
  imageAlt: string
}

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit{

  images: Images[] = []

  ngOnInit() {
    this.images = [
      { id: 1, imageSrc: 'assets/svgs/sabihelpdesktop1.svg', imageAlt: 'photo'},
      { id: 2, imageSrc: 'assets/svgs/sabihelpdesktop2.svg', imageAlt: 'photo'},
      { id: 3, imageSrc: 'assets/svgs/senditdesktop1.svg', imageAlt: 'photo'},
      { id: 4, imageSrc: 'assets/svgs/senditmobile1.svg', imageAlt: 'photo'},
      { id: 5, imageSrc: 'assets/svgs/timbredesktop1.svg', imageAlt: 'photo'},
      { id: 6, imageSrc: 'assets/svgs/restaurantguidedesktop1.svg', imageAlt: 'photo'},
    ]
  }

}
