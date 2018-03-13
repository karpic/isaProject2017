import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoristaComponent } from './pozorista.component';

describe('PozoristaComponent', () => {
  let component: PozoristaComponent;
  let fixture: ComponentFixture<PozoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
