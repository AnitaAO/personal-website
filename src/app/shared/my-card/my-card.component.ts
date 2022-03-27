import {Component, Input, OnInit} from '@angular/core';
import { CardModel } from '../card.model';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {
  @Input() cards!: CardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
