import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinternaPage } from './linterna.page';

const routes: Routes = [
  {
    path: '',
    component: LinternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinternaPageRoutingModule {}
