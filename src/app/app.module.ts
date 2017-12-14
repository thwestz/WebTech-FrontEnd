import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxBarcodeModule } from 'ngx-barcode';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FileUploadModule } from 'ng2-file-upload';

import { DateTimePickerModule } from 'ng-pick-datetime';

import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';
import { SlidebarService } from './services/slidebar.service';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { EventComponent } from './components/event/event.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { EditEventComponent } from './components/event/edit-event/edit-event.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { DetailEventComponent } from './components/event/detail-event/detail-event.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    EventComponent,
    AddEventComponent,
    EditEventComponent,
    EventListComponent,
    DetailEventComponent

  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage,
    AppRoutingModule,
    DateTimePickerModule ,
    BrowserAnimationsModule,
    FileUploadModule,
    SidebarModule.forRoot(),

  ],
  providers: [SlidebarService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
