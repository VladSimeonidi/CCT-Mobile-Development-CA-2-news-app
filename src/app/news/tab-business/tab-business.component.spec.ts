import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBusiness } from './tab-business.component';

describe('Tab1Page', () => {
  let component: TabBusiness;
  let fixture: ComponentFixture<TabBusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabBusiness],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabBusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
