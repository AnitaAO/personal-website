import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  location = {
    address: "16a Fola Jinadu Cres, Gbagada, Lagos",
    email: "amarachi@amarachi.dev",
    phone: "+234 8065188884"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
