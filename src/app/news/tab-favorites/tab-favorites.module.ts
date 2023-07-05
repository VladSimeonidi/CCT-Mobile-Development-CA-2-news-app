import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabFavorites } from './tab-favorites.component';

import { TabFavoritesRoutingModule } from './tab-favorites-routing.module';
import {NewsModule} from "../shared/news/news.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabFavoritesRoutingModule,
    NewsModule,
  ],
  declarations: [TabFavorites]
})
export class TabFavoritesModule {}
