import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica.component';

describe('ZvanicnaProdavnicaComponent', () => {
  let component: ZvanicnaProdavnicaComponent;
  let fixture: ComponentFixture<ZvanicnaProdavnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZvanicnaProdavnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZvanicnaProdavnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
