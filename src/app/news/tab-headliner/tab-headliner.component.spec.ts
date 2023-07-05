import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabHeadliner } from './tab-headliner.component';

describe('Tab4Page', () => {
  let component: TabHeadliner;
  let fixture: ComponentFixture<TabHeadliner>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabHeadliner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
