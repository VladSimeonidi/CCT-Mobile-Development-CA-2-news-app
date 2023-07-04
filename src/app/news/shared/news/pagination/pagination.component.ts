import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  public currentPage: number = 1;
  @Input() public totalPages: number = 10;
  @Output() public pageChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public nextPage(): void {
    if (!this.isLastPage) {
      this.pageChange.emit(this.currentPage += 1);
      console.log("sssstest", this.currentPage)
    }
  }

  public previousPage(): void {
    if (!this.isFirstPage) {
      this.pageChange.emit(this.currentPage -= 1);
    }
  }

}
