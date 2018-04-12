import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioskopiItemComponent } from './bioskopi-item.component';

describe('BioskopiItemComponent', () => {
  let component: BioskopiItemComponent;
  let fixture: ComponentFixture<BioskopiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioskopiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioskopiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
