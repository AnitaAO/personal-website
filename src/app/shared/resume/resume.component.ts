import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent  {
  createSol = {
    one: "-Determine the structure and design of web pages",
    two: "-Developing features to enhance the user experience and accessibility",
    three: "-Striking a balance between functional and aesthetics from designs Ensuring web design is optimized for smartphones",
    four: "-Maintaining brand consistency throughout the design"
  }

  pharezTech = {
    one: "-Write reusable codes for Redeemed Christian Church of God, Masha-Surulere website",
    two: "-Write reusable codes for Messaging Fintech Services Application",
    three: "-Create new modules for Redeemed Christian Church of God, Masha-Surulere website",
    four: "-Create new modules for Messaging Fintech Services",
    five: "-Application Work with UI/UX team to handle new projects",
    six: "-Consume API endpoints for app usability & functionality"
  }

  lepsta = {
    one: "-Find sponsors for EngineOne activities in West & Eastern Africa.",
    two: "-Identify opportunities to expand the community through partnerships and entering new cities",
    three: "-Analyze the market to gain insights into how to improve performance and maximize growth of the community",
    four: "-Represent the region (West & Eastern Africa) in tech events",
    five: "-Define the community target state, work plan and work streams focusing on impact together with the global champion and team.",
    six: "-Support local groups in implementation, track progress and communicate to the global admin team (Guidione and Kabelo)",
    seven: "-Identify performance gaps and initiate and roll-out improvement projects.",
  }

  techville = {
    one: "-Create Figma files for visual layout of iOS, Android and web pages Graphics design, UI and UX development into customer specifications",
    two: "-Come up with simple logo designs where necessary",
    three: "-Implement and maintain high-quality SEO policies and incorporate them with content produced for the website",
    four: "-Implement and maintain high-quality SEO policies and incorporate them with content produced for the website",
    five: "-Work with UX developers in creating mock-ups for proposed project pages and update them as needed.",
    six: "-Interpret and convert UI designs into websites using Wordpress CMS, html and JavaScript.",
  }
  constructor() { }
}
