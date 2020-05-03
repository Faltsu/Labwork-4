import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
//Jarkko Hämäläinen 1701558
//Guides to the menu that is used for routing this app.
{ path:'', loadChildren: './menu/menu.module#MenuPageModule'},
];

@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule { }



