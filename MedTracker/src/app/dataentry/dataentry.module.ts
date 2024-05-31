import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataentryPageRoutingModule } from './dataentry-routing.module';

import { DataentryPage } from './dataentry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataentryPageRoutingModule
  ],
  declarations: [DataentryPage]
})
export class DataentryPageModule {}
