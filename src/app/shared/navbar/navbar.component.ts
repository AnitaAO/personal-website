import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  imageUrl = "assets/images/logopurple.png"

  mobileMenu: boolean = false;

  toggleMenu() {
    this.mobileMenu=!this.mobileMenu
  }

}
