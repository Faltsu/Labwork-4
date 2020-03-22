import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [

{ path:'', loadChildren: './menu/menu.module#MenuPageModule'},
{ path: 'login', loadChildren: './login/login.module#LoginPageModule'},
{ path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
{ path: 'home', canActivate: [AuthGuard], loadChildren: './home/home.module#HomePageModule'},
{ path: 'contact', canActivate: [AuthGuard], loadChildren: './contact/contact.module#ContactPageModule'},
];


//{

//},
//{
//  path: 'register',
//  loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
//}
//];


@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule { }



