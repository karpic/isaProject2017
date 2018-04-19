import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBpComponent } from './admin-bp.component';

describe('AdminBpComponent', () => {
  let component: AdminBpComponent;
  let fixture: ComponentFixture<AdminBpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
