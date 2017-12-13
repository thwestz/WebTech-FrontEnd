import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' }},
    // { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
