import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabGeneral } from './tab-general.component';

const routes: Routes = [
  {
    path: '',
    component: TabGeneral,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabGeneralRoutingModule {}
