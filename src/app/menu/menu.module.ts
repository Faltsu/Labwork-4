import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuPageRoutingModule } from './Menu-routing.module';
import { AuthGuard } from '../guards/auth.guard';
// Jarkko Hämäläinen 1701558
//Has paths for the menu array. At the moment authguard blocks access to contact page without login. Proper functionality for authguard pending proper login backend.
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
      {
        path: 'forgot-password',
        loadChildren: '../forgot-password/forgot-password.module#ForgotPasswordPageModule'
        },
      {
        path: 'personalinfo',
        loadChildren: '../personalinfo/personalinfo.module#PersonalinfoPageModule'
      },
      {
        path: 'technical',
        loadChildren: '../technical/technical.module#TechnicalPageModule'
      },
      {
        path: 'soft',
        loadChildren: '../soft/soft.module#SoftPageModule'
      },
      {
        path: 'personal',
        loadChildren: '../personal/personal.module#PersonalPageModule'
      },
      {
        path: 'team',
        loadChildren: '../team/team.module#TeamPageModule'
      },
      {
        path: 'extra',
        loadChildren: '../extra/extra.module#ExtraPageModule'
      }
    ]
},

{
path: '',
redirectTo: '/menu/home'}
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