import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PozoristaItemComponent } from './pozorista-item.component';

describe('PozoristaItemComponent', () => {
  let component: PozoristaItemComponent;
  let fixture: ComponentFixture<PozoristaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PozoristaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PozoristaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
