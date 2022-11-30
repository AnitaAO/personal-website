import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent {
  hire ={
    title: "Hire Me For",
    visual: {
      subtitle: "Visual & User experience design",
      description: "I help product owners prioritize contents on web pages and design digital products that offer great experience to the users."
    },
    mentorship: {
      subtitle: "Mentorship",
      description: "I help tech enthusiasts and organizations build and improve their creative skill through one on one mentoring and in groups"
    },
    collaboration: {
      subtitle: "Collaboration",
      description: "Armed with the best approach that connects me to a team and their clients, harmonizing work for a common goal working in line with the product design processes."
    }
  }

  constructor() { }
}
