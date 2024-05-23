import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesCarouselComponent } from './stories-carousel/stories-carousel.component';


@NgModule({
  declarations: [
    StoriesCarouselComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
