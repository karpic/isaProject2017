import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstaveEditComponent } from './predstave-edit.component';

describe('PredstaveEditComponent', () => {
  let component: PredstaveEditComponent;
  let fixture: ComponentFixture<PredstaveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredstaveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredstaveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
