import { Component, OnInit } from '@angular/core';
import { CardModel } from '../card.model';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  howItList: CardModel[] = [
    {
      title: 'Become a member',
      imageUrl: '../../assets/images/how-it-works/become_member.svg',
      body: 'Sign up to sell on SellersHub and reach millions of potential customers.'
      
    },
    {
      title: 'Upload a product',
      imageUrl: '../../assets/images/how-it-works/upload_a_product.svg',
      body: 'Click on the verification link sent to you to confirm your registration'
    },
    {
      title: 'Start selling',
      imageUrl: '../../assets/images/how-it-works/start_selling.svg',
      body: 'Upload your products and start selling!'
    }
  ];

}
