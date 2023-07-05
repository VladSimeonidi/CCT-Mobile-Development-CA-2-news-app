import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NewsCardComponent} from "./news-card/news-card.component";
import {NewsContainerComponent} from "./news-container/news-container.component";
import {IonicModule} from "@ionic/angular";
import {PaginationModule} from "../pagination/pagination.module";


@NgModule({
  declarations: [NewsCardComponent, NewsContainerComponent],
  exports: [
    NewsContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgOptimizedImage,
    PaginationModule
  ]
})
export class NewsModule {
}
