import { Component } from '@angular/core';
@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent  {

  imageUrl = "assets/images/me.png"
  text = "A multidisciplinary and talented Nigerian based in Lagos."

  constructor() { }
}
