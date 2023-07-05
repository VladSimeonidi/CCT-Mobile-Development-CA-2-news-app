import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabFavorites } from './tab-favorites.component';

describe('Tab3Page', () => {
  let component: TabFavorites;
  let fixture: ComponentFixture<TabFavorites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabFavorites],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFavorites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
