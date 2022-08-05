import { SummaryPipe } from './summary.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule ({
  imports: [CommonModule],
  exports: [SummaryPipe],
  declarations: [SummaryPipe]
})

export class HomeHeroModule{}
