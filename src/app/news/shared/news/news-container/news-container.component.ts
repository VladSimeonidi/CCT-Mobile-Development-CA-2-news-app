import {Component, Input, OnInit} from '@angular/core';
import {NewsHttpService} from "../services/news-http.service";
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {Business} from "../models/business";

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss'],
})
export class NewsContainerComponent implements OnInit {
  @Input() public category: string = "general";
  public currentPage$ = new BehaviorSubject<number>(1)
  public data$ = this.currentPage$.pipe(
    switchMap(currentPage => this.newsHttpService.getBusinessArticles(currentPage, this.category))
  );

  constructor(private newsHttpService: NewsHttpService) {
  }

  ngOnInit() {
  }

  public onPageChange(pageNumber: number) {
    this.currentPage$.next(pageNumber)
  }

}
