import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabGeneral } from './tab-general.component';

describe('Tab2Page', () => {
  let component: TabGeneral;
  let fixture: ComponentFixture<TabGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGeneral],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
