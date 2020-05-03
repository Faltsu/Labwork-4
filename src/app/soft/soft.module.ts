import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftPageRoutingModule } from './soft-routing.module';

import { SoftPage } from './soft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftPageRoutingModule
  ],
  declarations: [SoftPage]
})
export class SoftPageModule {}
