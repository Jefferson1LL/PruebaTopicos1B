import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDiaryPage } from './make-diary.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDiaryPageRoutingModule {}
