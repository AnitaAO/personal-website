import { Component, OnInit, Input } from '@angular/core';
import {ImageListComponent} from "../image-list/image-list.component";

type Images ={
  id: number;
  imageSrc: string;
  imageAlt: string;

}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  @Input()images:Images[]=[];


  constructor() { }

  ngOnInit(): void {}

}
