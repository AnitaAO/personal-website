import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  location = {
    address: "16a Fola Jinadu Cres, Gbagada, Lagos",
    email: "amarachi@amarachi.dev",
    phone: "+234 8065188884"
  }

  log(x: any) {console.log(x)};


  submit(f: any){
    f.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
