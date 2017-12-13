import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxBarcodeModule } from 'ngx-barcode';

import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';
import { SlidebarService } from './services/slidebar.service';
import { HomeContentComponent } from './components/home/home-content/home-content.component';
import { HomeRegisterComponent } from './components/home/home-content/home-register/home-register.component';
import { HomeEventListComponent } from './components/home/home-content/home-event-list/home-event-list.component';
import { HomeEventItemComponent } from './components/home/home-content/home-event-list/home-event-item/home-event-item.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    HomeContentComponent,
    HomeRegisterComponent,
    HomeEventListComponent,
    HomeEventItemComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
  ],
  providers: [SlidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
