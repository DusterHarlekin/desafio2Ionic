import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinternaPageRoutingModule } from './linterna-routing.module';

import { LinternaPage } from './linterna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinternaPageRoutingModule
  ],
  declarations: [LinternaPage]
})
export class LinternaPageModule {}
