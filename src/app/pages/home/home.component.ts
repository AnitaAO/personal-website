import { Component, OnInit } from '@angular/core';
import {IHomeWorkData} from "./home-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeWorkData: IHomeWorkData[] = [
    { id: 1, photo: '', title: '', description: ''},
    { id: 2, photo: '', title: '', description: ''},
    { id: 3, photo: '', title: '', description: ''},
    { id: 4, photo: '', title: '', description: ''},
    { id: 5, photo: '', title: '', description: ''},
    { id: 6, photo: '', title: '', description: ''},
    { id: 7, photo: '', title: '', description: ''},
    { id: 8, photo: '', title: '', description: ''},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
