import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioskopiEditComponent } from './bioskopi-edit.component';

describe('BioskopiEditComponent', () => {
  let component: BioskopiEditComponent;
  let fixture: ComponentFixture<BioskopiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioskopiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioskopiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
