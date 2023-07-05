import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-business',
        loadChildren: () => import('../tab-business/tab-business.module').then(m => m.TabBusinessModule)
      },
      {
        path: 'tab-general',
        loadChildren: () => import('../tab-general/tab-general.module').then(m => m.TabGeneralModule)
      },
      {
        path: 'tab-favorites',
        loadChildren: () => import('../tab-favorites/tab-favorites.module').then(m => m.TabFavoritesModule)
      },
      {
        path: 'tab-headliner',
        loadChildren: () => import('../tab-headliner/tab-headliner.module').then(m => m.TabHeadlinerModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-business',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-business',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
