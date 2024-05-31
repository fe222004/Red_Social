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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    CreatorComponent,
    NavarComponent,
    CustomerCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    MenubarModule,
    PasswordModule,
    CheckboxModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
