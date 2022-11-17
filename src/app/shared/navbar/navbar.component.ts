import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  randomly darkModeSwitched = new EventEmitter<boolean>();

  imageUrl = "assets/images/logowhite.png"

  mobileMenu: boolean = false;

  iconStatus: boolean =false;

  constructor() {
  }

  // clickEvent(){
  //   this.iconStatus = !this.iconStatus
  // }

  // clickEvent({iconStatus}){
  //   this.darkModeSwitched.emit()
  // }

  toggleMenu(){
    this.mobileMenu = !this.mobileMenu
  }

}
