import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './pages/components/menu/menu.component';
import { CreatorComponent } from './pages/contentCreator/creator/creator.component';
import { NavarComponent } from './pages/components/navar/navar.component';
import { CustomerCreateComponent } from './pages/customer-support/customer-create/customer-create.component';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormSuscriptorComponent } from './pages/components/form-suscriptor/form-suscriptor.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplaintComponent } from './pages/inspector/complaint/complaint.component';
import { InspectorModule } from './pages/inspector/inspector.module';
import { ExplorersComponent } from './pages/contents/explorers/explorers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CreatorComponent,
    NavarComponent,
    CustomerCreateComponent,
    FormSuscriptorComponent,
  ComplaintComponent,
  ExplorersComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    PasswordModule,
    CheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
