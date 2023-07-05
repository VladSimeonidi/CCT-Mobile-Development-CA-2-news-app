import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFavorites } from './tab-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: TabFavorites,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabFavoritesRoutingModule {}
