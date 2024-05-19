import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesCarouselComponent } from './stories-carousel/stories-carousel.component';

const routes: Routes = [
  {
    path: 'stories-carousel',
    component: StoriesCarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
