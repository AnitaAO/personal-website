import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-cards',
  templateUrl: './design-cards.component.html',
  styleUrls: ['./design-cards.component.scss']
})
export class DesignCardsComponent implements OnInit {
  @Input() design: any;

  constructor() { }

  ngOnInit() {
  }

}
