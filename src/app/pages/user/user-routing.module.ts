import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'edit',
    component: EditProfileComponent
  },
  {
    path:'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
