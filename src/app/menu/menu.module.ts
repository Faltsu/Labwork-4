import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuPageRoutingModule } from './Menu-routing.module';
import { AuthGuard } from '../guards/auth.guard';
// Changes made in MenuPageModule
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
      path: 'home',
      canActivate: [AuthGuard],
      loadChildren: '../home/home.module#HomePageModule'
      },
      {
      path: 'register',
      loadChildren: '../register/register.module#RegisterPageModule'
      },
      { 
      path: 'contact', 
      canActivate: [AuthGuard], 
      loadChildren: '../contact/contact.module#ContactPageModule'},
      {
      path: 'login',
      loadChildren: '../login/login.module#LoginPageModule'
      },
    ]
},

{
path: '',
redirectTo: '/menu/login'
}
]
@NgModule({
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
  })
  export class MenuPageModule { }