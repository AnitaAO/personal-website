import { Component, OnInit, Input } from '@angular/core';
import {IHomeWorkData} from "../../pages/home/home-data";

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
 @Input() works: IHomeWorkData[] = []


  constructor() { }

  ngOnInit(): void {}

}
