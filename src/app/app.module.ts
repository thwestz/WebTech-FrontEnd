import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgxBarcodeModule } from 'ngx-barcode';
import { Ng2Webstorage } from 'ngx-webstorage';
import { LoadingModule } from 'ngx-loading';

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
import { EventService } from './services/event.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EditEventComponent } from './components/event/edit-event/edit-event.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { EventComponent } from './components/event/event.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { EventManagementComponent } from './components/admin/event-management/event-management.component';

import { EventDetailManagementComponent } from './components/admin/event-management/event-detail-management/event-detail-management.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { MyEventComponent } from './components/event/my-event/my-event.component';
import { EventSummaryComponent } from './components/event/event-summary/event-summary.component';
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
    AdminComponent,
    UserManagementComponent,
    EventManagementComponent,
    EventDetailManagementComponent,
    HomeEventComponent,
    MyEventComponent,
    EventSummaryComponent,
  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage,
    AppRoutingModule,
    DateTimePickerModule,
    BrowserAnimationsModule,
    LoadingModule,
    SidebarModule.forRoot(),

  ],
  providers: [SlidebarService, AuthGuard, AuthService, EventService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
