import {Component, Input, OnInit} from '@angular/core';
import { MyCardModel } from ''

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {
  @Input() cards!: MyCardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
