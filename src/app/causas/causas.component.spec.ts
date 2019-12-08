import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CausasComponent } from './causas.component';

describe('CausasComponent', () => {
  let component: CausasComponent;
  let fixture: ComponentFixture<CausasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
