import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataentryPage } from './dataentry.page';

const routes: Routes = [
  {
    path: '',
    component: DataentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataentryPageRoutingModule {}
