import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CustomerCreateComponent } from './pages/customer-support/customer-create/customer-create.component';
import { NavarComponent } from './pages/components/navar/navar.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { StoriesComponent } from './pages/components/stories/stories.component';

import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormSuscriptorComponent } from './pages/components/form-suscriptor/form-suscriptor.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { MoreCommentsComponent } from './components/more-comments/more-comments.component';


import { ExplorersComponent } from './pages/contents/explorers/explorers.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './pages/customer-support/customer-list/customer-list.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PostComponent } from './pages/components/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    NavarComponent,
    CustomerCreateComponent,
    StoriesComponent,
    FormSuscriptorComponent,
    ProfileComponent,
    EditProfileComponent,
    CommentsComponent,
    MoreCommentsComponent,
    ExplorersComponent,
    FooterComponent,
    PostComponent,
    RegisterComponent,
    CustomerListComponent

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    PasswordModule,
    CheckboxModule,
    PagesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }
