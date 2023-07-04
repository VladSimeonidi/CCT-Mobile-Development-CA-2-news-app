import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NewsCardComponent} from "./news-card/news-card.component";
import {NewsContainerComponent} from "./news-container/news-container.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [NewsCardComponent, NewsContainerComponent, PaginationComponent],
  exports: [
    NewsContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgOptimizedImage
  ]
})
export class NewsModule {
}
