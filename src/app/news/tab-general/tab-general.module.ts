import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabGeneral } from './tab-general.component';
import { TabGeneralRoutingModule } from './tab-general-routing.module';
import {NewsModule} from "../shared/news/news.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabGeneralRoutingModule,
    NewsModule,
  ],
  declarations: [TabGeneral]
})
export class TabGeneralModule {}
