import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  imageUrl = "assets/images/logowhite.png"

  mobileMenu: boolean = false;

  constructor() {
  }

  toggleMenu(){
    this.mobileMenu = !this.mobileMenu
  }

}
