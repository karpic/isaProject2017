import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartaEditComponent } from './karta-edit.component';

describe('KartaEditComponent', () => {
  let component: KartaEditComponent;
  let fixture: ComponentFixture<KartaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
