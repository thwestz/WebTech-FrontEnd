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

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    {
        path: 'event', component: EventComponent, children: [
            { path: '', component: EventListComponent, data: { title: 'Event' } },
            { path: 'create', component: AddEventComponent, data: { title: 'Create Event' } },
            // { path: ':prodId', component: ProductDetailComponent, data: { title: 'รายละเอียดสินค้า' } },
            // { path: ':prodId/edit', component: EditProductComponent, data: { title: 'แก้ไขสินค้า' } },
            // { path: ':prodId/:serial', component: TrackLogComponent, data: { title: 'ประวัติสินค้า' } }
        ]
    },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' }},
    // { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } },
    { path: 'admin', component: AdminComponent, data:{title:'Admin'}},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
