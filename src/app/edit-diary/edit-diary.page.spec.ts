import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDiaryPage } from './edit-diary.page';

describe('EditDiaryPage', () => {
  let component: EditDiaryPage;
  let fixture: ComponentFixture<EditDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
