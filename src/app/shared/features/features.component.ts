import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  downloadResume(){
    const link = this.renderer.createElement('span');
    link.setAttribute('target', '_self');
    link.setAttribute('href', 'https://docs.google.com/document/d/1Tqz6VDT2IKEyY6Z0f24rltGvpcgl7sHtf3xtqX6L4g8/edit?usp=sharing');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
