import { NgModule } from '@angular/core';
import {BrowserModule,provideClientHydration,} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { CustomerCreateComponent } from './pages/customer-support/customer-create/customer-create.component';
import { NavarComponent } from './pages/components/navar/navar.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { StoriesComponent } from './pages/components/stories/stories.component';

import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormSuscriptorComponent } from './pages/components/form-suscriptor/form-suscriptor.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { promisify } from 'util';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './pages/components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { MoreCommentsComponent } from './components/more-comments/more-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CreatorComponent,
    NavarComponent,
    CustomerCreateComponent,
    StoriesComponent,
    FormSuscriptorComponent,
    ProfileComponent,
    EditProfileComponent,
    PostComponent,
    CommentsComponent,
    MoreCommentsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    PasswordModule,
    CheckboxModule,
    PagesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
   

  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
