import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { HomeRegisterComponent } from './components/home/home-content/home-register/home-register.component';
import { HomeContentComponent } from './components/home/home-content/home-content.component';
import { HomeEventListComponent } from './components/home/home-content/home-event-list/home-event-list.component';
import { HomeEventItemComponent } from './components/home/home-content/home-event-list/home-event-item/home-event-item.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
    {

        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: 'events', pathMatch: 'full' },
            {
                path: 'events', component: HomeContentComponent, data: { title: 'หน้าหลัก' }, children: [
                    { path: '', component: HomeEventListComponent },
                    { path: ':id', component: HomeEventItemComponent },
                ]
            },
            { path: 'register', component: HomeRegisterComponent, data: { title: 'สมัครสมาชิก' } },
        ]
    },
    {path: 'admin',component: HomeComponent,data:{title:'Admin'}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
