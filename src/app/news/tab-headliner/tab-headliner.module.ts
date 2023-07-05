import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabHeadlinerRoutingModule } from './tab-headliner-routing.module';
import { TabHeadliner } from './tab-headliner.component';
import {NewsModule} from "../shared/news/news.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHeadlinerRoutingModule,
    NewsModule,
  ],
  declarations: [TabHeadliner]
})
export class TabHeadlinerModule {}
