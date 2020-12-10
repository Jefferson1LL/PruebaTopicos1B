import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDiaryPageRoutingModule } from './make-diary-routing.module';

import { MakeDiaryPage } from './make-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDiaryPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [MakeDiaryPage]
})
export class MakeDiaryPageModule {}
