import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPonudaComponent } from './nova-ponuda.component';

describe('NovaPonudaComponent', () => {
  let component: NovaPonudaComponent;
  let fixture: ComponentFixture<NovaPonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
