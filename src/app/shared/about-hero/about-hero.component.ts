import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  template: `

    <div class="py-[40px] space-y-[16px] md:space-y-[24px] md:justify-center items-center">
      <div class="space-y-[8px] md:space-y-[16px] text-center">
        <h4 class=" md:text-[24px]">{{ title }}</h4>
        <p class=" md:text-[18px]">{{ text | summary:10 }}</p>
      </div>

      <div class="flex justify-center items-center space-x-[8px] "></div>
        <em class="fa fa-x fa-download text-purple-900 pr-[8px]"></em>
        <a class="" href="" ><span class="text-[16px]">Download CV</span></a>
      </div>`,
  styleUrls: ['./about-hero.component.scss'],
})
export class AboutHeroComponent  {
title ="My Bio"
text = "My name is Amarachi, I specialise in digital product design and front-end web development. I am a multidisciplinary and talented Nigerian based in Lagos. I am passionate about helping you turn your dreams and ideas into reality; using quality images to tell beautiful stories."
}
