import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeDiaryPage } from './make-diary.page';

describe('MakeDiaryPage', () => {
  let component: MakeDiaryPage;
  let fixture: ComponentFixture<MakeDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
