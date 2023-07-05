import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHeadliner } from './tab-headliner.component';

const routes: Routes = [
  {
    path: '',
    component: TabHeadliner
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHeadlinerRoutingModule {}
