import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioskopiListComponent } from './bioskopi-list.component';

describe('BioskopiListComponent', () => {
  let component: BioskopiListComponent;
  let fixture: ComponentFixture<BioskopiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioskopiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioskopiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
