import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  contactMeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    messge: new FormControl(''),
  })
}
