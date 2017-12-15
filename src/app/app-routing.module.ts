import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventComponent } from './components/event/event.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';

import { AdminComponent } from './components/admin/admin.component';
import { EditEventComponent } from './components/event/edit-event/edit-event.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { EventManagementComponent } from './components/admin/event-management/event-management.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { MyEventComponent } from './components/event/my-event/my-event.component';
import { EventSummaryComponent } from './components/event/event-summary/event-summary.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'home/event/:_id', component: HomeEventComponent, data: { title: 'Event Detail' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    {
        path: 'event', component: EventComponent, children: [
            { path: '', component: EventListComponent, data: { title: 'Event' } },
            { path: 'create', component: AddEventComponent, data: { title: 'Create Event' } },
            { path: 'edit/:_id', component: EditEventComponent, data: { title: 'Edit Event' } },
            { path: 'manage/:_id', component: EventSummaryComponent, data: { title: 'Edit Event' } },
            { path: 'list', component: MyEventComponent, data: { title: 'Event Detail' } }
        ], canActivate: [AuthGuard]
    }, {
        path: 'admin', component: AdminComponent, children: [
            { path: '', component: UserManagementComponent, data: { title: 'Admin Management' } },
            { path: 'event', component: EventManagementComponent, data: { title: 'Admin Management' } },

        ], canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
