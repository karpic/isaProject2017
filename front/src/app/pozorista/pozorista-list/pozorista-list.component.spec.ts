import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoristaListComponent } from './pozorista-list.component';

describe('PozoristaListComponent', () => {
  let component: PozoristaListComponent;
  let fixture: ComponentFixture<PozoristaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoristaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoristaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
