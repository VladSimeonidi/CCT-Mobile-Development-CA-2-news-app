import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabBusiness } from './tab-business.component';
import { TabBusinessRoutingModule } from './tab-business-routing.module';
import {NewsModule} from "../shared/news/news.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabBusinessRoutingModule,
    NewsModule,
  ],
  exports: [
  ],
  declarations: [TabBusiness]
})
export class TabBusinessModule {}
