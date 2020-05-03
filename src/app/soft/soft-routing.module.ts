import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftPage } from './soft.page';

const routes: Routes = [
  {
    path: '',
    component: SoftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftPageRoutingModule {}
