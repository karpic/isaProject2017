import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstaveComponent } from './predstave.component';

describe('PredstaveComponent', () => {
  let component: PredstaveComponent;
  let fixture: ComponentFixture<PredstaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredstaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredstaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
