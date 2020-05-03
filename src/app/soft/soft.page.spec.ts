import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftPage } from './soft.page';

describe('SoftPage', () => {
  let component: SoftPage;
  let fixture: ComponentFixture<SoftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
