import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoristaEditComponent } from './pozorista-edit.component';

describe('PozoristaEditComponent', () => {
  let component: PozoristaEditComponent;
  let fixture: ComponentFixture<PozoristaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoristaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoristaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
