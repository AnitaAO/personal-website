import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent  {
  constructor() { }

  Prunedges = [
    {id: 1, job: "Modified HTML, CSS, Javascript, and Typescript to optimize the page’s performance for faster loading and browsing"},
    {id: 2, job: "Utilized strategic engineering procedures to maintain and improve the company’s point of sales system features built through Angular, React, Redux, JQuery, DotNet, Python, and C-Sharp languages."},
    {id: 3, job: "Designed and executed a brand-new retail management solution, ‘Boosta,’ along with a team to help small and medium enterprises scale."},
  ];

  phareztechs = [
    {id: 1, job: "Provided prompt solutions and proactive troubleshooting support that swiftly resolved subtle issues as a junior developer to the software engineering team."},
    {id: 2, job: "Determined areas of improvement by consistently reviewing bugs/fixes/codes."},
    {id: 3, job: "Work with UI/UX team to handle new projects."},
  ];

  createsolutions = [
    { id: 1, job: "Determine the structure and design of web pages" },
    { id: 2, job: "Developing features to enhance the user experience and accessibility" },
    { id: 3, job: "Striking a balance between functional and aesthetics from designs, ensuring web design is optimized for smartphones"},
    { id: 4, job: "Maintaining brand consistency throughout the design"}
  ];

  lepstas = [
    { id: 1, job: ""},
    { id: 1, job: "Find sponsors for EngineOne activities in West & Eastern Africa."},
    { id: 2, job: "Identify opportunities to expand the community through partnerships and entering new cities"},
    { id: 3, job: "Analyze the market to gain insights into how to improve performance and maximize growth of the community"},
    { id: 4, job: "Represent the region (West & Eastern Africa) in tech events"},
    { id: 5, job: "Define the community target state, work plan and work streams focusing on impact together with the global champion and team."},
    { id: 6, job: "Support local groups in implementation, track progress and communicate to the global admin team (Guidione and Kabelo)"},
    { id: 6, job: "Identify performance gaps and initiate and roll-out improvement projects."}
  ];

  techvilles = [
    {id: 1, job: "Create Figma files for visual layout of iOS, Android and web pages Graphics design, UI and UX development into customer specifications"},
    {id: 2, job: "Come up with simple logo designs where necessary"},
    {id: 3, job: "Implement and maintain high-quality SEO policies and incorporate them with content produced for the website"},
    {id: 4, job: "Implement and maintain high-quality SEO policies and incorporate them with content produced for the website"},
    {id: 5, job: "Work with UX developers in creating mock-ups for proposed project pages and update them as needed."},
    {id: 6, job: "Interpret and convert UI designs into websites using Wordpress CMS, html and JavaScript."}
  ]
}
