import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoristeEditComponent } from './pozoriste-edit.component';

describe('PozoristeEditComponent', () => {
  let component: PozoristeEditComponent;
  let fixture: ComponentFixture<PozoristeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoristeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoristeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
