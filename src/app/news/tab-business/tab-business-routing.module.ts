import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBusiness } from './tab-business.component';

const routes: Routes = [
  {
    path: '',
    component: TabBusiness,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBusinessRoutingModule {}
